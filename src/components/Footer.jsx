export function Footer() {
    return (
        <div className="max-w-5xl mx-auto py-18 px-8">
            <div className="flex justify-between">
                <p className="font-light text-xl md:text-2xl">
                    Developed by{" "}
                    <a
                        href="https://thadeualves.vercel.app"
                        className="text-[#7F7F7F]"
                    >
                        Thadeu Alves
                    </a>
                </p>
                <p className="font-light text-xl md:text-2xl">
                    2025
                </p>
            </div>
            <div className="flex justify-between select-none">
                <h1 className="text-5xl font-bold md:text-8xl lg:text-9xl">
                    WILKEN
                </h1>
                <h1 className="text-5xl font-bold md:text-8xl lg:text-9xl">
                    TATTOO
                </h1>
            </div>
        </div>
    );
}
