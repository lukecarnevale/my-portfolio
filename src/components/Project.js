import React, { useEffect, useState } from 'react'
// import project from '../../studio/schemas/project.js'
import sanityClient from '../client.js'

export default function Project () {
  const [projectData, setProjectData] = useState(null)

  useEffect(() => {
    sanityClient.fetch(`*[_type == "project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      tags
    }`
    )
      .then((data) => setProjectData(data))
      .catch(console.error)
  }, [])

  const Loading = require('react-loading-animation')

  if (!projectData) return <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'><Loading className='relative justify-center flex' /></div>

  return (
    <main className='bg-green-100 min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-5xl flex justify-center cursive'>My Projects</h1>
        <h2 className='text-lg text-gray-600 flex justify-center mb-12'>Welcome to my projects page!</h2>
        <section className='grid grid-cols-2 gap-8'>
          {projectData && projectData.map((project, index) => (
            <article
              key={index}
              className='relative rounded-lg shadow-xl bg-white p-16'
            >
              <h3 className='text-gray-800 text-3xl font-bold mb-2 hover:text-green-700'>
                <a
                  href={project.link}
                  alt={project.title}
                  target='_blank'
                  rel='noopener noreferrer'
                >{project.title}
                </a>
              </h3>
              <div className='text-gray-500 text-xs space-x-4'>
                <span><strong className='font-bold'>Finished on</strong>:{' '}
                  {new Date(project.date).toLocaleDateString()}
                </span>
                <span><strong className='font-bold'>Company</strong>: {project.place}
                </span>
                <span><strong className='font-bold'>Type</strong>:{' '}
                  {project.projectType}
                </span>
                <p className='my-6 text-lg text-gray-700 leading-relaxed'>{project.description}</p>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-green-500 font-bold hover:underline hover:text-green-800 text-xl'
                >
              View The Project{' '}
                  <span role='img' aria-label='right pointer'>
                👉
                  </span>
                </a>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  )
}
