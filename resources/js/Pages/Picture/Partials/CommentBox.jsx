import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import React, { useEffect } from "react";

export default function CommentBox({ picture_id }) {
    const { data, setData, errors, post, reset, processing } = useForm({
        comment: "",
        picture_id: picture_id,
    });

    const postComment = (e) => {
        e.preventDefault();
        if(data.comment == '') return

        post(route("comment.save"), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <div className="mb-4 text-black rounded-md w-full">
            <form onSubmit={postComment} className="space-y-2">
                <TextInput
                    id="name"
                    className="mt-1 block w-full bg-gray-200 shadow-md text-black font-bold border-none focus:border-none focus:ring-0 placeholder-gray-600"
                    placeholder="Añade un comentario..."
                    value={data.comment}
                    handleChange={(e) => setData("comment", e.target.value)}
                    required
                />
                <button
                    onClick={postComment}
                    className="px-2 py-1.5 bg-gray-500 h-full leading-3 0 text-xs rounded-lg text-white font-bold hover:bg-gray-400 transition duration-300 ease-in-out"
                >
                    Comentar
                </button>
            </form>
        </div>
    );
}
