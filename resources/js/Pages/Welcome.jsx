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
            <div className='flex mt-12 px-12 justify-around text-white'>
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
                        <Link href={route('create.view')} className='py-2 px-6 rounded-full bg-white text-black font-bold' >
                            Comienza a crear
                        </Link>
                        <Link href={route('discover.view')} className='py-2 px-6 rounded-full bg-[#240E4D] border border-[#AC3FFF] font-bold' >
                            Descubre mas
                        </Link>
                    </div>
                </div>
            </div>
        </GlobalLayout>
    );
}
