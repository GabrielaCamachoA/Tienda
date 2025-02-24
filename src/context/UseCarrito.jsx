import React, { createContext, useState } from 'react'

export const carritoContext = createContext(null)

function UseCarrito({children}) {
    const [carrito, setCarrito] = useState([])

    function insertProduct(product) {
        setCarrito([...carrito,product])
    }

    function removeProduct(id) {
        setCarrito(carrito =>{
          let nuevoArray = [...carrito]
          nuevoArray.splice(id,1);
          return nuevoArray
        })
    }

  return (<carritoContext.Provider value={{carrito, insertProduct, removeProduct}}>
    {children}
  </carritoContext.Provider>
  )
}

export default UseCarrito