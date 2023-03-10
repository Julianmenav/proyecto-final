import usePicture from "@/Hooks/usePicture";
import GlobalLayout from "@/Layouts/GlobalLayout";
import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function Picture({ picture, auth, errors, liked, ownPicture }) {
    
    const {id, like, likeCount, likePicture, deletePicture} = usePicture(picture, liked)
    const [deleted, setDeleted] = useState(false);

    function handleLike(e) {
        if(deleted) return;
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

            <div className="flex justify-center items-center h-full text-white">
                <div className="">
                    <div className="flex align-center items-center">
                        {picture.user.name}{" "}
                        <img
                            src={picture.user.profile_pic}
                            alt="profilePic"
                            className={`w-10 h-10 rounded-full object-cover`}
                        />
                    </div>
                    <img className={`max-w-2xl ${deleted? 'brightness-50':''}`} src={picture.image_url} alt="" />
                    <div>
                        <button
                            onClick={handleLike}
                            className={`${
                                like ? "bg-red-400" : "bg-white"
                            } px-2 text-black`}
                        >
                            {likeCount}
                        </button>
                        {true && (
                            <button
                                onClick={handleDelete}
                                className="bg-white border border-black text-black"
                            >
                                borrar
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </GlobalLayout>
    );
}
