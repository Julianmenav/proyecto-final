import PictureGrid from "@/Components/PictureGrid";
import ShowMoreButton from "@/Components/ShowMoreButton";
import SortMenu from "@/Components/SortMenu";
import useOnScreen from "@/Hooks/useOnScreen";
import usePaginate from "@/Hooks/usePaginate";
import useSort from "@/Hooks/useSort";
import GlobalLayout from "@/Layouts/GlobalLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useRef } from "react";

export default function Discover({ auth, errors, picturesPag, morePages }) {
    const {sortCategory, sortOrder, handleOrder, handleCategory} = useSort()
    const {pictures, showMore, processing, nextPage, removeImg} = usePaginate(picturesPag, morePages);

    const ref = useRef(null)
    const isVisible = useOnScreen(ref)

    useEffect(() => {
      if(processing) return
      if(!isVisible) return

      nextPage()

    }, [isVisible, processing])
    

    return (
        <GlobalLayout auth={auth} errors={errors} >
            <Head title="Descubre otras obras" />
            <div className="flex items-center pb-2 px-5 md:px-10 border-b border-[#AC3FFF]/[0.8]">
                <div className="text-white text-2xl ">Imágenes creadas por otros usuarios</div>
            </div>
            <div id='content' className="px-2 sm:px-8 md:px-16 lg:px-28 mt-8 ">
                <SortMenu sortCategory={sortCategory} sortOrder={sortOrder} handleOrder={handleOrder} handleCategory={handleCategory}/>
                <PictureGrid pictures={pictures} removeImg={removeImg} auth={auth}/>
            </div>
            <ShowMoreButton refe={ref} className='w-full flex justify-center my-20' nextPage={nextPage} showMore={showMore} processing={processing}/>
        </GlobalLayout>
    );
}
