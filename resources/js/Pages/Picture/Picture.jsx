import UserNameAndLogo from "@/Components/UserNameAndLogo";
import usePicture from "@/Hooks/usePicture";
import GlobalLayout from "@/Layouts/GlobalLayout";
import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import CommentBox from "./Partials/CommentBox";
import CommentSection from "./Partials/CommentSection";

export default function Picture({ picture, auth, errors, liked, ownPicture }) {
    const { id, like, likeCount, likePicture, deletePicture } = usePicture(picture,liked);
    const [deleted, setDeleted] = useState(false);

    function handleLike(e) {
        if (deleted) return;
        e.preventDefault();

        likePicture();
    }

    function handleDelete(e) {
        if (deleted) return;
        e.preventDefault();

        deletePicture();
        setDeleted(true);
    }

    return (
        <GlobalLayout auth={auth} errors={errors}>
            <Head title={`Obra de ${picture.user.name}`} />

            <section className="flex flex-col justify-center items-center h-full text-white">
                <div className="">
                    <UserNameAndLogo user={picture.user} />
                    <img
                        className={`max-w-2xl min-h-[400px]${
                            deleted ? "brightness-50" : ""
                        }`}
                        src={picture.image_url}
                        alt=""
                    />
                    <div>
                        {picture.description}
                    </div>
                    <div>
                        <button
                            onClick={handleLike}
                            className={`${
                                like ? "bg-red-400" : "bg-white"
                            } px-2 text-black`}
                        >
                            {likeCount}
                        </button>
                        {ownPicture && (
                            <button
                                onClick={handleDelete}
                                className="bg-white border border-black text-black"
                            >
                                borrar
                            </button>
                        )}
                    </div>
                </div>

                <CommentBox picture_id={id}/>

                <CommentSection picture={picture} />
            </section>
        </GlobalLayout>
    );
}
