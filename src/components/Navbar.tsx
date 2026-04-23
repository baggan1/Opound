import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
interface NavbarProps {
    onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
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
        { name: 'Services', path: '/#services' },
        { name: 'Who We Work With', path: '/#who-we-work-with' },
        { name: 'Work', path: '/#work' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'About', path: '/about' },
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
        <>
            <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link to="/" onClick={() => handleNavClick('/')} className="flex items-center gap-2 group cursor-pointer">
                        <div className="w-10 h-10 bg-[#00A372] rounded-xl flex items-center justify-center font-bold text-white text-2xl group-hover:rotate-12 transition-transform">
                            O
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">Opound LLC</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-6 text-slate-400 font-medium">
                        {navLinks.map(link => (
                            link.path.startsWith('/#') ? (
                                <button
                                    key={link.name}
                                    onClick={() => handleNavClick(link.path)}
                                    className="hover:text-emerald-500 transition-colors text-sm whitespace-nowrap"
                                >
                                    {link.name}
                                </button>
                            ) : (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => handleNavClick(link.path)}
                                    className={`hover:text-emerald-500 transition-colors text-sm whitespace-nowrap ${location.pathname === link.path && !location.hash ? 'text-emerald-400 font-semibold' : ''}`}
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                        <button
                            onClick={onOpenBooking}
                            className="bg-[#00A372] hover:bg-[#008f64] hover:scale-105 active:scale-95 text-white px-6 py-2.5 rounded-full transition-all flex items-center gap-2 text-sm shadow-lg shadow-[#00A372]/20 whitespace-nowrap ml-2"
                        >
                            Book a Strategy Call <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-slate-900 z-40 lg:hidden transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
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
                        <button
                            onClick={() => { setIsOpen(false); onOpenBooking(); }}
                            className="bg-[#00A372] text-white px-10 py-4 rounded-full text-xl font-bold shadow-lg shadow-[#00A372]/20 mt-4"
                        >
                            Book a Strategy Call
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};
