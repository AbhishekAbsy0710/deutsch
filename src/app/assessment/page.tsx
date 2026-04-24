"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Briefcase, GraduationCap, Plane, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { useProgressStore } from "@/store/useProgressStore";

const goals = [
  { id: "job", title: "Job in Germany", icon: Briefcase, desc: "Professional vocabulary and formal communication." },
  { id: "study", title: "University / Study", icon: GraduationCap, desc: "Academic German and exam preparation." },
  { id: "travel", title: "Travel", icon: Plane, desc: "Basic survival phrases and casual chatting." },
  { id: "life", title: "Daily Life", icon: Home, desc: "Supermarket, renting, making friends." },
];

const levels = [
  { id: "A0", title: "Absolute Beginner", desc: "I know zero German." },
  { id: "A1", title: "Beginner", desc: "I know basic phrases (Hallo, Danke)." },
  { id: "A2", title: "Elementary", desc: "I can have very simple conversations." },
  { id: "B1", title: "Intermediate", desc: "I can talk about familiar topics." },
];

export default function AssessmentPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState<string | null>(null);
  const [level, setLevel] = useState<string | null>(null);
  const setAssessment = useProgressStore(s => s.setAssessment);

  const handleNext = () => {
    if (step === 1 && goal) setStep(2);
    else if (step === 2 && level) {
      setAssessment(goal!, level!);
      router.push("/learn");
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="mb-8">
          <Progress value={step === 1 ? 50 : 100} className="h-2" />
          <p className="text-sm text-muted-foreground mt-2 text-right">Step {step} of 2</p>
        </div>

        {step === 1 ? (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Why are you learning German?</h1>
              <p className="text-muted-foreground">We'll personalize your learning path based on your goal.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {goals.map((g) => {
                const Icon = g.icon;
                const isSelected = goal === g.id;
                return (
                  <Card 
                    key={g.id} 
                    className={cn(
                      "cursor-pointer transition-all hover:border-primary",
                      isSelected ? "border-primary ring-1 ring-primary bg-primary/5" : ""
                    )}
                    onClick={() => setGoal(g.id)}
                  >
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <div className={cn("p-2", isSelected ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground")}>
                        <Icon size={24} />
                      </div>
                      <CardTitle className="text-xl">{g.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{g.desc}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">What is your current level?</h1>
              <p className="text-muted-foreground">Don't worry, we can adjust this later.</p>
            </div>
            
            <div className="grid gap-4">
              {levels.map((l) => {
                const isSelected = level === l.id;
                return (
                  <Card 
                    key={l.id} 
                    className={cn(
                      "cursor-pointer transition-all hover:border-primary",
                      isSelected ? "border-primary ring-1 ring-primary bg-primary/5" : ""
                    )}
                    onClick={() => setLevel(l.id)}
                  >
                    <CardHeader className="py-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <div className={cn("w-12 h-12 flex items-center justify-center font-bold text-lg", isSelected ? "bg-primary text-primary-foreground" : "bg-secondary")}>
                            {l.id}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{l.title}</CardTitle>
                            <CardDescription>{l.desc}</CardDescription>
                          </div>
                        </div>
                        <div className={cn("w-6 h-6 border-2 flex items-center justify-center", isSelected ? "border-primary" : "border-muted")}>
                          {isSelected && <div className="w-3 h-3 bg-primary" />}
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-10 flex justify-end">
          <Button 
            size="lg" 
            onClick={handleNext}
            disabled={step === 1 ? !goal : !level}
            className="w-full sm:w-auto"
          >
            {step === 1 ? "Continue" : "Start Learning"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
