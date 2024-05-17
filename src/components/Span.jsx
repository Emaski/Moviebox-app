import React from 'react'

const Span = ({genreName}) => {
  return (
    <div>
      <span className='text-sm text-rose-700 py-1 px-4 rounded-full border border-rose-700'>{genreName}</span>
    </div>
  )
}

export default Span
