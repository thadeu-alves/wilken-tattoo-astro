import { GallerryRow } from "./GallerryRow";

export function Gallery() {
    return (
        <section className="px-8 py-18 space-y-8 max-w-5xl mx-auto">
            <h1 className="font-bold text-2xl md:text-4xl text-center">
                GALERIA
            </h1>

            <div className="md:flex gap-8 space-y-4">
                <GallerryRow
                    images={[
                        "./tattoos/tattoo6.jpeg",
                        "./tattoos/tattoo2.jpeg",
                        "./tattoos/tattoo3.jpeg",
                    ]}
                />
                <GallerryRow
                    images={[
                        "./tattoos/tattoo5.jpeg",
                        "./tattoos/tattoo4.jpeg",
                        "./tattoos/tattoo1.jpeg",
                    ]}
                />
            </div>
            <div className="md:flex gap-8 space-y-4">
                <GallerryRow
                    images={[
                        "./tattoos/tattoo7.jpeg",
                        "./tattoos/tattoo8.jpeg",
                        "./tattoos/tattoo9.jpeg",
                    ]}
                />
                <GallerryRow
                    images={[
                        "./tattoos/tattoo12.jpeg",
                        "./tattoos/tattoo11.jpeg",
                        "./tattoos/tattoo13.jpeg",
                    ]}
                />
            </div>
        </section>
    );
}
