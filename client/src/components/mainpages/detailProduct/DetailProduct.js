import React, { useContext, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { GlobalState } from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import OwlCarousel from 'react-owl-carousel';
import '../../../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css';
import '../../../../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function DetailProduct() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const addCart = state.userAPI.addCart
    const [detailProduct, setDetailProduct] = useState([])

    const options = {
        margin: 10,
        dots: false,
        responsiveClass: true,
        autoplay: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1400: {
                items: 4,
            }
        },
    };

    useEffect(() => {
        console.log('re render');
        if (params.id) {
            products.forEach(product => {
                if (product._id === params.id) setDetailProduct(product)
            })
        }
    }, [params.id, products])

    if (detailProduct.length === 0) return null;

    return (
        <>
            <div className="container">
                <div className="detail">
                    <img src={detailProduct.images.url} alt="" />
                    <div className="box-detail">
                        <div className="row">
                            <h2>{detailProduct.title}</h2>
                            <h6>#id: {detailProduct.product_id}</h6>
                        </div>
                        <span>$ {detailProduct.price}</span>
                        <p>{detailProduct.description}</p>
                        <p>{detailProduct.content}</p>
                        <p>Sold: {detailProduct.sold}</p>
                        <Link to="/cart" className="cart"
                            onClick={() => addCart(detailProduct)}>
                            Mua ngay
                        </Link>
                    </div>
                </div>
                <div>
                    <h2>Related products</h2>
                    <OwlCarousel className='owl-theme products products-related' {...options} >
                        {
                            products.map(product => {
                                return product.category === detailProduct.category
                                    ? <ProductItem key={product._id} product={product} /> : null
                            })
                        }
                    </OwlCarousel>

                </div>
            </div>
        </>
    )
}

export default DetailProduct