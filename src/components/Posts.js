import React, {useState, useEffect} from 'react';
import sanityClient from '../client';
import {Link} from 'react-router-dom';

export default function Posts(){

    const [postData, setPost] = useState(null);

    useEffect(()=>{
        sanityClient.fetch(`
            *[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset ->{
                        _id,
                        url
                    },
                    alt
                }
            }
        `).then((data) => setPost(data)).catch(console.error)
        
        ;
    }, []);



    return (
        <main className="bg-blueGray-200 min-h-screen p-12">
            <section className="container mx-auto"> 
                <h1 className="text-5xl flex justify-center cursive mb-4">Blog post page</h1>
                <h2 className="text-lg flex justify-center mb-12">Welcome to my blog page</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postData && postData.map((post,index) => (
                    <article>
                        <Link to={`/post/${post.slug.current}`} key={post.slug.current}>
                        <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-yellow-800 " key={index}>
                            <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="w-full h-full rounded-r object-cover absolute"/>
                            <span className="block relative h-full justify-end flex pr-4 pb-4 items-end"><h3 className="text-grey-800 text-lg px-3 py-4 bg-gray-700 text-gray-100 bg-opacity-75">{post.title}</h3></span>
                        </span>
                        </Link>
                    </article>
                    ))}
                </div>
            </section>
        </main>
    )
}