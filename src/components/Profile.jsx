export function Profile() {
    return (
        <div className="w-full flex flex-col md:flex-row justify-center items-center py-12 px-6 gap-8 md:gap-16 border-b-4 border-yellow-600">
            <div className="relative group">
                <img
                    className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-yellow-500 shadow-lg group-hover:border-yellow-300 transition-all duration-500"
                    src="./profilewilken.jpg"
                    alt="Wilken Marley"
                />
                <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-white/30 transition-all duration-500 pointer-events-none"></div>
            </div>

            <div className="text-center md:text-left space-y-4 max-w-md">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        Wilken Marley
                    </h1>
                    <p className="text-yellow-400 font-medium mt-2">
                        Tatuador
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <a
                        href="https://instagram.com/wilken__marley"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-gradient-to-r bg-yellow-800 hover:from-yellow-500 hover:to-yellow-600 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-yellow-500/30"
                    >
                        <img
                            src="./insta.svg"
                            alt="Instagram"
                            className="w-6"
                        />
                        @wilken__marley
                    </a>
                </div>

                <p className="text-gray-300 mt-4 italic">
                    "Transformando ideias em arte permanente
                    com técnica e criatividade."
                </p>
            </div>
        </div>
    );
}
