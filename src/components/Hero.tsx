export function Hero() {
    return (
        <div className="flex flex-col items-center px-8 py-18 gap-8">
            <h1 className="font-serif text-4xl md:text-6xl">
                WILKEN TATTOO
            </h1>
            <h2 className="font-light">
                Estilo, Precisão e Confiança em Cada Traço
            </h2>
            <img
                src="/profile.png"
                className="w-full max-w-xl"
            />
        </div>
    );
}
