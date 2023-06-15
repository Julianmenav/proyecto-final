import PrimaryLink from '@/Components/PrimaryLink';
import GlobalLayout from '@/Layouts/GlobalLayout';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ lastPicture, auth, errors}) {
    const user = lastPicture.user

    return (
        <GlobalLayout
            auth={auth}
            errors={errors}
        >
            <Head title="Welcome"/>
            <div className='flex px-8 md:px-14 justify-center text-white flex-col xl:flex-row items-center'>
                <div className='mt-3 lg:mt-16'>
                    <div className='max-w-2xl text-2xl  sm:text-3xl  xl:text-5xl'>
                        Crea imágenes únicas con <span className='text-main font-bold'>I</span>nteligencia <span className='text-main font-bold'>A</span>rtificial 
                    </div>
                    <div className='pt-12'>
                        <div>
                            <div className='aspect-video max-w-lg overflow-hidden rounded-xl relative shadow-sm sm:shadow-md shadow-white/30 flex items-center justify-center'>
                                <div className="flex items-center justify-center w-full h-full -z-50 absolute bg-gray-400 rounded dark:bg-gray-700">
                                    <svg
                                        className="w-12 h-12 text-gray-300"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 640 512"
                                    >
                                        <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                                    </svg>
                                </div>
                                <Link href={route('picture.view', {'picture_id': lastPicture.id})}>
                                    <img src={lastPicture.image_url} alt="ultimaImagenCreada z-10" className='w-full '/>
                                </Link>
                            </div>
                            <p className='text-sm mt-0.5'>Imagen creada por <Link href={route('user.view', {'user_id': user.id})}>@{user.name}</Link></p>
                        </div>
                    </div>
                </div>
                <div className='text-base sm:text-xl max-w-xl flex flex-col justify-center mt-6 md:mt-12'>
                    <p>Desata tu creatividad con la potencia de la inteligencia artificial.</p>
                    <p>Crea imágenes asombrosas y compártelas.</p>
                    <div className='flex flex-wrap gap-3 justify-evenly mt-8 lg:mt-12 mb-12'>
                        <PrimaryLink text="Comienza a crear" href={route('create.view')} className="shadow-sm shadow-white/40 bg-zinc-900 border border-white hover:bg-zinc-700 transition-all duration-500 animate-pulse"></PrimaryLink>
                        <PrimaryLink text="Descubre más" href={route('discover.view')} className="bg-zinc-300 text-zinc-700 hover:bg-zinc-400 transition-all duration-300"></PrimaryLink>
                    </div>
                </div>
            </div>
        </GlobalLayout>
    );
}
