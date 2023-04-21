
import Logo from "../assets/logo-long-white.svg";

export const NavBar = () => {
  return (
    <nav>
      <div>
          <a href="index.html" id="logo">
              <img src={ Logo } alt="Khisus19 logo" />
          </a>
      </div>
      <ul class="nav-link-ul">
          <li><a href = "mailto: khisus19@gmail.com">Contact me</a></li>
          <li><a href="https://khisus19-dev.netlify.app/" target="_blank">My Web site</a></li>
      </ul>
    </nav>
  )
}
