import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';


export default function GuestNavbar() {

    return (
        <nav className="bg-[#d9d9d9] border-b border-gray-100">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="shrink-0 flex items-center">
                            <Link href="/">
                                <ApplicationLogo className="h-5" />
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center ml-6">
                        <Link href={route('login')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
