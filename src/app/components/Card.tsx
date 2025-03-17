import React from 'react'

interface InputProps {
    content: string;
    name: string;
    role: string;
    company: string;
  }
export default function Card({content, name, role, company}:InputProps) {
  return (
    <div className='lg:p-8 p-4 min-w-3/4 border border-[#333443] rounded-lg'>
        <div className=' mb-16'>
            <h2>{content}</h2>
        </div>
        <div className=' flex items-center gap-3'>
            <div className='min-w-10 max-w-10 min-h-10 max-h-10 bg-white rounded-full'>

            </div>
            <div>
                <h2>{name}</h2>
                <h2>{role}</h2>
                <h2>{company}</h2>
            </div>
        </div>
    </div>
  )
}
