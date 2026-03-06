import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PricingPlan {
  name: string;
  price: string;
  badge?: string;
  timeline?: string;
  minimumCommitment?: string;
  headline: string;
  features: string[];
  notIncluded?: string[];
  whatHappensNext?: string;
  after6Months?: string;
  whoThisIsFor?: string;
  cta: string;
  ctaNote?: string;
  highlighted?: boolean;
}

export interface AnalysisResult {
  coreProblem: string;
  efficiencyGain: string;
  complianceRisk: string;
  recommendedSolution: string;
  techStack: string[];
  implementationTime: string;
  firstStep: string;
}
