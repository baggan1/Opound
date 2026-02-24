import React from 'react';
import { FounderBio } from '../components/FounderBio';
import { TrustSection } from '../components/TrustSection';

export const About: React.FC = () => {
    return (
        <>
            <div className="pt-32 pb-16 bg-slate-950 text-center">
                <h1 className="text-5xl font-black text-white mb-4 tracking-tighter">About Us</h1>
                <p className="text-slate-400 max-w-2xl mx-auto">The people and principles behind Opound AI Consulting.</p>
            </div>
            <FounderBio />
            <TrustSection />
        </>
    );
};
