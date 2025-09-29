export function About() {
    return (
        <div className="px-8 py-18 flex flex-col gap-8 md:flex-row max-w-5xl mx-auto md:justify-between">
            <div className="space-y-4 max-w-80 md:space-y-8">
                <h1 className="font-bold text-2xl md:text-4xl">
                    SOBRE O ARTISTA
                </h1>
                <p className="font-light md:text-xl">
                    Situado na cidade de Serra Grande, na
                    Paraíba, com anos de experiência em
                    desenho e uma nova caminhada no mundo da
                    tatuagem.
                </p>
            </div>
            <img
                src="/profile2.png"
                className="max-w-80 md:w-1/2"
            />
        </div>
    );
}
