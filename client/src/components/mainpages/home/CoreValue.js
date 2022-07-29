import React from 'react'
import ValueImg1 from '../../../assets/chung_nhan_icon-300x300.png'
import ValueImg2 from '../../../assets/chat_luong_icon-300x300.png'
import ValueImg3 from '../../../assets/thu_doi_cao_icon-300x300.png'
import ValueImg4 from '../../../assets/bao_hanh_vuot_troi_icon-300x300.png'

function CoreValue() {
  return (
    <div className="row row-core-value">
      <div className="col col-md-3 col-sm-6 col-lg-3">
        <div className="col-inner">
            <div className="icon-inner">
                <img src={ValueImg1} alt="Đạt chuẩn" />
            </div>
            <div className="text-inner">
                <h3>Đạt chuẩn</h3>
                <p>Đủ chứng nhận chất lượng</p>
            </div>
        </div>
      </div>
      <div className="col col-md-3 col-sm-6 col-lg-3">
        <div className="col-inner">
            <div className="icon-inner">
                <img src={ValueImg2} alt="Chất lượng" />
            </div>
            <div className="text-inner">
                <h3>Chất lượng</h3>
                <p>Đúng trọng lượng và hàm lượng</p>
            </div>
        </div>
      </div>
      <div className="col col-md-3 col-sm-6 col-lg-3">
        <div className="col-inner">
            <div className="icon-inner">
                <img src={ValueImg3} alt="Cam kết" />
            </div>
            <div className="text-inner">
                <h3>Cam kết</h3>
                <p>Thu mua đổi trọn đời</p>
            </div>
        </div>
      </div>
      <div className="col col-md-3 col-sm-6 col-lg-3">
        <div className="col-inner">
            <div className="icon-inner">
                <img src={ValueImg4} alt="Miễn phí" />
            </div>
            <div className="text-inner">
                <h3>Miễn phí</h3>
                <p>Làm sạch trọn đời</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CoreValue