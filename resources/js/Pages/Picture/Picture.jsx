import UserNameAndLogo from "@/Components/UserNameAndLogo";
import usePicture from "@/Hooks/usePicture";
import GlobalLayout from "@/Layouts/GlobalLayout";
import { Head, router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import CommentBox from "./Partials/CommentBox";
import CommentSection from "./Partials/CommentSection";
import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";

export default function Picture({ picture, auth, errors, liked, ownPicture, messages }) {
    const { id, like, likeCount, likePicture, deletePicture } = usePicture(
        picture,
        liked
    );
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false)

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);
    };

    function handleLike(e) {
        e.preventDefault();

        likePicture();
    }

    function handleDelete(e) {
        e.preventDefault();
        deletePicture();

        router.visit(route('dashboard.view'))
    }

    return (
        <GlobalLayout auth={auth} errors={errors} messages={messages}>
            <Head title={`${picture.description}`} />

            <section className="flex flex-col justify-evenly items-center lg:flex-row lg:items-start lg:h-full text-white px-2 2xl:px-20 lg:mt-6">
                <div className="max-w-xs lg:max-w-sm">
                    <UserNameAndLogo user={picture.user} />
                    <div className="w-full">
                        <img
                            className="w-full shadow-xl rounded-md"
                            src={picture.image_url}
                            alt="image"
                        />
                        <p className="font-bold break-words w-full text-sm sm:text-base">{picture.description}</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex font-extrabold text-lg text-gray-50 justify-center items-center gap-1">
                            <button onClick={handleLike}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill={like ? "#AC3FFF" : "none"}
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="#AC3FFF"
                                    className={
                                        like
                                            ? "h-6 w-6"
                                            : "h-6 w-6 hover:fill-[#AC3FFF] hover:opacity-50"
                                    }
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

                        {ownPicture && (
                            <button
                                onClick={confirmUserDeletion}
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
                <div className=" lg:mt-8 w-full max-w-xs sm:max-w-lg lg:max-w-xl xl:max-w-3xl flex flex-col max-h-full">
                    <div className="flex items-center pb-2  ">
                        <div className="text-white text-xl lg:text-2xl">{messages.comments}</div>
                    </div>
                    <CommentBox picture_id={id} messages={messages} />
                    <CommentSection picture={picture} messages={messages} />
                </div>
            </section>
            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={handleDelete} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        {messages.picture_advice}
                    </h2>
                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            {messages.cancel}
                        </SecondaryButton>

                        <DangerButton className="ml-3">
                            {messages.delete}
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </GlobalLayout>
    );
}
