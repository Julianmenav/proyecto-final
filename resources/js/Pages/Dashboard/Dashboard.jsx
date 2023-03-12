import PictureCard from "@/Components/PictureCard";
import PictureGrid from "@/Components/PictureGrid";
import PrimaryLink from "@/Components/PrimaryLink";
import ShowMoreButton from "@/Components/ShowMoreButton";
import SortMenu from "@/Components/SortMenu";
import usePaginate from "@/Hooks/usePaginate";
import useSort from "@/Hooks/useSort";
import GlobalLayout from "@/Layouts/GlobalLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ auth, errors, picturesPag, morePages }) {
    const { sortCategory, sortOrder, handleOrder, handleCategory } = useSort();
    const { pictures, showMore, processing, nextPage, removeImg } = usePaginate(picturesPag, morePages);


    return (
        <GlobalLayout auth={auth} errors={errors}>
            <Head title="Dashboard" />

            <section className="">
                <div className="flex items-center pb-2 mx-5 md:mx-10 border-b border-[#AC3FFF]/[0.8]">
                    <div className="text-white text-2xl ">Imágenes creadas</div>
                </div>

                <div id='content' className="mx-2 sm:mx-8 md:mx-16 lg:mx-28 mt-8 ">
                    {pictures.length == 0 ? (
                        <>
                            <div className="text-white text-xl text-bold">
                                Aún no has creado ninguna imagen.
                            </div>
                            <div className="flex justify-center">
                                <PrimaryLink text="Comienza a crear" href={route('create.view')} className="bg-gray-100 text-black hover:bg-gray-200"></PrimaryLink>
                            </div>
                        </>
                    ):(
                        <>
                                <SortMenu sortCategory={sortCategory} sortOrder={sortOrder} handleOrder={handleOrder} handleCategory={handleCategory}/>
                                <PictureGrid pictures={pictures} removeImg={removeImg} auth={auth}/>
                            <ShowMoreButton className='w-full flex justify-center my-10 2xl:my-5' nextPage={nextPage} showMore={showMore} processing={processing}/>
                        </>
                    )}
                </div>
            </section>
        </GlobalLayout>
    );
}
