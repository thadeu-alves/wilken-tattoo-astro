import { useState } from "react";

export function Header() {
    const [open, setOpen] = useState(false);

    const links: { href: string; text: string }[] = [
        {
            href: "#sobre",
            text: "Sobre",
        },
        {
            href: "#galeria",
            text: "Galeria",
        },
        {
            href: "#contato",
            text: "Contato",
        },
    ];

    return (
        <div className="flex justify-between items-center px-6 py-4 relative md:max-w-5xl md:mx-auto lg:flex lg:justify-between">
            <h1 className="font-serif text-2xl lg:hidden">
                WT
            </h1>

            <button
                className="focus:outline-none lg:hidden"
                onClick={() => setOpen(!open)}
            >
                <img
                    src="/menu.svg"
                    alt="Menu Icon"
                    className="w-6"
                />
            </button>

            <div
                className={`${
                    !open && "hidden"
                } top-17 left-0 bg-[#212121] w-full absolute z-100 p-6 space-y-4 lg:flex lg:justify-between lg:items-center lg:static lg:p-0 lg:space-y-0`}
            >
                <h1 className="hidden font-serif text-2xl lg:block animate-fade-up">
                    Wilken Tattoo
                </h1>

                <ul
                    className={`space-y-2 lg:space-y-0 lg:flex lg:justify-between lg:gap-4 animate-fade-down ${
                        !open && "animate-fade-up"
                    }`}
                >
                    {links.map(({ href, text }) => {
                        return (
                            <li>
                                <a
                                    href={href}
                                    className="hover:text-[var(--primary)]"
                                    onClick={() =>
                                        setOpen(false)
                                    }
                                >
                                    {text}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <a href="https://wa.me/558381734329">
                    <h2 className="text-primary font-medium border-2 border-[var(--primary)] px-4 py-2 rounded-xl hover:bg-white transition-all animate-fade-up">
                        FALE COMIGO
                    </h2>
                </a>
            </div>
        </div>
    );
}
