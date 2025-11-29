import React from 'react'

function BlogCard({ title, date, image, content }) {
        return (
        <div className='w-100 bg-white border border-gray-400 py-4 px-5'>
            <div className='flex justify-between items-start gap-4'>
                <div className='flex flex-col flex-1 min-w-0'>
                    <h1 className='text-xl font-bold mb-1 wrap-break-word'>{title}</h1>
                    <p className='text-xs text-gray-600 mb-2'>{date}</p>
                    <p className='text-sm leading-relaxed warp-break-word'>
                        {content || 'No content available'}
                    </p>
                </div>
                <div className='w-20 h-20 shrink-0'>
                    <img src={image} alt="" className='w-full h-full object-cover rounded' />
                </div>
            </div>
        </div>
    )
}

export default BlogCard