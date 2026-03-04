import React from 'react';
import { MiniROIWidget } from '../components/MiniROIWidget';
import { PricingTable } from '../components/PricingTable';
import { PricingFAQ } from '../components/PricingFAQ';
import { YourAITerms } from '../components/YourAITerms';

export const Pricing: React.FC = () => {
    return (
        <>
            <MiniROIWidget />
            <PricingTable />
            <PricingFAQ />
            <YourAITerms />
        </>
    );
};
