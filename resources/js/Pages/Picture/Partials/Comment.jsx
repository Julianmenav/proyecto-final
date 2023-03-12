import DangerButton from "@/Components/DangerButton";
import UserNameAndLogo from "@/Components/UserNameAndLogo";
import { router, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function Comment({ comment, ownComment }) {
    const [editable, setEditable] = useState(false);
    const { data, setData, put, reset, processing } = useForm({
        comment_text: comment.comment_text,
        id: comment.id,
    });

    useEffect(() => {
        setData({ comment_text: comment.comment_text, id: comment.id });
    }, [comment]);

    function editComment(e) {
        e.preventDefault();
        put(route("comment.update"), {
            preserveScroll: true,
            onSuccess: () => setEditable(false),
        });
    }

    function deleteComment() {
        router.delete(route("comment.delete", { id: comment.id }), {
            preserveState: true,
            preserveScroll: true,
        });
    }

    return (
        <div className="bg-white overflow-hidden w-full rounded-xl shadow-md text-black">
            <div className="flex items-center justify-between">
                <UserNameAndLogo user={comment.user} />
                <div>
                    {ownComment && (
                        <button
                            className="border border-black"
                            onClick={() => setEditable(!editable)}
                        >
                            {editable ? "No Edit" : "Edit"}
                        </button>
                    )}
                </div>
            </div>
            <div className="h-10 bg-gray-400 p-3">
                {editable ? (
                    <form onSubmit={editComment}>
                        <input
                            required
                            type="text"
                            value={data.comment_text}
                            onChange={(e) =>
                                setData("comment_text", e.target.value)
                            }
                        />
                    </form>
                ) : (
                    <div onClick={() => setEditable(true)}>
                        {comment.comment_text}
                    </div>
                )}
            </div>
            <div className="text-xs bg-gray-800 text-white p-1 flex justify-between">
                <p>{comment.updated_at.split("T")[0]}</p>
                {ownComment && (
                    <DangerButton onClick={deleteComment}>Borrar</DangerButton>
                )}
            </div>
        </div>
    );
}
