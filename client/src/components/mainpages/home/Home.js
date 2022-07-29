import React, { useContext } from "react";
import SlideHome from "./SlideHome";
import CoreValue from './CoreValue'
import { GlobalState } from "../../../GlobalState";
import Admin from "../Admin/Admin";
import BlogHome from "../home/BlogHome";
import ProductHome from "./ProductHome";

function Home() {
  const state = useContext(GlobalState)
  const [isAdmin] = state.userAPI.isAdmin
  return (
    <>
      {isAdmin ? (
        <Admin />
      ) : (
        <>
          <section className="banner-home">
            <SlideHome />
          </section>
          <div className="container">
            <section className="product-home">
              <div className='container text-center'>
                <div className='row row-title'>
                  <h3 className='title'>
                    <b></b>
                    <span className="px-3 title-main">Sản phẩm mới</span>
                    <b></b>
                  </h3>
                  <ProductHome />
                </div>
              </div>
            </section>
            <section className="core-value">
              <div className='container text-center'>
                <div className='row row-title'>
                  <h3 className='title'>
                    <b></b>
                    <span className="px-3 title-main">Giá trị nổi bật</span>
                    <b></b>
                  </h3>
                </div>
                <CoreValue />
              </div>
            </section>
            <section className="latest-news">
              <div className='container text-center'>
                <div className='row row-title'>
                  <h3 className='title'>
                    <b></b>
                    <span className="px-3 title-main">Tin tức</span>
                    <b></b>
                  </h3>
                </div>
                <BlogHome />
              </div>
            </section>
          </div>
        </>
      )}
    </>

  );
}

export default Home;
