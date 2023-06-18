import { usePage } from "@inertiajs/react";
import React from "react";
import Comment from "./Comment";

export default function CommentSection({picture, messages}) {
    const auth_user = usePage().props.auth.user


    return (
        <div className="flex flex-col gap-4 w-full scrollbar scrollbar-thumb-main scrollbar-track-slate-500 overflow-y-scroll mb-12">
            {picture.comment.slice(0).reverse().map((comment, idx) => {
                const ownComment = auth_user?.id == comment.user_id
                return <Comment comment={comment} ownComment={ownComment} key={idx} messages={messages}/>
            })}
        </div>
    );
}
