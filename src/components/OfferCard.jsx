export function OfferCard() {
    return (
        <section className="flex justify-center items-center p-6">
            <div className="bg-yellow-600 py-4 px-8 w-full flex justify-between rounded-2xl text-black">
                <div>
                    <h2 className="">Oferta especial</h2>
                    <h1 className="text-2xl font-bold">
                        Flash Tattoo
                    </h1>
                    <p className="font-light text-sm mt-2">
                        *Tatuagens de até 12cm
                    </p>
                </div>

                <div>
                    <ul className="h-full flex flex-col justify-between">
                        <li>
                            1 por{' '}
                            <span className="font-bold">
                                R$ 80,00
                            </span>
                        </li>
                        <li>
                            2 por{' '}
                            <span className="font-bold">
                                R$150,00
                            </span>
                        </li>
                        <li>
                            3 por{' '}
                            <span className="font-bold">
                                R$180,00
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
