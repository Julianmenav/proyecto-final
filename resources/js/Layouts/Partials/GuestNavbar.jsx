import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';


export default function GuestNavbar({onAuthPage}) {

    return (
        <nav className="bg-[#242424]/30 h-16 fixed top-0 w-screen z-50 shadow-xl">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex justify-between items-center h-full">
                    <div className="flex h-full">
                        <Link href="/" className="h-full flex items-center">
                            <ApplicationLogo className="h-5" />
                        </Link>
                    </div>

                    <div className="flex items-center ml-6">
                        {!onAuthPage && (<Link href={route('login')}
                            type="button"
                            className="bg-[#AC3FFF] inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 rounded-md font-bold text-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                        >
                            Log in
                        </Link>)}                      
                    </div>
                </div>
            </div>
        </nav>
    );
}
