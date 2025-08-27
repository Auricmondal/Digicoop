import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BrandLogo = ({ path }) => {
  const location = useLocation();
  return (
    <Link
      className="flex items-center cursor-pointer"
      to={path}
    >
      <h3 className={`text-4xl font-bold hover:text-blue-600 transition-colors duration-200
        ${location.pathname === "/" ? "text-gray-800" : "text-white"}
      `}>
        DigiCoop
      </h3>
    </Link>
  )
}

export default BrandLogo