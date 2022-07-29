import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { GlobalState } from '../../GlobalState'

function Footer() {
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    return (
        <>
            {isAdmin ? (
                " "
            ) : (
                <footer>
                    <div className="footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-12">
                                    <div className="footer-logo mt-3">
                                        <a href><img src={Logo} alt="HongTrang Jewelry" width={200} /></a>
                                    </div>
                                    <div className="footer-social">
                                        <ul>
                                            <li><Link href="#"><i className="fa-brands fa-facebook-square" alt="facebook" /></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-instagram" alt="instagram" /></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-youtube" alt="youtube" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col">
                                    <h4 className="footer-title">Về chúng tôi</h4>
                                    <div className="footer-myshop">
                                        <ul>
                                            <li><Link href="#">Giới thiệu</Link></li>
                                            <li><Link href="#">Tuyển dụng</Link></li>
                                            <li><Link href="#">Blog</Link></li>
                                            <li><Link href="#">Tin tức</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col">
                                    <h4 className="footer-title">Liên hệ</h4>
                                    <div className="footer-contact">
                                        <ul>
                                            <li><Link href="#">
                                                <i className="fa-solid fa-phone" />
                                                <span>0962014514</span>
                                            </Link>
                                            </li>
                                            <li><Link href="#">
                                                <i className="fa-solid fa-envelope" />
                                                <span>ruanzhuang.22@gmail.com</span>
                                            </Link>
                                            </li>
                                            <li><Link href="#">
                                                <i className="fa-brands fa-facebook-square"></i>
                                                <span>HongTrang Jewelry</span>
                                            </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col">
                                    <h4 className="footer-title">Dịch vụ khách hàng</h4>
                                    <div className="footer-service">
                                        <ul>
                                            <li><Link href="#">Hướng dẫn đo size trang sức</Link></li>
                                            <li><Link href="#">Hướng dẫn mua hàng và thanh toán</Link></li>
                                            <li><Link href="#">Chính sách giao hàng</Link></li>
                                            <li><Link href="#">Chính sách hoàn tiền</Link></li>
                                            <li><Link href="#">Cẩm nang sử dụng trang sức</Link></li>
                                            <li><Link href="#">Chính sách bảo hành thu đổi</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            )}
        </>
    )
}

export default Footer