import React, {useEffect, useState} from 'react'
import { Card, Button } from 'flowbite-react';


function Card_post(){

  const [posts, setPosts] = useState(null)
  useEffect(() => {
    callingPosts();
  }, []);
  
  const callingPosts = async () => {
    try {
      const response = await fetch("http://localhost:2026/blog/posts")
      if (response.ok) {
        const data = await response.json()
        setPosts(data.data)
      } else {
        console.error(response.status,response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }
  if (!posts){
    return <p>Obteniendo datos del servidor...</p>
  }
  return (
    <Card className="max-w-sm mb-[2em]" imgSrc="/images/blog/image-4.jpg" horizontal>
      {
        posts.map((post) => (
          <div key={post._id}>
              <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{post.title}</h5>
              <p className='font-normal text-gray-700 dark:text-gray-400'>{post.body}</p>
              <button className='bg-primary'>
              Read more
              <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              </button>
          </div>
        ))
      }
    </Card>
  );
}

export default Card_post