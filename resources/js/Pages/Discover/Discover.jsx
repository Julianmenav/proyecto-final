import GlobalLayout from '@/Layouts/GlobalLayout';
import { Head } from '@inertiajs/react';
import PictureCard from '../../Components/PictureCard';

export default function Discover({auth, errors, pictures}) {
    const style = {
        'gridTemplateColumns': 'repeat(auto-fill, minmax(350px, 1fr))'
    }
    
    
    return (
        <GlobalLayout
            auth={auth}
            errors={errors}
        >
            <Head title="Descubre otras obras" />
            <div className="grid gap-4 mt-12 sm:px-20 " style={style}>
            {
                pictures.map((picture, idx) => {
                    const ownPicture = picture.user_id == auth.user?.id
                    const liked = picture.like.map(el => el.id).includes(auth.user?.id)

                    return (<PictureCard picture={picture} liked={liked} ownPicture={ownPicture} key={idx}/>)
                })
            }
            </div>
        
        </GlobalLayout>
    );
}
