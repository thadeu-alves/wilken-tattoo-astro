export function SocialCard() {
    return (
        <section className="flex justify-center items-center px-6 py-8">
            <div className="w-full bg-green-700 rounded-2xl py-4 px-6 flex flex-col gap-4">
                <h1 className="text-center text-md">
                    Fale comigo no WhatsApp
                </h1>
                <a
                    href="https://wa.me/5583981734329?text=Ola.%20Gostaria%20de%20marcar%20uma%20tatuagem."
                    className="border border-white p-2 text-center rounded-full"
                >
                    Agora Mesmo
                </a>
            </div>
        </section>
    );
}
