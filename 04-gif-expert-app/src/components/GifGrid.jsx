import { getGifs } from '../helpers/getGifs'


export const GifGrid = ({ category }) => {


  getGifs(category);

  return (
    <div>
      <h3>{ category }</h3>
      <p>Hola Mundo</p>
    </div>
  )
}
