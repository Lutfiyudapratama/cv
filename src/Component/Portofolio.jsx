import React from 'react';
import { Button, Card } from "flowbite-react";
import picture from '../assets/codig.jpg';

const Portofolio = () => {
  return (
    <div className='flex flex-wrap justify-between'>
      <Card
        className="max-w-sm w-full sm:w-1/2 lg:w-1/3 p-2"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={picture}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          project yg di kerjakan
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          project absensi extracurricular
        </p>
        <Button>
          <div className='text'>see more</div>
        </Button>
      </Card>
      
      <Card
        className="max-w-sm w-full sm:w-1/2 lg:w-1/3 p-2"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={picture}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          project yg di kerjakan
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Library
        </p>
        <Button>
          <div className='text'>see more</div>
        </Button>
      </Card>
      
      <Card
        className="max-w-sm w-full sm:w-1/2 lg:w-1/3 p-2"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={picture}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          project yg di kerjakan
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          figma x react
        </p>
        <Button>
          <div className='text'>see more</div>
        </Button>
      </Card>
    </div>
  );
}

export default Portofolio;