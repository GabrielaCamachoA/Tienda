import React, { useEffect, useState } from 'react'
import Articulo from '../components/Articulo';

function Home() {
  const [info, setInfo] = useState();

  async function conseguirInfo() {
    const respuesta = await fetch("https://fakestoreapi.com/products");
    const data = await respuesta.json();

    setInfo(data);
  }
  useEffect(() => {
    conseguirInfo()
  }, [])

  if (info == undefined) return <img src='/carga.png' className='joel' />

  return (
    <main>
      {info.map((item) => {
        return <Articulo
          key={item.id}
          title={item.title}
          image={item.image}
          description={item.description}
          price={item.price}
          id={item.id}
        />

      })}
    </main>
  )
}

export default Home