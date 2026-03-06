import React from 'react';
import { Hero } from '../components/Hero';
import { WhoWeWorkWith } from '../components/WhoWeWorkWith';
import { ProvenTech } from '../components/ProvenTech';
import { EfficiencyLab } from '../components/EfficiencyLab';
import { ServicesGrid } from '../components/ServicesGrid';
import { ROICalculator } from '../components/ROICalculator';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <WhoWeWorkWith />
            <ServicesGrid />
            <ProvenTech />
            <EfficiencyLab />

            <section id="calculator" className="py-24 bg-slate-900 border-t border-slate-800">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <ROICalculator />
                    </div>
                </div>
            </section>

            <Contact />
        </>
    );
};
