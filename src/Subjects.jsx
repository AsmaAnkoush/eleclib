import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";

const subjectsByYear = {
    year1: [
        { code: "ENEE1101", name: "Introduction to Electrical Engineering" },
        { code: "ENEE1201", name: "Basic Circuits" },
        { code: "ENCS1102", name: "Introduction to Computing" },
        { code: "PHYS1101", name: "Physics 1" },
        { code: "MATH1101", name: "Calculus 1" },
    ],
    year2: [
        { code: "ENEE2311", name: "Network Analysis 1" },
        { code: "ENCS2308", name: "Computer Organization" },
        { code: "ENEE2408", name: "Electrical Machines" },
        { code: "MATH2201", name: "Differential Equations" },
        { code: "ENEE2210", name: "Electronics 1" },
    ],
    year3: [
        { code: "ENEE3312", name: "Control Systems" },
        { code: "ENEE3301", name: "Power Systems" },
        { code: "ENEE3202", name: "Electronics 2" },
        { code: "ENCS3302", name: "Microprocessors" },
        { code: "MATH3301", name: "Probability and Statistics" },
    ],
    year4: [
        { code: "ENEE4403", name: "Power Electronics" },
        { code: "ENEE4406", name: "Electrical Machines 2" },
        { code: "ENCS4405", name: "Embedded Systems" },
        { code: "ENEE4302", name: "Communication Systems" },
        { code: "ENEE4306", name: "Advanced Control" },
    ],
    year5: [
        { code: "ENEE5501", name: "Graduation Project" },
        { code: "ENEE5401", name: "Smart Grids" },
        { code: "ENEE5304", name: "Wireless Communications" },
        { code: "ENEE5205", name: "Robotics" },
        { code: "ENEE5305", name: "Advanced Electronics" },
    ]
};

export default function SubjectList() {
    const { language } = useContext(LanguageContext);
    const isArabic = language === "ar";

    const [searches, setSearches] = useState({
        year1: "",
        year2: "",
        year3: "",
        year4: "",
        year5: "",
    });

    const handleSearch = (year, value) => {
        setSearches(prev => ({ ...prev, [year]: value }));
    };

    return (
        <main
            className="min-h-screen bg-cover bg-center px-4 py-10 flex items-start justify-center"
            style={{ backgroundImage: "url('/images.jpeg')" }}
            dir={isArabic ? "rtl" : "ltr"}
        >
            <div className="absolute inset-0 bg-[#0f172a]/80 backdrop-blur-md z-0" />

            <div className="relative z-10 w-full max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center text-yellow-400 mb-10 drop-shadow-sm">
                    {isArabic
                        ? "المواد حسب السنوات الدراسية وفق الخطة المعتمدة في رتاج"
                        : "Courses by Academic Year (Retaj Official Plan)"}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {Object.entries(subjectsByYear).map(([yearKey, subjects]) => {
                        const filtered = subjects.filter(s =>
                            s.code.toLowerCase().includes(searches[yearKey].toLowerCase()) ||
                            s.name.toLowerCase().includes(searches[yearKey].toLowerCase())
                        );

                        const yearLabel = {
                            year1: isArabic ? "سنة أولى" : "Year 1",
                            year2: isArabic ? "سنة ثانية" : "Year 2",
                            year3: isArabic ? "سنة ثالثة" : "Year 3",
                            year4: isArabic ? "سنة رابعة" : "Year 4",
                            year5: isArabic ? "سنة خامسة" : "Year 5",
                        }[yearKey];

                        return (
                            <div
                                key={yearKey}
                                className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white rounded-2xl p-5 shadow-lg border border-white/10 backdrop-blur-lg flex flex-col max-h-[520px]"
                            >
                                <h3 className="text-lg font-bold text-sky-400 text-center mb-3">
                                    {yearLabel}
                                </h3>

                                <input
                                    type="text"
                                    placeholder={isArabic ? "ابحث..." : "Search..."}
                                    value={searches[yearKey]}
                                    onChange={e => handleSearch(yearKey, e.target.value)}
                                    className="mb-4 px-3 py-2 rounded-full text-sm bg-white/10 placeholder-white text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-sky-400"
                                />

                                <div className="overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-slate-800 pr-1">
                                    {filtered.map(subj => (
                                        <div
                                            key={subj.code}
                                            className="bg-sky-950/60 rounded-xl p-3 shadow text-sm border border-sky-800"
                                        >
                                            <h4 className="font-bold text-sky-400">{subj.code}</h4>
                                            <p className="text-slate-200">{subj.name}</p>
                                        </div>
                                    ))}
                                    {filtered.length === 0 && (
                                        <p className="text-center text-slate-400 text-sm mt-4">
                                            {isArabic ? "لا يوجد مواد" : "No subjects found"}
                                        </p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <p className="text-center text-xs text-slate-400 mt-10">© 2025 - ElecLib</p>
            </div>
        </main>
    );
}
