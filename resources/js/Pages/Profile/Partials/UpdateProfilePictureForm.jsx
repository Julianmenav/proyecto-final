import CircleImage from "@/Components/CircleImage";
import PrimaryButton from "@/Components/PrimaryButton";
import { Transition } from "@headlessui/react";
import { useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function UpdateProfilePictureForm({ className, messages }) {
    const user = usePage().props.auth.user;
    const [profilePicture, setProfilePicture] = useState(user.profile_pic);
    const { data, setData, post, processing, recentlySuccessful } = useForm({
        picture: null,
    });

    useEffect(() => {
        if(!data.picture) return
        // create the preview
        const objectUrl = URL.createObjectURL(data.picture);
        setProfilePicture(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [data.picture]);

    function handlePhotoChange(event) {
        setData("picture", event.target.files[0]);
    }
    function handleDescriptionChange(event) {
        setData("description", event.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        post(route("profile.save"), { data });
    };

    return (
        <section className={className}>
            <form onSubmit={submit} encType="multipart/form-data" className="">
                <div className="flex justify-between items-center gap-5 mb-4">
                    <label
                        htmlFor="dropzone-file"
                        className="flex flex-1 flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg p-4 cursor-pointer bg-gray-300/[0.1] text-white hover:bg-gray-300/[0.2] "
                    >
                        <CircleImage img={profilePicture} className={"w-28 h-28"} />
                        <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                            onChange={handlePhotoChange}
                        />
                    </label>
                </div>
                <div className="flex items-center gap-4">
                    <PrimaryButton processing={processing}>
                        {messages.upload_button}
                    </PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="text-sm text-gray-100">
                            {messages.saved_changes}
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
