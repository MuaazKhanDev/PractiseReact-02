import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='p-10 min-h-screen bg-gray-100'>
      <button 
        onClick={getData} 
        className='bg-red-700 hover:bg-red-800 active:scale-95 transition-all duration-200 text-white font-semibold text-xl px-6 py-3 rounded-lg shadow-md'
      >
        Get Data
      </button>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
        {data.map((e, idx) => (
          <div 
            key={idx} 
            className='bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300'
          >
            <img 
              className='h-56 w-full object-cover' 
              src={e.download_url} 
              alt={e.author} 
            />
            <div className='p-5'>
              <h1 className='text-lg font-bold text-gray-800'>{e.author}</h1>
              <h2 className='text-sm text-gray-500 mt-1'>
                {e.width} x {e.height}
              </h2>
              <a 
                href={e.url} 
                target='_blank' 
                rel='noreferrer'
                className='text-blue-600 mt-3 inline-block hover:underline'
              >
                View Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
