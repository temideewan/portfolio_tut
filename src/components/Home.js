import React from 'react';
import image from '../blue-ocean.jpg';

export default function Home(){
    return (
        <main>
            <img src={image} alt="blue ocean" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-6">
                <h1 className="text-5xl text-gray-100 font-bold leading-none lg:leading-snug home-name cursive">Aloha. I'm TD.</h1>
            </section>
        </main>
    )
}