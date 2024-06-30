import React from 'react'
import { TriangleAlert } from 'lucide-react';


interface FormErrorProps {
    message?: string 
}

const FormError = ({message}: FormErrorProps) => {
    if (!message) return null
  return (
    <div className='bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive'>
        <TriangleAlert size={16} />
        <p>{message}</p>
    </div>
  )
}

export default FormError