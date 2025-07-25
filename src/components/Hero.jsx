import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <div
            className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-4"
            style={{ backgroundImage: "url('/images.jpeg')" }}
            dir="rtl"
        >
            {/* طبقة خلفية داكنة */}
            <div className="absolute inset-0 bg-[#0f172a]/80 backdrop-blur-sm"></div>

            {/* محتوى البوكس */}
            <div className="relative z-10 bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white rounded-2xl shadow-2xl w-full max-w-3xl px-10 py-14 space-y-8 text-center border border-white/10 backdrop-blur-lg">

                {/* الدعاء */}
                <p className="text-xl font-semibold text-yellow-400 drop-shadow-sm">
                    اللهم انفعنا بما علَّمتنا، وعلِّمنا ما ينفعنا، وزدنا علمًا.
                </p>

                {/* اسم المكتبة مع اللوجو */}
                <h1 className="text-3xl md:text-4.5xl font-extrabold flex justify-center items-center gap-2 text-sky-400">
                    <img src="/logo.png" alt="logo" className="w-8 h-8" />
                    ElecLib - مكتبة الهندسة الكهربائية
                </h1>

                {/* وصف المكتبة */}
                <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
                    مكتبة إلكترونية لطلاب الهندسة الكهربائية، تم إعدادها بواسطة طلاب وخريجي التخصص.
                </p>
                <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
                    تضم فورمات، تلاخيص، محاضرات، وبروجكتات سابقة لمواد التخصص، مع العمل المستمر على إضافة باقي المواد تدريجيًا.
                </p>

                {/* أزرار المواد */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">

                    <Link
                        to="/labs"
                        className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-10 rounded-full shadow-lg text-lg transition transform hover:scale-105"
                    >
                        Labs
                    </Link>
                    <Link
                        to="/subjects"
                        className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-10 rounded-full shadow-lg text-lg transition transform hover:scale-105"
                    >
                        Cources
                    </Link>
                </div>

                {/* فوتر */}
                <p className="text-xs text-gray-500 mt-6">© 2025 - ElecLib</p>
            </div>
        </div>
    );
}
