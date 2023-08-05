import { useLayoutEffect, useRef, useState } from "react"


export const CharacterDisplay = ({ text, author }) => {

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
        <p ref={ pRef } className="mb-1">{ text }</p>
        <footer className="blockquote-footer">{ author }</footer>
      </blockquote>
      <code>{JSON.stringify( boxSize )}</code>
    </>
  )
}
