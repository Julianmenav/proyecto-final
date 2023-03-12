import PrimaryLink from '@/Components/PrimaryLink';
import GlobalLayout from '@/Layouts/GlobalLayout';
import { Head, Link } from '@inertiajs/react';

export default function Welcome(props) {
    const src = props.lastPicture.image_url
    const name = props.lastPicture.user.name

    return (
        <GlobalLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Welcome"/>
            <div className='flex px-12 justify-around text-white'>
                <div className='mt-10'>
                    <div className='max-w-2xl text-6xl'>
                        La nueva forma de hacer arte.
                    </div>
                    <div className='pt-6'>
                        <img src={src} alt="ultimaImagenCreada" className='max-w-[800px] max-h-[500px] shadow-xl rounded-xl'/>
                        <p className='text-sm mt-0.5'>Imagen creada por {name}</p>
                    </div>
                </div>
                <div className='text-xl max-w-xl mt-20 flex flex-col'>
                    <p>Experimenta las tecnologías del futuro hoy mismo. Ten al alcance de tu mano la posibilidad de crear arte de una forma nunca antes vista.</p>
                    <div className='flex justify-between mt-8 '>
                        <PrimaryLink text="Comienza a crear" href={route('create.view')} className="bg-gray-100 text-black hover:bg-gray-300"></PrimaryLink>
                        <PrimaryLink text="Descubre más" href={route('discover.view')} className="bg-[#240E4D] border border-[#AC3FFF] hover:bg-[#361a6b]"></PrimaryLink>
                    </div>
                </div>
            </div>
        </GlobalLayout>
    );
}
