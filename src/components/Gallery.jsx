export function Gallery() {
    return (
        <section className="px-6 space-y-4 max-w-5xl mx-auto">
            <div className="text-center flex items-center gap-4">
                <div className="w-full h-1 bg-yellow-600 rounded-full"></div>
                <h1 className="text-2xl font-bold italic">
                    Galeria
                </h1>
                <div className="w-full h-1 bg-yellow-600 rounded-full"></div>
            </div>

            <div className="md:flex gap-8 space-y-4">
                <div className="grid grid-cols-2 grid-rows-1 gap-4 h-96">
                    <div className="row-span-1">
                        <img
                            src="./tattoos/tattoo5.jpeg"
                            alt="Tattoo 1"
                            className="w-full h-full object-cover rounded transition-all duration-300 hover:scale-105 cursor-pointer"
                        />
                    </div>
                    <div className="grid grid-rows-2 gap-4 h-full">
                        <img
                            src="./tattoos/tattoo2.jpeg"
                            alt="Tattoo 2"
                            className="w-full h-full object-cover rounded transition-all duration-300 hover:scale-105 cursor-pointer"
                        />
                        <img
                            src="./tattoos/tattoo3.jpeg"
                            alt="Tattoo 3"
                            className="w-full h-full object-cover rounded transition-all duration-300 hover:scale-105 cursor-pointer"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 grid-rows-1 gap-4 h-96">
                    <div className="row-span-1">
                        <img
                            src="./tattoos/tattoo6.jpeg"
                            alt="Tattoo 1"
                            className="w-full h-full object-cover rounded transition-all duration-300 hover:scale-105 cursor-pointer"
                        />
                    </div>
                    <div className="grid grid-rows-2 gap-4 h-full">
                        <img
                            src="./tattoos/tattoo1.jpeg"
                            alt="Tattoo 2"
                            className="w-full h-full object-cover rounded transition-all duration-300 hover:scale-105 cursor-pointer"
                        />
                        <img
                            src="./tattoos/tattoo4.jpeg"
                            alt="Tattoo 3"
                            className="w-full h-full object-cover rounded transition-all duration-300 hover:scale-105 cursor-pointer"
                        />
                    </div>
                </div>
            </div>
            <div className="text-center flex items-center gap-4">
                <div className="w-full h-1 bg-yellow-600 rounded-full"></div>
            </div>
        </section>
    );
}
