import { useScroll } from "../hooks/useScroll";
import { GallerryRow } from "./GallerryRow";

export function Gallery() {
    const { visible, elementRef } = useScroll({
        threshold: 0.2,
    });

    return (
        <section
            ref={elementRef}
            className={`px-6 py-18 space-y-8 max-w-5xl mx-auto ${
                visible ? "animate-fade-up" : "opacity-0"
            }`}
            id="galeria"
        >
            <div className="text-center space-y-4">
                <h1 className="font-bold text-2xl md:text-4xl">
                    GALERIA
                </h1>

                <p className="font-light text-lg md:text-xl">
                    Traços que contam histórias
                </p>
            </div>

            <div
                className={`md:flex gap-8 space-y-4 ${
                    visible
                        ? "animate-fade-up animate-delay-[200ms]"
                        : "opacity-0"
                }`}
            >
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
            <div
                className={`md:flex gap-8 space-y-4 ${
                    visible
                        ? "animate-fade-up animate-delay-[400ms]"
                        : "opacity-0"
                }`}
            >
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
