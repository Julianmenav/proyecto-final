import PictureGrid from "@/Components/PictureGrid";
import PrimaryLink from "@/Components/PrimaryLink";
import ProfileInfo from "@/Components/ProfileInfo";
import SearchRelationButton from "@/Components/SearchRelationButton";
import ShowMoreButton from "@/Components/ShowMoreButton";
import SortMenu from "@/Components/SortMenu";
import useOnScreen from "@/Hooks/useOnScreen";
import usePaginate from "@/Hooks/usePaginate";
import useSort from "@/Hooks/useSort";
import GlobalLayout from "@/Layouts/GlobalLayout";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";

export default function Dashboard({
    auth,
    errors,
    picturesPag,
    morePages,
    user,
    messages
}) {
    const { sortCategory, sortOrder, relation, handleOrder, handleCategory, handleRelation} = useSort();
    const { pictures, showMore, processing, nextPage, removeImg } = usePaginate( picturesPag, morePages );

    const ref = useRef(null)
    const isVisible = useOnScreen(ref)

    useEffect(() => {
      if(processing) return
      if(!isVisible) return

      nextPage()

    }, [isVisible, processing])


    return (
        <GlobalLayout auth={auth} errors={errors} messages={messages}>
            <Head title={user.name} />
            <section className="mx-2 sm:mx-8 md:mx-16 lg:mx-28">
                <div className="sm:flex items-center">
                    {auth.user.id === user.id ? (
                        <Link href={route("profile.edit")}>
                            <ProfileInfo user={user} messages={messages} />
                        </Link>
                    ) : (
                        <ProfileInfo user={user} messages={messages}/>
                    )}
                    <div className="flex flex-1 justify-evenly items-center mx-5 md:mx-10 border-b border-[#AC3FFF]/[0.8]">
                        <SearchRelationButton
                            active={relation === "own"}
                            onClick={() => handleRelation("own")}
                        >
                            {messages.created}
                        </SearchRelationButton>
                        <SearchRelationButton
                            active={relation === "saved"}
                            onClick={() => handleRelation("saved")}
                        >
                            {messages.stored}
                        </SearchRelationButton>
                    </div>
                </div>

                <section id="content" className="mt-8">
                    {pictures.length == 0 ? (
                        <>
                            <div className="py-6 flex flex-col sm:flex-row items-center justify-center">
                                <img
                                    src="/storage/dizzy-robot.png"
                                    className="w-[220px]"
                                    alt=""
                                />
                                <p className="text-white text-xl py-2 md:text-4xl text-bold">
                                    ... {messages.empty}
                                </p>
                            </div>
                            <div className="flex justify-center">
                                {relation === "own" ? (
                                    <PrimaryLink
                                        text={messages.button_create}
                                        href={route("create.view")}
                                        className="bg-gray-100 text-black hover:bg-gray-200"
                                    ></PrimaryLink>
                                ) : (
                                    <PrimaryLink
                                        text={messages.button_discover_2}
                                        href={route("discover.view")}
                                        className="bg-gray-100 text-black hover:bg-gray-200"
                                    ></PrimaryLink>
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                            <SortMenu
                                sortCategory={sortCategory}
                                sortOrder={sortOrder}
                                handleOrder={handleOrder}
                                handleCategory={handleCategory}
                                messages={messages}
                            />
                            <PictureGrid
                                pictures={pictures}
                                removeImg={removeImg}
                                auth={auth}
                            />
                            <ShowMoreButton
                                refe={ref}
                                className="w-full flex justify-center my-20 "
                                nextPage={nextPage}
                                showMore={showMore}
                                processing={processing}
                            />
                        </>
                    )}
                </section>
            </section>
        </GlobalLayout>
    );
}
