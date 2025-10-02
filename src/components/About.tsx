import { useScroll } from "../hooks/useScroll";

export function About() {
    const { visible, elementRef } = useScroll({
        threshold: 0.2,
    });

    return (
        <div
            ref={elementRef}
            className={`px-6 py-18 flex flex-col gap-8 md:flex-row max-w-5xl mx-auto md:justify-between ${
                visible ? "animate-fade-up" : "opacity-0"
            }`}
            id="sobre"
        >
            <div className="space-y-4 max-w-80 md:space-y-8">
                <h1 className="font-bold text-2xl md:text-4xl">
                    SOBRE O ARTISTA
                </h1>
                <p className="font-light text-lg md:text-xl">
                    Situado em Serra Grande, na Paraíba, o
                    artista traz consigo uma herança
                    cultural rica e anos de dedicação ao
                    desenho tradicional. Agora, essa jornada
                    artística ganha novas dimensões através
                    da tatuagem, onde cada trabalho é uma
                    fusão entre técnica apurada e
                    sensibilidade local.
                </p>
            </div>
            <img
                src="/profile2.png"
                className="max-w-80 md:w-1/2"
            />
        </div>
    );
}
