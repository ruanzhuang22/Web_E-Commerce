import React from 'react'
import ImgSlider1 from '../../../assets/bannerpage_1.jpg'
import ImgSlider2 from '../../../assets/bannerpage_2.jpg'
import ImgSlider3 from '../../../assets/bannerpage_3.jpg'
import ImgSlider4 from '../../../assets/bannerpage_4.jpg'

function SlideHome() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={ImgSlider1} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={ImgSlider2} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={ImgSlider3} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={ImgSlider4} className="d-block w-100" alt="..." />
      </div>
    </div>
  </div>
  )
}

export default SlideHome