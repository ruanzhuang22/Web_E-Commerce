import React from 'react'
import { Link } from 'react-router-dom'


function Contact() {
    return (
        <div className="container">
            <div className="contact">
                <div className="contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8182634477093!2d105.84137791476275!3d20.999920886014056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac70a2f48a15%3A0xfc5dfbb8602d0eef!2zMjA3IEdp4bqjaSBQaMOzbmcsIMSQ4buTbmcgVMOibSwgxJDhu5FuZyDEkGEsIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1649427831422!5m2!1sen!2s"
                        width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
                <div className="contact-doc">
                    <h3>Contact with us</h3>
                    <ul>
                        <li><Link href="#">
                            <i class="fa-solid fa-location-arrow"></i>
                            <span>207 Giải Phóng, Đồng Tâm, Đống Đa, Hà Nội</span>
                        </Link>
                        </li>
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
        </div>
    )
}

export default Contact