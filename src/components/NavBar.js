import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

export default function NavBar () {
  return (
    <header className='bg-blue-600'>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex'>
          <NavLink
            to='/' exact
            activeClassName='text-white'
            className='inline-flex items-center py-6 py-3 mr-4 text-blue-100 hover:text-green-200 text-4xl font-bold cursive tracking-widest'
          >
            Home
          </NavLink>
          <NavLink
            to='/post'
            activeClassName='text-blue-100 bg-blue-700'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-green-200'
          >
            Blog Post
          </NavLink>
          <NavLink
            to='project'
            activeClassName='text-blue-100 bg-blue-700'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-green-200'
          >
            Projects
          </NavLink>
          <NavLink
            to='about'
            activeClassName='text-blue-100 bg-blue-700'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-green-200'
          >
             About Me!
          </NavLink>
        </nav>
        <div className='inline-flex py-3 px-3 my-6'>
          <SocialIcon url='https://www.linkedin.com/in/lucas-carnevale/' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width: 35 }} />
          <SocialIcon url='https://twitter.com/LukeCarnevale' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width: 35 }} />
          <SocialIcon url='https://github.com/lukecarnevale' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width: 35 }} />
        </div>
      </div>
    </header>
  )
}
