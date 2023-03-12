import GuestNavbar from "./Partials/GuestNavbar";

export default function Guest({ children }) {
    return (
        <div className="">
            <div
                className="min-h-screen w-screen bg-[#242424] fixed top-0 left-0"
                style={{ backgroundImage: 'url("/assets/dotGrid.svg")' }}
            ></div>
            <div
                className="min-h-screen w-screen fixed top-0 left-0 "
                style={{
                    background:
                        "radial-gradient(ellipse at bottom right, rgba(172,63,255,0.2) 0%, rgba(255,255,255,0) 50%) no-repeat",
                }}
            ></div>
            <GuestNavbar />
            <div className="w-full m-auto absolute">
                <div className="w-full m-auto justify-center sm:max-w-md mt-20 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    );
}
