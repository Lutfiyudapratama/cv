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
                    </h2>
                    <h2>Saya memiliki bakat UI/UX,Html,css,php,react,javascript,saya memiliki ketertarikan sebagai UI/UX designer web.</h2>
            </center>
            <div>
                <div className="flex justify-between space x-4">
                    <img src={html} alt="Logo" className="rounded-full h-20 w-20"/>
                    <img src={css} alt="Logo" className="rounded-full h-20 w-20"/>
                    <img src={react} alt="Logo" className="rounded-full h-20 w-20"/>
                    <img src={javascript} alt="Logo" className="rounded-full h-20 w-20"/>
                    <img src={php} alt="Logo" className="rounded-full h-20 w-20"/>

                </div>
                <center>
                <h2 className="mb-3 text-md font-sm text-gray-900 dark">
                    <b>Berikut adalah beberapa project yang saya kerjakan</b>
                </h2>
                </center>
            </div>
        </div>
    )
}


export default AboutMe