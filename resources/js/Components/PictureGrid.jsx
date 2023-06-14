import React from "react";
import PictureCard from "./PictureCard";

export default function PictureGrid({pictures, removeImg, auth}) {
    const style = {
      gridTemplateColumns: "",
    };

    return (
        <div className="mt-4 grid gap-y-6 gap-x-5 2xl:gap-x-24 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 " style={style}>
            {pictures.map((picture, idx) => {
                const ownPicture = picture.user_id == auth.user?.id;
                const liked = picture.like
                    .map((el) => el.id)
                    .includes(auth.user?.id);
                const saved = picture.saved_items
                    .map((el) => el.user_id)
                    .includes(auth.user?.id)
                return (
                    <PictureCard
                        picture={picture}
                        liked={liked}
                        saved={saved}
                        ownPicture={ownPicture}
                        remove={removeImg}
                        key={idx}
                    />
                );
            })}
        </div>
    );
}
