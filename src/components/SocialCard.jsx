export function SocialCard() {
    return (
        <section className="flex justify-center items-center px-6 py-8 max-w-5xl mx-auto">
            <div className="w-full bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-6 flex flex-col items-center gap-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                    </svg>
                    <h1 className="text-xl font-bold text-white text-center">
                        Vamos conversar sobre seu projeto?
                    </h1>
                </div>

                <a
                    href="https://wa.me/5583981734329?text=Olá.%20Gostaria%20de%20marcar%20uma%20tatuagem."
                    className="w-full max-w-xs bg-white text-green-700 hover:bg-green-50 px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 transition-colors duration-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                    </svg>
                    Chamar no WhatsApp
                </a>

                <p className="text-green-100 text-sm text-center mt-2">
                    Respondo rápido! ⚡
                </p>
            </div>
        </section>
    );
}
