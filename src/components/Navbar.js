import './Navbar.css'
import { NavLink, Link } from 'react-router-dom'
import { AiFillCar, MdLocalPostOffice, AiOutlineCodeSandbox, FaMoneyBillWave, BsShop } from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav id="nav">
      <Link to='/'>DesafioKukac</Link>
      <ul id="nav-links">
        <li>
          <NavLink to="/">
            <BsShop />
          </NavLink>
        </li>
        <li>
          <NavLink to="/palindromos">
            Palindromos
          </NavLink>
        </li>
        <li>
          <NavLink to="/caixa">
            Caixa Registradora
          </NavLink>
        </li>
        <li>
          <NavLink to="/garagem">
            Garagem
          </NavLink>
        </li>
        <li>
          <NavLink to="/cep">
            Consulta Cep
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar