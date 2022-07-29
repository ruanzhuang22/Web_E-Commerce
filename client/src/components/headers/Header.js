import React, { useContext, useState } from "react"
import { GlobalState } from '../../GlobalState'
import Menu from './icon/bars-solid.svg'
import Close from './icon/xmark-solid.svg'
import Cart from './icon/cart-shopping-solid.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Logo from '../../assets/logo.png'

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart
    const [menu, setMenu] = useState(false)

    const logoutUser = async () => {
        await axios.get('/user/logout')

        localStorage.removeItem('firstLogin')

        window.location.href = "/"
    }

    const loggedRouter = () => {
        return (
            <>
                <li className="dropdown">
                    <button class="dropbtn">USER</button>
                    <div class="dropdown-content">
                        <Link className="drop-item" to="/user">Account</Link>
                        <Link className="drop-item" to="/history">History</Link>
                        <Link className="drop-item" to="/" onClick={logoutUser}>Logout</Link>
                    </div>
                </li>
            </>
        )
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header>
            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30" />
            </div>
            <div className="logo">
                <h1>
                    <Link to="/"><img src={Logo} alt="Hong Trang Jewelry" width="150px" /></Link>
                </h1>
            </div>

            <div className="nav-home">
                <ul style={styleMenu}>
                    {isAdmin ? (
                        <Link className="drop-item" to="/" onClick={logoutUser}>Logout</Link>
                    ) : (
                        <>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About us</Link></li>
                            <li><Link to='/products'>Products</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                            {isLogged ? (
                                loggedRouter()
                            ) : (
                                <li><Link to="/login">Login/Register</Link></li>
                            )}
                        </>
                    )}

                    {/* {isLogged ? (
                        loggedRouter()
                    ) : (
                        <li><Link to="/login">Login/Register</Link></li>
                    )} */}

                    <li onClick={() => setMenu(!menu)}>
                        <img src={Close} alt="" width="30" className="menu" />
                    </li>
                </ul>
            </div>

            {
                isAdmin ? ''
                    : <div className="cart-icon">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                            <img src={Cart} alt="" width="30" />
                        </Link>
                    </div>
            }

        </header>
    )
}

export default Header