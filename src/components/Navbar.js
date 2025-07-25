import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext'; // تأكد من وجود هذا الملف

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { language, toggleLanguage } = useLanguage();
    const isArabic = language === "ar";

    return (
        <nav className="bg-[#1e293b] text-white fixed w-full top-0 left-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex justify-between items-center h-16 ${isArabic ? "flex-row-reverse" : "flex-row"}`}>

                    {/* Logo and Title */}
                    <div className={`flex items-center gap-2 ${isArabic ? "flex-row-reverse" : "flex-row"}`}>
                        <img src="/logo.png" alt="ElecLib Logo" className="w-10 h-10" />
                        <span className="font-bold text-2xl text-white">ElecLib</span>
                    </div>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex gap-6 text-sm font-medium items-center">
                        <li>
                            <Link to="/" className="hover:text-orange-400 transition">
                                {isArabic ? "الرئيسية" : "Home"}
                            </Link>
                        </li>
                        <li>
                            <Link to="/subjects" className="hover:text-orange-400 transition">
                                {isArabic ? "المواد" : "Subjects"}
                            </Link>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-orange-400 transition">
                                {isArabic ? "عن التخصص" : "About"}
                            </a>
                        </li>
                        <li>
                            <button onClick={toggleLanguage} className="text-sm px-2 py-1 bg-gray-600 rounded hover:bg-gray-700">
                                {isArabic ? "English" : "عربي"}
                            </button>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <ul className="md:hidden flex flex-col gap-4 pb-4 pt-2 border-t border-gray-600 text-right">
                        <li>
                            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-orange-400 transition">
                                {isArabic ? "الرئيسية" : "Home"}
                            </Link>
                        </li>
                        <li>
                            <Link to="/subjects" onClick={() => setIsOpen(false)} className="hover:text-orange-400 transition">
                                {isArabic ? "المواد" : "Subjects"}
                            </Link>
                        </li>
                        <li>
                            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-orange-400 transition">
                                {isArabic ? "عن التخصص" : "About"}
                            </a>
                        </li>
                        <li>
                            <button onClick={toggleLanguage} className="text-sm px-2 py-1 bg-gray-600 rounded hover:bg-gray-700">
                                {isArabic ? "English" : "عربي"}
                            </button>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
}
