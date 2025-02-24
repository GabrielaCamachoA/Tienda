import React from 'react'
import { Link } from 'react-router'
import './header.css'

function Header() {
  return (
    <header>
        <div className="logo">
            <Link to={"/"}>
            <img src="/logo.png" alt="" />
            </Link>
        </div>
        <nav>
            <div className="home">
                <Link to={"/"}><img src="/home.png" alt="" /></Link>
                <Link to={"/"}>Inicio</Link>
            </div>
            <div className="carrito">
                <Link to={"/Carrito"}>
                <img src="/carrito.png" alt="" />
                </Link>
                <Link to={"/Carrito"}>Carrito</Link>
            </div>
        </nav>
    </header>
  )
}

export default Header