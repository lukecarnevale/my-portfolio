import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../client.js'

export default function Post () {
  const [postData, setPost] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
      .then((data) => setPost(data))
      .catch(console.error)
  }, [])

  return (
    <main className='bg-green-100'>
      <section>
        <h1> Blog Posts </h1>
        <h2> Welcome to my page of blog posts </h2>
        <div>
          <article>
            <Link>
              <span>
                <img />
                <span>
                  <h3 />
                </span>
              </span>
            </Link>
          </article>
        </div>
      </section>
    </main>
  )
}
