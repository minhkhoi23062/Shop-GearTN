import React from 'react';
import { FooterWrapper, Wrapperli } from './style';
import { FacebookOutlined, InstagramOutlined, TikTokOutlined, TwitterOutlined } from '@ant-design/icons';

const FooterComponent = () => {
    return (
        <FooterWrapper>
            <div className="container">
                <div className="section">
                    <h3 className="section-title">GIỚI THIỆU GEARTN</h3>
                    <p>Địa chỉ: 123 Đường ABC, Quận XYZ, Thành phố HCM</p>
                    <p>Số điện thoại: 0123 456 789</p>
                    <p>Email: geartn@gmail.com</p>
                </div>
                <div className="section">
                    <h3 className="section-title">HỖ TRỢ KHÁCH HÀNG</h3>
                    <ul>
                        <Wrapperli><a href="#">Hướng dẫn mua hàng trực tuyến</a></Wrapperli>
                        <Wrapperli><a href="#">Hướng dẫn thanh toán</a></Wrapperli>
                        <Wrapperli><a href="#">Gửi yêu cầu bảo hành</a></Wrapperli>
                        <Wrapperli><a href="#">Góp ý, khiếu nại</a></Wrapperli>
                    </ul>
                </div>
                <div className="section">
                    <h3 className="section-title">CHÍNH SÁCH</h3>
                    <ul>
                        <Wrapperli><a href="#">Chính sách bảo hành</a></Wrapperli>
                        <Wrapperli><a href="#">Chính sách thanh toán</a></Wrapperli>
                        <Wrapperli><a href="#">Chính sách giao hàng</a></Wrapperli>
                        <Wrapperli><a href="#">Chính sách bảo mật</a></Wrapperli>
                    </ul>
                </div>
                <div className="section">
                    <h3 className="section-title">Kết nối với chúng tôi</h3>
                    <ul>
                        <Wrapperli><a href="#"> <FacebookOutlined style={{ color: '#4267B2' }} /> Facebook</a></Wrapperli>
                        <Wrapperli><a href="#"> <TwitterOutlined style={{ color: '#1DA1F2' }} /> Twitter</a></Wrapperli>
                        <Wrapperli><a href="#"><InstagramOutlined style={{ color: '#C13584' }} /> Instagram</a></Wrapperli>
                        <Wrapperli><a href="#"><TikTokOutlined style={{ color: '#000000' }} /> Tiktok</a></Wrapperli>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2024 Công ty cổ phần thương mại GEARTN.</p>
            </div>
        </FooterWrapper >
    );
}

export default FooterComponent;
