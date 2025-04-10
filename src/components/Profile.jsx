export function Profile() {
    return (
        <div className="w-screen flex flex-col justify-center items-center py-6 border-b-yellow-700 border-b gap-y-2">
            <img
                className="w-32 rounded-full object-cover"
                src="./public/profilewilken.jpg"
                alt="profile image"
            />
            <h1 className="text-xl font-bold mt-4">
                Wilken Marley
            </h1>
            <p className="font-light text-yellow-500 flex items-center gap-2">
                <img
                    src="./public/insta.svg"
                    alt="insta logo"
                    className="w-6"
                />
                @wilken__marley
            </p>
        </div>
    );
}
