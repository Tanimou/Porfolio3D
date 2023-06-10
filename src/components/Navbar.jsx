import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"

import { styles } from "../style"
import { navLinks } from "../constants"
import {logo3,menu,close} from "../assets"
const Navbar = () => {
  const [active, setActive] = useState("")
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-betwwen items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }
          }
        >
          <img src={logo3} alt='logo'
            // width={200}
            height={200}
          className='w-9 h-9 rounded-full'/>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar