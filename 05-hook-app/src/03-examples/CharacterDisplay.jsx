

export const CharacterDisplay = ({ name, species, image}) => {
  return (
    <blockquote 
      className="blockquote text-end"
      style={{ display: "flex"}}
    >
      <p className="mb-1">{ name }</p>
      <footer className="blockquote-footer">{ species }</footer>
      <img src={ image } />
    </blockquote>
  )
}
