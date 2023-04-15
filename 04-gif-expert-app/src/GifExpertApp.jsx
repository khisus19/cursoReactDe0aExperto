import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState([ "One punch", "Dragon ball" ]);

  const onAddCategory = () => {
    setCategories([...categories, "Inuyasha"])
  }

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory />

      {/* Listado de gif */}
      <button onClick={ onAddCategory }>Agregar Categoria</button>
      <ol>
        { categories.map(category => {
          return <li key={category}>{ category }</li>
        }) }
      </ol>
        {/* Gif Item*/}



    </>
  )
}
