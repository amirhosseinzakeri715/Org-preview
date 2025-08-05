import type React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className = "", ...props }: InputProps) => {
  return (
    <input
      className={`w-full px-4 py-3 border border-gray-300/90  rounded-lg  transition-all duration-200 ${className}`}
      {...props}
    />
  )
}
