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
                <div>
                    <div className='max-w-2xl text-7xl'>
                        La nueva forma de hacer arte.
                    </div>
                    <p></p>
                    <div>
                        <img src={src} alt="ultimaImagenCreada" className='pt-3 max-w-[500px]'/>
                        <p className='text-sm mt-0.5'>Imagen creada por {name}</p>
                    </div>
                </div>
                <div className='text-xl max-w-xl mt-12'>
                    <p>Experimenta las tecnologías del futuro hoy mismo. Ten al alcance de tu mano la posibilidad de crear arte de una forma nunca antes vista.</p>
                    <div className='flex justify-between mt-8 mx-10'>
                        <PrimaryLink text="Comienza a crear" href={route('create.view')} className="bg-gray-100 text-black hover:bg-gray-300"></PrimaryLink>
                        <PrimaryLink text="Descubre más" href={route('discover.view')} className="bg-[#240E4D] border border-[#AC3FFF] hover:bg-[#361a6b]"></PrimaryLink>
                    </div>
                </div>
            </div>
        </GlobalLayout>
    );
}
