import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import Products from './products/Products'
import DetailProducts from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import OrderHistory from './history/OrderHistory'
import OrderDetails from './history/OrderDetails'
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'
import Categories from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'
import Blogs from './Blogs/Blogs'
import DetailBlog from './detailBlog/DetailBlog'
import CreateBlog from './createBlog/CreateBlog'
import AboutMe from './aboutMe/AboutMe'
import Contact from './contact/Contact'
import home from './home/Home'
import { GlobalState } from '../../GlobalState'
import User from './users/User'

function Pages() {

  const state = useContext(GlobalState)
  const [isLogged] = state.userAPI.isLogged
  const [isAdmin] = state.userAPI.isAdmin

  return (
    <Switch>
      <Route path='/' exact component={home} />
      <Route path='/user' exact component={isLogged ? User : Login} />
      <Route path='/user/:id' exact component={isLogged ? User : NotFound} />
      <Route path='/about' exact component={AboutMe} />
      <Route path='/contact' exact component={Contact} />
      <Route path='/products' exact component={Products} />
      <Route path="/detail/:id" exact component={DetailProducts} />

      <Route path='/blog' exact component={Blogs} />
      <Route path='/blog_details/:id' exact component={DetailBlog} />
      <Route path='/create_blog/' exact component={isAdmin ? CreateBlog : NotFound} />
      <Route path='/edit_blog/:id' exact component={isAdmin ? CreateBlog : NotFound} />

      <Route path="/login" exact component={isLogged ? NotFound : Login} />
      <Route path="/register" exact component={isLogged ? NotFound : Register} />

      <Route path="/category" exact component={isAdmin ? Categories : NotFound} />
      <Route path="/create_product" exact component={isAdmin ? CreateProduct : NotFound} />
      <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound} />

      <Route path="/history" exact component={isLogged ? OrderHistory : NotFound} />
      <Route path="/history/:id" exact component={isLogged ? OrderDetails : NotFound} />


      <Route path="/cart" exact component={Cart} />


      <Route path="*" exact component={NotFound} />

    </Switch>
  )
}

export default Pages