import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import React, { useEffect } from "react";

export default function CommentBox({picture_id}) {

    const { data, setData, errors, post, reset, processing } = useForm({
        comment: '',
        picture_id: picture_id
    });

    const postComment = (e) => {
        e.preventDefault();

        post(route('comment.save'), {
            preserveScroll: true,
            onSuccess: () => reset()
        });
    };

    return (
        <section className="h-40 border text-black my-20 border-white rounded-md w-[700px] bg-white shadow-md">

            <form onSubmit={postComment} className=" space-y-6">
                <div>
                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.comment}
                        handleChange={(e) => setData("comment", e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton processing={processing}>Publicar</PrimaryButton>
                </div>
            </form>
        </section>
    );
}
