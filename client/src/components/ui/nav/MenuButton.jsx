import { AlignLeft, X } from 'lucide-react'
import React from 'react'

const MenuButton = ({ isOpen, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="md:hidden inline-flex items-center justify-center p-2 rounded-full shadow-md text-gray-700 hover:text-blue-600 bg-blue-100 transition-colors duration-150"
    >
      {isOpen ? <X className="h-6 w-6" /> : <AlignLeft className="h-6 w-6" />}
    </button>
  )
}

export default MenuButton