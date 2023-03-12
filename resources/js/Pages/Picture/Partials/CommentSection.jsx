import { usePage } from "@inertiajs/react";
import React from "react";
import Comment from "./Comment";

export default function CommentSection({picture}) {
    const auth_user = usePage().props.auth.user
    

    return (
        <div className="flex flex-col gap-4 w-[750px] max-h-[550px] scrollbar scrollbar-thumb-main scrollbar-track-slate-500 overflow-y-scroll pr-8">
            {picture.comment.map((comment, idx) => {
                const ownComment = auth_user?.id == comment.user_id
                return <Comment comment={comment} ownComment={ownComment} key={idx} />
            })}
        </div>
    );
}
