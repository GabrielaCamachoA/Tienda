import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import './products.css'
import { carritoContext } from '../context/useCarrito';

function Products() {
  const params = useParams();
  const {insertProduct} = useContext(carritoContext)
  const [product, setProduct] = useState();

  async function fetchProduct() {
    const respuesta = await fetch("https://fakestoreapi.com/products/" + params.id);
    const json = await respuesta.json();

    setProduct(json);
  }
  useEffect(() => {
    fetchProduct()
  }, [])

  if (product == undefined) return <img src='/carga.png' className='joel' />

  return (
    <div className='producto'>
      <Link to={"/"}>
        <img src="/volver.png" className='icono' />
      </Link>
      <h1>Producto</h1>
      <hr />
      <div className="titulo">
        <img src={product.image} className='img' />
        <div className="data">
          <h2>{product.title}</h2>
          <span>${product.price}</span>
        </div>
      </div>
      <hr />
      <p>{product.description}</p>
      <button onClick={() => insertProduct(product)}>Agregar al carrito</button>
    </div>
  )
}

export default Products