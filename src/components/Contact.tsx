export function Contact() {
    return (
        <div
            className="px-8 py-18 space-y-8 max-w-5xl mx-auto"
            id="contato"
        >
            <h1 className="font-bold text-2xl md:text-4xl text-center">
                CONTATO
            </h1>
            <div className="bg-black px-6 py-12 rounded-2xl space-y-8 lg:py-16">
                <h1 className="text-center font-bold text-4xl">
                    Vamos criar juntos?
                </h1>
                <p className="font-light text-xl md:text-2xl text-center">
                    Agende sua consulta e transforme sua
                    ideia em uma tatuagem exclusiva
                </p>
                <div className="flex flex-col justify-center items-center gap-8 md:flex-row">
                    <a
                        href="https://wa.me/558381734329"
                        className="flex gap-2 border border-[#7F7F7F] w-fit py-2 px-4 rounded-md hover:bg-white transition-all"
                    >
                        <img src="/whats.svg" />
                        <h3 className="text-[#7F7F7F] text-xl">
                            WHATSAPP
                        </h3>
                    </a>
                    <a
                        href="https://www.instagram.com/wilken___tattoo/"
                        className="flex gap-2 border border-[#7F7F7F] w-fit py-2 px-4 rounded-md hover:bg-white transition-all"
                    >
                        <img src="/insta.svg" />
                        <h3 className="text-[#7F7F7F] text-xl">
                            INSTAGRAM
                        </h3>
                    </a>
                </div>
            </div>
        </div>
    );
}
