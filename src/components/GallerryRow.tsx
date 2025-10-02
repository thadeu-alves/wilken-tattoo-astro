export function GallerryRow({
    images,
}: {
    images: string[];
}) {
    return (
        <div className="grid grid-cols-2 grid-rows-1 gap-4 h-96 md:w-1/2">
            <div className="row-span-1">
                <img
                    src={images[0]}
                    alt="Tattoo 1"
                    className="w-full h-full object-cover rounded transition-all duration-300 hover:scale-105 cursor-pointer"
                />
            </div>
            <div className="grid grid-rows-2 gap-4 h-full">
                <img
                    src={images[1]}
                    alt="Tattoo 2"
                    className="w-full h-full object-cover rounded transition-all duration-300 hover:scale-105 cursor-pointer"
                />
                <img
                    src={images[2]}
                    alt="Tattoo 3"
                    className="w-full h-full object-cover rounded transition-all duration-300 hover:scale-105 cursor-pointer"
                />
            </div>
        </div>
    );
}
