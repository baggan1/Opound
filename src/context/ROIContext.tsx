import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ROIContextType {
    employees: number;
    hours: number;
    rate: number;
    losingAmount: number;
    opoundCost: number;
    setEmployees: (val: number) => void;
    setHours: (val: number) => void;
    setRate: (val: number) => void;
}

const ROIContext = createContext<ROIContextType | undefined>(undefined);

export const ROIProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [employees, setEmployees] = useState(5);
    const [hours, setHours] = useState(5);
    const [rate, setRate] = useState(42);
    const [losingAmount, setLosingAmount] = useState(4200);
    const [opoundCost, setOpoundCost] = useState(2450);

    const WEEKS_PER_MONTH = 4;

    useEffect(() => {
        const totalHoursPerMonth = employees * hours * WEEKS_PER_MONTH;
        const loss = totalHoursPerMonth * rate;

        let cost = 2450;
        if (loss > 10000) {
            cost = Math.max(2450, Math.floor(loss * 0.20));
        }

        setLosingAmount(loss);
        setOpoundCost(cost);
    }, [employees, hours, rate]);

    return (
        <ROIContext.Provider value={{ employees, hours, rate, losingAmount, opoundCost, setEmployees, setHours, setRate }}>
            {children}
        </ROIContext.Provider>
    );
};

export const useROI = () => {
    const context = useContext(ROIContext);
    if (context === undefined) {
        throw new Error('useROI must be used within an ROIProvider');
    }
    return context;
};
