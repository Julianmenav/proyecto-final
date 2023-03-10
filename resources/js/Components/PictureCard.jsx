import usePicture from "@/Hooks/usePicture";
import { Link, usePage } from "@inertiajs/react";

export default function PictureCard({ picture, ownPicture, liked, remove }) {
    const authUser = usePage().props.auth.user;

    const { id, like, likeCount, likePicture, deletePicture } = usePicture(
        picture,
        liked
    );

    const handleDelete = (e) => {
        e.preventDefault();

        deletePicture();
        remove(id);
    };

    return (
        <div className="">
            <div className="rounded-md overflow-hidden relative w-full aspect-video">
                <Link
                    href={route("picture.view", {
                        picture_id: id,
                    })}
                >
                    <img
                        className="hover:scale-110 transition-all duration-300 ease-out transform-gpu"
                        src={picture.image_url}
                        alt="imagenCreadaPorUsuario"
                    />
                </Link>
                <div className="bg-black bg-opacity-20 w-full h-6 absolute bottom-0 px-2 flex justify-between">
                    {/* Link href={route('galery)} */}
                    <div className="text-white">{picture.user.name}</div>
                    <div className="flex">
                        {authUser && (
                            <button
                                onClick={likePicture}
                                className={`${
                                    like ? "bg-red-400" : "bg-white"
                                } px-2 text-black`}
                            >
                                {likeCount}
                            </button>
                        )}
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
        </div>
    );
}
