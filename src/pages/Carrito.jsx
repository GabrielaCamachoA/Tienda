import React, { useContext } from 'react'
import './carrito.css'
import { Link } from 'react-router'
import { carritoContext } from '../context/ApiContext'

function Carrito() {
    const {carrito, removeProduct} = useContext(carritoContext)
  return (
    <main>
        {carrito.map((articulo,index ) =>{
            return <div key={index} className='carta'>
              <h1>Producto</h1>
              <div className="titulo">
                <img src={articulo.image} className='img' />
                <div className="data">
                  <h2>{articulo.title}</h2>
                  <span>${articulo.price}</span>
                </div>
              </div>
              <div className="botones">
              <Link className='details' to={`/products/${articulo.id}`}>Detalles</Link>
              <button onClick={() => removeProduct(index)}>Eliminar</button>
              </div>
            </div>
        })}
    </main>
  )
}

export default Carrito