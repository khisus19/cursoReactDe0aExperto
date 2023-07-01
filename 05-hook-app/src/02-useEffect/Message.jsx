import { useEffect } from "react";

import React from 'react'

export const Message = () => {

  useEffect(() => {
    
    const onMouseMove = ({ x, y}) => {
      const coords = { x, y };
      console.log(coords);
    }

    window.addEventListener( "mousemove", onMouseMove );
  
    return () => {
    window.removeEventListener( "mousemove", onMouseMove );
    }
  }, [])
  

  return (
    <>
      <h3>El usuario fue creado</h3>
    </>
  )
}
