
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, light = false, center = true }) => {
  return (
    <div className={`mb-16 ${center ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-slate-100'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-20 bg-emerald-500 rounded-full ${center ? 'mx-auto' : ''}`}></div>
    </div>
  );
};
