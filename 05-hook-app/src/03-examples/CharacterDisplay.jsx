import { useLayoutEffect, useRef, useState } from "react"


export const CharacterDisplay = ({ text, author, name, species }) => {

  const [boxSize, setboxSize] = useState({ width: 0, height: 0 })

  const pRef = useRef();

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setboxSize({
      width,
      height
    })

  }, [text])

  return (
    <>
      <blockquote 
        className="blockquote text-end"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <p ref={ pRef } className="mb-1">{ text || species }</p>
        <footer className="blockquote-footer">{ author || name }</footer>
      </blockquote>
      <code>{JSON.stringify( boxSize )}</code>
    </>
  )
}
