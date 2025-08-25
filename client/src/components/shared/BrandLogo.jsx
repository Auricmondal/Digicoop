import React from 'react'
import { Link } from 'react-router-dom'

const BrandLogo = ({ path }) => {
  return (
    <Link
      className="flex items-center cursor-pointer"
      to={path}
    >
      <h3 className="text-4xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200">
        DigiCoop
      </h3>
    </Link>
  )
}

export default BrandLogo