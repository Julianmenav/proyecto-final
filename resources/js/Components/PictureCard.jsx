import usePicture from "@/Hooks/usePicture";
import { Link } from "@inertiajs/react";

export default function PictureCard({ picture, ownPicture, liked, remove }) {
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
            <div className="w-full">
                <div className="relative overflow-hidden aspect-video rounded-md">
                    <Link
                        href={route("picture.view", {
                            picture_id: id,
                        })}
                    >
                        <div class="flex items-center justify-center w-full h-full -z-50 absolute bg-gray-300 rounded dark:bg-gray-700">
                            <svg class="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                        </div>
                        <img
                            className="transform-gpu min-w-full aspect-auto -mt-14"
                            src={picture.image_url}
                            alt="imagenCreadaPorUsuario"
                        />
                        <div
                            id="mask"
                            className="z-50 opacity-0 hover:opacity-100 text-white absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-900/[0.7] to-transparent transition duration-300 ease-in-out"
                        >
                            <div className="absolute bottom-0 w-full flex justify-between items-center">
                                <p className="px-5 py-2 font-bold text-lg max-w-">
                                    {picture.description}
                                </p>
                                {ownPicture && (
                                    <button
                                        onClick={handleDelete}
                                        className=" p-1 m-3  text-gray-100 bg-gray-500 opacity-70 text-sm font-bold flex items-center rounded-md shadow-md hover:bg-red-500 hover:opacity-100 active:translate-y-0.5"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            className="text-gray-100 w-6 h-6"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path>
                                            <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </div>
                    </Link>
                </div>
                <div
                    className="w-full p-1 flex justify-end"
                >
                    <div className="flex font-extrabold text-lg text-gray-50 justify-center items-center gap-1">
                        <button
                            onClick={likePicture}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill={like ? '#AC3FFF' : 'none'}
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="#AC3FFF"
                                className={ like ? 'h-6 w-6': 'h-6 w-6 hover:fill-[#AC3FFF] hover:opacity-50'}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                            </svg>
                        </button>
                        {likeCount}
                    </div>
                </div>
            </div>
        </div>
    );
}
