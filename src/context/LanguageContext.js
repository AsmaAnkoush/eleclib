import { createContext, useState, useContext } from "react";

// إنشاء الكونتكست
const LanguageContext = createContext();

// مزود السياق
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("ar");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// هوك لاستخدام اللغة
export const useLanguage = () => useContext(LanguageContext);
