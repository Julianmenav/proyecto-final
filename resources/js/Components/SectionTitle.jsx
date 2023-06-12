import React from 'react'

export default function SectionTitle({children}) {
  return (
    <div className="flex items-center pb-2 mx-5 md:mx-10 border-b border-[#AC3FFF]/[0.8]">
        <div className="text-white text-2xl ">{children}</div>
    </div>
  )
}
