import React from 'react'
import { Card } from "flowbite-react";
import picture from '../assets/roblox.png';

const Portofolio = () => {
  return (
    <div className='flex justify-between'>
      <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={picture}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      project yg di kerjakan
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       project absensi extracurricular
      </p>
    </Card> 
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={picture}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      project yg di kerjakan
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       Library
      </p>
    </Card> 
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={picture}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      project yg di kerjakan
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        figma x react
      </p>
    </Card>
    </div>
  )
}

export default Portofolio
