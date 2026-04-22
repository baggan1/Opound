export const STRATEGY_SERVICES = [
  'Fractional AI Product Lead',
  'Crypto FIX Audit',
  'AI Readiness Audit',
  'AI Integration & Delivery Sprint',
  'Strategic Advisory for AI Adoption',
  'Compliance & Product Strategy'
] as const;

export type StrategyService = (typeof STRATEGY_SERVICES)[number];
