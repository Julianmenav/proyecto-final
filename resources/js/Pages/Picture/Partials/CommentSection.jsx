import React from "react";
import Comment from "./Comment";

export default function CommentSection({picture}) {
    return (
        <div className="flex flex-col gap-4 w-[700px]">
            {picture.comment.map((comment, idx) => {
                return <Comment comment={comment} key={idx} />
            })}
        </div>
    );
}
