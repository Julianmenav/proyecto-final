import GlobalLayout from '@/Layouts/GlobalLayout';
import { Head } from '@inertiajs/react';

export default function Galery(props) {
    return (
        <GlobalLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Galeria" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </GlobalLayout>
    );
}
