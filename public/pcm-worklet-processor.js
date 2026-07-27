/**
 * PCM AudioWorklet Processor
 * 
 * Runs in a dedicated audio thread. Buffers raw Float32 PCM samples
 * and posts amplitude for visual feedback. On 'flush' message, 
 * sends accumulated buffer back to main thread.
 * 
 * Loaded via: audioContext.audioWorklet.addModule('/pcm-worklet-processor.js')
 */
class PCMProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this._buffer = [];
    this._stopped = false;

    this.port.onmessage = (event) => {
      if (event.data.type === 'flush') {
        // Concatenate all chunks into one Float32Array
        const totalLength = this._buffer.reduce((sum, chunk) => sum + chunk.length, 0);
        const result = new Float32Array(totalLength);
        let offset = 0;
        for (const chunk of this._buffer) {
          result.set(chunk, offset);
          offset += chunk.length;
        }
        this.port.postMessage({ type: 'buffer', data: result.buffer }, [result.buffer]);
        this._buffer = [];
        this._stopped = true;
      }
    };
  }

  process(inputs) {
    if (this._stopped) return false;

    const input = inputs[0]?.[0]; // mono channel 0
    if (input && input.length > 0) {
      // Copy the samples (input buffer is reused by the engine)
      this._buffer.push(new Float32Array(input));

      // Calculate RMS amplitude for visual feedback
      let sum = 0;
      for (let i = 0; i < input.length; i++) {
        sum += input[i] * input[i];
      }
      const rms = Math.sqrt(sum / input.length);
      this.port.postMessage({ type: 'amplitude', value: rms });
    }
    return true; // keep processor alive
  }
}

registerProcessor('pcm-processor', PCMProcessor);
