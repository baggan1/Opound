import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Solutions', path: '/#services' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'About Us', path: '/about' },
    ];

    const handleNavClick = (path: string) => {
        setIsOpen(false);
        if (path.startsWith('/#')) {
            const section = path.substring(2);
            if (location.pathname !== '/') {
                navigate('/');
                // Need a slight delay to let the page render before scrolling
                setTimeout(() => {
                    const el = document.getElementById(section);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            } else {
                const el = document.getElementById(section);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link to="/" onClick={() => handleNavClick('/')} className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center font-bold text-white text-2xl group-hover:rotate-12 transition-transform">
                        O
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">Opound AI Consulting</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 text-slate-400 font-medium">
                    {navLinks.map(link => (
                        link.path.startsWith('/#') ? (
                            <button
                                key={link.name}
                                onClick={() => handleNavClick(link.path)}
                                className="hover:text-emerald-500 transition-colors text-sm"
                            >
                                {link.name}
                            </button>
                        ) : (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => handleNavClick(link.path)}
                                className={`hover:text-emerald-500 transition-colors text-sm ${location.pathname === link.path && !location.hash ? 'text-emerald-400 font-semibold' : ''}`}
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                    <Link
                        to="/pricing"
                        onClick={() => handleNavClick('/pricing')}
                        className="bg-emerald-600 hover:bg-emerald-500 hover:scale-105 active:scale-95 text-white px-6 py-2.5 rounded-full transition-all flex items-center gap-2 text-sm shadow-lg shadow-emerald-500/20"
                    >
                        Get Started <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-slate-900 z-40 md:hidden transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white"><X size={32} /></button>
                    {navLinks.map(link => (
                        link.path.startsWith('/#') ? (
                            <button
                                key={link.name}
                                onClick={() => handleNavClick(link.path)}
                                className="text-2xl font-bold text-white hover:text-emerald-500"
                            >
                                {link.name}
                            </button>
                        ) : (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => handleNavClick(link.path)}
                                className={`text-2xl font-bold transition-colors ${location.pathname === link.path ? 'text-emerald-400' : 'text-white hover:text-emerald-500'}`}
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                    <Link
                        to="/pricing"
                        onClick={() => handleNavClick('/pricing')}
                        className="bg-emerald-600 text-white px-10 py-4 rounded-full text-xl font-bold"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
};
