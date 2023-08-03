import { useEffect, useState } from "react";

// import React from 'react'

export const Message = () => {

  const [coords, setCoords] = useState({ x: 0, y: 0})

  useEffect(() => {
    
    // Función de referencia
    const onMouseMove = ({ x, y}) => {
      setCoords({ x, y });
    }

    // El listener llamará a la función de referencia que creamos
    window.addEventListener( "mousemove", onMouseMove );
  
    // Clean up
    return () => {
      // El cleaner remueve el listener usando la función de referencia
      window.removeEventListener( "mousemove", onMouseMove );
    }
  }, [])

  return (
    <>
      <h3>El usuario fue creado</h3>
      {JSON.stringify( coords )}
    </>
  )
}
