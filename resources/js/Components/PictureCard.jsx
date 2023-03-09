import { Link, useForm, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';


export default function PictureCard({picture, ownPicture, liked}) {
  const authUser = usePage().props.auth.user;
  const { data, setData, post, delete: destroy, processing} = useForm({
    picture_id : picture.id
  });

  useEffect(() => {
    setData('picture_id', picture.id);
  
  }, [picture])

  const likePicture = (e) => {
    e.preventDefault();

    post(route('picture.like'),{
      preserveScroll: true,
    })
  }

  const deletePicture = (e) => {
    e.preventDefault();

    destroy(route('picture.destroy'), {
      preserveScroll: true,
    });
  };

  return (
    <div className=''>
        <div className="rounded-md overflow-hidden relative">
          <Link href={route('picture.view', {'picture_id' : data.picture_id})}>
            <img className='hover:scale-110 transition-all duration-300 ease-out transform-gpu' src={picture.image_url} alt="imagenCreadaPorUsuario" />
          </Link>
          <div className='bg-black bg-opacity-20 w-full h-6 absolute bottom-0 px-2 flex justify-between'>
            {/* Link href={route('galery)} */}
            <div className='text-white'>
              {picture.user.name}
            </div>
            <div className='flex'>
              {
                authUser && (
                  <form onSubmit={likePicture}>
                    <button type='submit' className={`${liked? "bg-red-400" : "bg-white"} px-2`}>{picture.like_count}</button>
                  </form>
                )
              }
              {ownPicture && 
                  (<form onSubmit={deletePicture}>
                    <button type='submit' className='bg-white border border-black'>borrar</button>
                  </form>)
              }
            </div>
          </div>
        </div>




    </div>
  )
}
