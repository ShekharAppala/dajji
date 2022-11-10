import React from 'react'
import Link from 'next/link'

function Nav() {
   const navdata=
   [
    {  
        title:'Home',
        link:'/'
    },
    {  
        title:'About',
        link:'/about'
    },
    {  
        title:"Catagries",
        link:'/'
    },
    {  
        title:'Publications',
        link:'/'
    },
    {  
        title:'Galary',
        link:'/'
    },
    {  
        title:"Glimpses",
        link:"/glimpses"
    },
    {  
        title:'contact',
        link:'/'
    },
    ]
  return (
    <nav className='navbar bg-dark ' >
<ul className='navbar-nav d-flex flex-row '>
    {navdata.map((item,i)=>{
       return( <li className='nav-item mx-5'>
        <Link class="text-decoration-none text-light" href={item.link}>
            {item.title}
        </Link>    
        </li>
    )})}
</ul>
    </nav>
  )
}

export default Nav