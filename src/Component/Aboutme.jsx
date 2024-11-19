import React from 'react'
import { Button, Card, Table } from 'flowbite-react'
import picture from '../assets/pp.jpg';
import html from '../assets/html.png';
import css from '../assets/css.png';
import react from '../assets/react.png';
import javascript from '../assets/js.png';
import php from '../assets/php.png';


const AboutMe = () => {
    return (
        <div>
            <center>
            <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Welcome to my profile!</h3>
                <img
                    alt="Profile Image"
                    height="180"
                    src={picture}
                    width="180"
                    className="mb-0 rounded-lg shadow-md flex justify-around"
                />
                <h2 className="mb-3 text-md font-sm text-gray-900 dark">Halo, saya lutfi yuda pratama. 
                    Saya seorang siswa di SMK PRAKARYA NTERNASIONAL yang berjurusan Pengembangan perangkat lunak dan gim.
                    Saya memiliki bakat UI/UX,Html,css,php,react,javascript </h2>
            </center>
            <div>
                <div className="flex space x-4">
                    <img src={html} alt="Logo" className="rounded-full h-20 w-20"/>
                    <img src={css} alt="Logo" className="rounded-full h-20 w-20"/>
                    <img src={react} alt="Logo" className="rounded-full h-20 w-20"/>
                    <img src={javascript} alt="Logo" className="rounded-full h-20 w-20"/>
                    <img src={php} alt="Logo" className="rounded-full h-20 w-20"/>

                </div>
            </div>
        </div>
    )
}


export default AboutMe