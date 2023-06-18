import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdateProfilePictureForm from "./Partials/UpdateProfilePictureForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import GlobalLayout from "@/Layouts/GlobalLayout";

export default function Edit({ auth, mustVerifyEmail, status, messages }) {
    return (
        <GlobalLayout auth={auth} messages={messages}>
            <Head title="Profile" />

            <div className="py-12">
                <div className="max-w-xl mx-auto px-3 sm:px-6 lg:px-8 space-y-6">
                    <UpdateProfilePictureForm className="max-w-xl" messages={messages}/>
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className="max-w-xl"
                        messages={messages}
                    />
                    <DeleteUserForm className="bg-zinc-600/50 p-7 rounded-md" messages={messages}/>
                </div>
            </div>
        </GlobalLayout>
    );
}
