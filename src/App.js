import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import MaterialsPage from './pages/SubjectList';
import { LanguageProvider } from './context/LanguageContext'; // استيراد الكونتكست

function App() {
    return (
        <LanguageProvider>
            <BrowserRouter>
                <main className="bg-[#e0e7ff] min-h-screen text-gray-900">

                    <Routes>
                        <Route path="/" element={<Hero />} />
                        <Route path="/subjects" element={<MaterialsPage />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </LanguageProvider>
    );
}

export default App;
