import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import MaterialsPage from './pages/SubjectList';

function App() {
    return (

            <BrowserRouter>
                <main className="bg-[#e0e7ff] min-h-screen text-gray-900">

                    <Routes>
                        <Route path="/" element={<Hero />} />
                        <Route path="/subjects" element={<MaterialsPage />} />
                    </Routes>
                </main>
            </BrowserRouter>

    );
}

export default App;
