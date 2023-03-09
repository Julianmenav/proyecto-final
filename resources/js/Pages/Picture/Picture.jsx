import GlobalLayout from '@/Layouts/GlobalLayout'
import React from 'react'

export default function Picture({picture, auth, errors}) {




  return (
    <GlobalLayout
      auth={auth}
      errors={errors}
    >
      <div className='flex justify-center items-center h-full'>
        Picture
        <img className="max-w-2xl" src={picture.image_url} alt="" />
      </div>
    </GlobalLayout>
  )
}
