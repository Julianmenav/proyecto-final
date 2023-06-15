import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdateProfilePictureForm from "./Partials/UpdateProfilePictureForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import GlobalLayout from "@/Layouts/GlobalLayout";

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <GlobalLayout auth={auth}>
            <Head title="Profile" />

            <div className="py-12">
                <div className="max-w-xl mx-auto px-3 sm:px-6 lg:px-8 space-y-6">
                    <UpdateProfilePictureForm className="max-w-xl" />
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className="max-w-xl"
                    />
                    <DeleteUserForm className="bg-zinc-600/50 p-7 rounded-md" />
                </div>
            </div>
        </GlobalLayout>
    );
}
