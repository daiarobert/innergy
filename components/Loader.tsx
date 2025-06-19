import React from 'react'

const Loader = () => {
  return (
     <div className="flex justify-center items-center min-h-screen">
        <img
          src="/floare.svg"
          alt="Loading..."
          className="w-20 h-20 animate-spin"
        />
      </div>
  )
}

export default Loader