import PropTypes from "prop-types";

export const FirstApp = ({ title, subtitle }) => {

  // console.log();


  return (
    <>
      <h1>{ title }</h1>
      <p>{ subtitle }</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

FirstApp.defaultProps = {
  name: "Jesús Álvarez",
  subtitle: "No hay subtitulo",
  title: "No hay titulo",
}