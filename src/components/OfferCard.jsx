export function OfferCard() {
    return (
        <section className="flex justify-center items-center p-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 w-full rounded-2xl text-black shadow-lg overflow-hidden">
                <div className="bg-black/10 py-3 px-6">
                    <h2 className="text-sm uppercase tracking-wider font-semibold text-yellow-900">
                        Oferta especial
                    </h2>
                    <h1 className="text-2xl font-bold text-yellow-900">
                        Flash Tattoo
                    </h1>
                </div>

                <div className="p-6 flex flex-col md:flex-row justify-between gap-6">
                    <div className="flex-1">
                        <ul>
                            <li>
                                <p className="font-medium text-yellow-900">
                                    • Tatuagens de até 12cm
                                </p>
                            </li>
                            <li>
                                <p className="font-medium text-yellow-900">
                                    • Aplicação rápida
                                </p>
                            </li>
                            <li>
                                <p className="font-medium text-yellow-900">
                                    • Designs exclusivos
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Preços */}
                    <div className="flex-1">
                        <ul className="space-y-3">
                            <li className="flex justify-between items-center bg-yellow-400/30 px-4 py-2 rounded-lg">
                                <span>Uma tatuagem</span>
                                <span className="font-bold bg-yellow-700 text-white px-3 py-1 rounded-md">
                                    R$ 80,00
                                </span>
                            </li>
                            <li className="flex justify-between items-center bg-yellow-400/40 px-4 py-2 rounded-lg">
                                <span>Duas tatuagens</span>
                                <span className="font-bold bg-yellow-700 text-white px-3 py-1 rounded-md">
                                    R$ 150,00
                                </span>
                            </li>
                            <li className="flex justify-between items-center bg-yellow-400/50 px-4 py-2 rounded-lg">
                                <span>Três tatuagens</span>
                                <span className="font-bold bg-yellow-700 text-white px-3 py-1 rounded-md">
                                    R$ 180,00
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-black/10 px-6 py-3 text-center">
                    <p className="text-xs text-yellow-900 font-medium">
                        *Oferta válida por tempo limitado
                    </p>
                </div>
            </div>
        </section>
    );
}
