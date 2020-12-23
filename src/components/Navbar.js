import React from 'react';
import {NavLink} from 'react-router-dom';
import {SocialIcon} from 'react-social-icons';

export default function Navbar(){
    return (
        <header className="bg-gray-600">
            <div className="container mx-auto flex justify-between">
            <nav className="flex">
            <NavLink to="/" exact activeClassName="text-white"className="inline-flex items-center py-6 px-3 mr-4 text-gray-100 hover:text-blue-300 text-4xl font-bold cursive tracking-widest">Temidayo</NavLink>

            <NavLink to="/post" className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-blue-300" activeClassName="text-gray-100 bg-blueGray-700">BlogPosts</NavLink>

            <NavLink to="/project" className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-blue-300" activeClassName="text-gray-100 bg-blueGray-700">Projects</NavLink>

            <NavLink to="/about" className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-blue-300" activeClassName="text-gray-100 bg-blueGray-700">About me</NavLink>
            </nav>  
              <div className="inline-flex py-3 my-6 px-3">
                  <SocialIcon url="https://twitter.com/omoyabraham" className="mr-4" target="_blank" fgColor="#ffffff" style={{height:35, width: 35}}/>
                  <SocialIcon url="https://www.linkedin.com/in/temi-abraham-0030569a/" className="mr-4" target="_blank" fgColor="#ffffff" style={{height:35, width: 35}}/>
                  <SocialIcon url="https://github.com/temideewan" className="mr-4" target="_blank" fgColor="#ffffff" style={{height:35, width: 35}}/>
              </div>
            </div> 
        </header>
    )
}