import DangerButton from "@/Components/DangerButton";
import UserNameAndLogo from "@/Components/UserNameAndLogo";
import { router, useForm } from "@inertiajs/react";
import React, { useEffect, useRef, useState } from "react";

export default function Comment({ comment, ownComment }) {
    const [editable, setEditable] = useState(false);
    const { data, setData, put, reset, processing } = useForm({
        comment_text: comment.comment_text,
        id: comment.id,
    });
    const inputRef = useRef(null);
    
    useEffect(() => {
      if (editable) {
        inputRef.current.focus();
      }
    }, [editable]);


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
            preserveScroll: true,
        });
    }

    const handleEdit = () => {
        setEditable(!editable);
        document.getElementById("editCommentInput").focus();
    };

    return (
        <div className="w-full rounded-xl shadow-md font-bold text-white block bg-gray-300/[0.1]">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <UserNameAndLogo user={comment.user} />
                    <div className="text-xs text-gray-500">
                        {comment.updated_at.split("T")[0]}
                    </div>
                </div>
                <div className="flex gap-2 px-2">
                    {ownComment && (
                        <>
                            {editable ? (
                                <div className="px-2 py-1.5 h-full leading-3 0 text-xs rounded-lg text-white font-bold bg-gray-400 transition duration-300 ease-in-out">
                                    Editando
                                </div>
                            ) : (
                                <button
                                    className="px-2 py-1.5 bg-gray-500 h-full leading-3 0 text-xs rounded-lg text-white font-bold hover:bg-gray-400 transition duration-300 ease-in-out"
                                    onClick={handleEdit}
                                >
                                    Editar
                                </button>
                            )}

                            <button
                                onClick={deleteComment}
                                className="px-2 py-1.5 bg-red-500 h-full leading-3 0 text-xs rounded-lg text-white font-bold hover:bg-red-400 transition duration-300 ease-in-out"
                            >
                                Borrar
                            </button>
                        </>
                    )}
                </div>
            </div>
            <div className=" px-6 flex items-center">
                {editable ? (
                    <form
                        onSubmit={editComment}
                        className="bg-transparent border-none w-full"
                    >
                        <input
                            id="editCommentInput"
                            required
                            ref={inputRef} 
                            type="text"
                            value={data.comment_text}
                            className="bg-white/[0.1] w-full rounded-md border-none ring-0 focus:ring-0 m-0 p-0 px-3"
                            onChange={(e) =>
                                setData("comment_text", e.target.value)
                            }
                            onBlur={(e) => setEditable(false)}
                        />
                    </form>
                ) : (
                    <p className="break-words w-full text-sm sm:text-base pb-3">{comment.comment_text}</p>
                )}
            </div>
        </div>
    );
}
