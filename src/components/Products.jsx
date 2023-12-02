import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <>
        <div>
            <h1>Products List</h1>
            <input type='search' placeholder='Search Products' />
        </div>
        <nav>
            <Link to='featured'>featured</Link>
            <Link to='newproducts'>new</Link>
        </nav>
        <Outlet />
    </>
  )
}

export default Products