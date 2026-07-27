-- Migration: Add extended_state JSONB column to profiles table
-- Run this in the Supabase SQL Editor

-- Add the column (safe — won't error if it already exists)
ALTER TABLE profiles
ADD COLUMN IF NOT EXISTS extended_state JSONB DEFAULT '{}';

-- Add a comment for documentation
COMMENT ON COLUMN profiles.extended_state IS 'Stores SRS data, vocabulary bank, achievements, feature activity, writing errors, daily XP log, and daily challenge state as a JSON blob';
