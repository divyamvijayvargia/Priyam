/*
  # Initial Schema Setup

  1. New Tables
    - awards
    - team_members
    - services
    - jobs
    - testimonials

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Awards Table
CREATE TABLE IF NOT EXISTS awards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Team Members Table
CREATE TABLE IF NOT EXISTS team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  position TEXT NOT NULL,
  bio TEXT,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Services Table
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  details JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Jobs Table
CREATE TABLE IF NOT EXISTS jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  location TEXT,
  job_type TEXT,
  salary_range TEXT,
  description TEXT,
  requirements JSONB,
  benefits JSONB,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  position TEXT,
  content TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE awards ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access to awards"
  ON awards FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to team_members"
  ON team_members FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to services"
  ON services FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to jobs"
  ON jobs FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to testimonials"
  ON testimonials FOR SELECT
  TO public
  USING (true);