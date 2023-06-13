import PictureGrid from "@/Components/PictureGrid";
import PrimaryLink from "@/Components/PrimaryLink";
import ProfileInfo from "@/Components/ProfileInfo";
import SearchRelationButton from "@/Components/SearchRelationButton";
import ShowMoreButton from "@/Components/ShowMoreButton";
import SortMenu from "@/Components/SortMenu";
import usePaginate from "@/Hooks/usePaginate";
import useSort from "@/Hooks/useSort";
import GlobalLayout from "@/Layouts/GlobalLayout";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

export default function Dashboard({ auth, errors, picturesPag, morePages, user }) {
    const { sortCategory, sortOrder, relation, handleOrder, handleCategory, handleRelation } = useSort();
    const { pictures, showMore, processing, nextPage, removeImg } = usePaginate(picturesPag, morePages);

    return (
        <GlobalLayout auth={auth} errors={errors}>
            <Head title="Tu Perfil" />
            <section className="mx-2 sm:mx-8 md:mx-16 lg:mx-28">
                <div className="sm:flex justfy-start items-center">
                    <ProfileInfo user={user}/>
                    <div className="flex flex-1 justify-evenly items-center mx-5 md:mx-10 border-b border-[#AC3FFF]/[0.8]">
                        <SearchRelationButton active={relation === 'own'} onClick={() => handleRelation('own')}>Imágenes creadas</SearchRelationButton>
                        <SearchRelationButton active={relation === 'saved'} onClick={() => handleRelation('saved')}>Imágenes guardadas</SearchRelationButton>
                    </div>

                </div>

                <section id='content' className="mt-8">
                    {pictures.length == 0 ? (
                        <>
                            <div className="py-6 flex flex-col sm:flex-row items-center justify-center">
                                <img src="/storage/dizzy-robot.png" className="w-[220px]" alt="" />
                                <p className="text-white text-xl py-2 md:text-4xl text-bold">
                                    ... Parece que no hay nada aquí.
                                </p>
                            </div>
                            <div className="flex justify-center">
                                {
                                    relation === 'own' ? 
                                    (
                                        <PrimaryLink text="Comienza a crear" href={route('create.view')} className="bg-gray-100 text-black hover:bg-gray-200"></PrimaryLink>
                                    ):(
                                        <PrimaryLink text="Descubre otras obras" href={route('discover.view')} className="bg-gray-100 text-black hover:bg-gray-200"></PrimaryLink>
                                    )
                                }
                            </div>
                        </>
                    ):(
                        <>
                            <SortMenu sortCategory={sortCategory} sortOrder={sortOrder} handleOrder={handleOrder} handleCategory={handleCategory}/>
                            <PictureGrid pictures={pictures} removeImg={removeImg} auth={auth}/>
                            <ShowMoreButton className='w-full flex justify-center my-10 2xl:my-5' nextPage={nextPage} showMore={showMore} processing={processing}/>
                        </>
                    )}
                </section>
            </section>
        </GlobalLayout>
    );
}
