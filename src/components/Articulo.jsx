import React from 'react'
import './Articulo.css'
import { Link } from 'react-router'

function Articulo({image,title,price, description, id}) {
  return (
    <div className='tarjeta'>
        <img src={image} alt="" />
        <div className="info">
        <h3>{title}</h3>
        <p className='price'>${price}</p>
        <p className='descp'>{description}</p>
        <div className="botones">
           <Link className='details' to={`/products/${id}`}>Detalles</Link>
            <button type="submit">Agregar al carrito</button>
        </div>
        </div>
    </div>
  )
}

export default Articulo