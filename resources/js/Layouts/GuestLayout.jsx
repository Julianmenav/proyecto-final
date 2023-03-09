import GuestNavbar from "./Partials/GuestNavbar";

export default function Guest({ children }) {
    return (
        <div
            className="min-h-screen bg-[#242424]"
            style={{ backgroundImage: 'url("/assets/dotGrid.svg")' }}
        >
                <GuestNavbar /> 
                <div className="w-full m-auto justify-center sm:max-w-md mt-20 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    {children}
                </div>
        </div>
    );
}
