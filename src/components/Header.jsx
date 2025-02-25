import {React, useContext} from 'react'
import { Link } from 'react-router'
import './header.css'
import { carritoContext } from '../context/ApiContext'

function Header() {
    const {carrito} = useContext(carritoContext)
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
                        <span >{ carrito.length}</span>
                    </Link>
                    <Link to={"/Carrito"}>Carrito</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header