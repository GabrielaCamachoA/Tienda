import React, { useContext } from 'react'
import './Articulo.css'
import { Link } from 'react-router'
import { carritoContext } from '../context/ApiContext'


function Articulo({image,title,price, description, id}) {
  const {insertProduct} = useContext(carritoContext)

  return (
    <div className='tarjeta'>
        <img src={image} alt="" />
        <div className="info">
        <h3>{title}</h3>
        <p className='price'>${price}</p>
        <p className='descp'>{description}</p>
        <div className="botones">
           <Link className='details' to={`/products/${id}`}>Detalles</Link>
            <button onClick={() => insertProduct({image,title,price, description, id})}>Agregar al carrito</button>
        </div>
        </div>
    </div>
  )
}

export default Articulo