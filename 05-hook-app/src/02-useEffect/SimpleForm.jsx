import { useState, useEffect } from "react"
import { Message } from "./Message";



export const SimpleForm = () => {

  const [formState, setformState] = useState({
    username: "jesus",
    email: "jesus@mail.com"
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setformState({
      ...formState,
      [ name ]: value
    })
  };

  useEffect(() => {
    // console.log("useEffect called!")
  }, []);

  useEffect(() => {
    // console.log("useEffect formstate called!")
  }, [formState]);
  

  useEffect(() => {
    // console.log("useEffect email called!")
  }, [email]);
  

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input 
        type="text" 
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username }
        onChange={ onInputChange }
        />

      <input 
        type="email" 
        className="form-control mt-2"
        placeholder="usuario@email.com"
        name="email"
        value={ email }
        onChange={ onInputChange }
      />

      {
        username === "strider2" && 
        <Message 
          className="mt-2"
        />
      }
    </>
  )
}
