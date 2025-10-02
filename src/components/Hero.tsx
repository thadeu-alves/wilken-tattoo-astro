export function Hero() {
    return (
        <div className="flex flex-col items-center px-6 py-18 gap-8">
            <h1 className="font-serif text-5xl md:text-6xl text-center">
                WILKEN TATTOO
            </h1>
            <h2 className="font-light text-lg">
                Estilo, Precisão e Confiança em Cada Traço
            </h2>
            <img
                src="/profile.png"
                className="w-full max-w-xl"
            />
        </div>
    );
}
