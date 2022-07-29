import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import OrderHistory from '../history/OrderHistory';
import ProductsManager from './ProductsManager'
import CategoriesManager from './CategoriesManager'
import BlogManager from './BlogManager'
import Dashboard from './Dashboard'
import CreateProduct from '../createProduct/CreateProduct.js'
import CreateBlog from '../createBlog/CreateBlog'
import UserManager from './UserManager'

function Admin(props) {
  const [key, setKey] = useState(1);
  const renderMain = (key) => {
    switch (key) {
      case (1):
        return <Dashboard />;
      case (2):
        return <CategoriesManager />;
      case (3):
        return <ProductsManager setKey={setKey} />;
      case (4):
        return <BlogManager setKey={setKey} />;
      case (5):
        return <OrderHistory />;
      case (6):
        return <CreateProduct setKey={setKey} />;
      case (7):
        return <CreateBlog setKey={setKey} />;
      case (8):
        return <UserManager />
      default:
        return <div> Return</div>;
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <nav id='sidebarMenu' className='col-md-3 col-lg-2 d-md-block  sidebar collapse'>
          <div className='position-sticky'>
            <ul className='nav flex-column'>
              <li>
                <i className='fa fa-calendar'></i>
                <Link onClick={() => setKey(1)}>Dashboard</Link>
              </li>
              <li>
                <i className='fa fa-calendar'></i>
                <Link onClick={() => setKey(2)}>Categories Manager</Link>
              </li>
              <li>
                <i className='fa fa-calendar'></i>
                <Link onClick={() => setKey(3)}>Products Manager</Link>
              </li>
              <li>
                <i className='fa fa-calendar'></i>
                <Link onClick={() => setKey(4)}>Blogs Manager</Link>
              </li>
              <li>
                <i className='fa fa-calendar'></i>
                <Link onClick={() => setKey(5)}>Order History</Link>
              </li>
              <li>
                <i class="fa-solid fa-user"></i>
                <Link onClick={() => setKey(8)}>User Manager</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
          {renderMain(key)}
        </div>
      </div>
    </div>
  )
}

export default Admin