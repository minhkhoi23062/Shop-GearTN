import React from 'react';
import { Row, Col } from 'antd';
import { LinkContainer, WrapperContainer, WrapperText, WrapperTextIcons } from './style';
import timegiaohang from '../../assets/images/timegiaohang.png';
import vanchuyen from '../../assets/images/vanchuyen.jpg';
import { ArrowUpOutlined } from '@ant-design/icons';
import giaohang from '../../assets/images/giaohang.png';

const TransportPage = () => {
    return (
        <WrapperContainer>
            <p style={{ width: '100%', marginTop: '5px' }}>
                <img style={{ width: '100%', height: '400px', marginLeft: '8px' }} src={vanchuyen} alt="vanchuyen" />
            </p>
            <WrapperTextIcons>
                <b style={{ fontSize: '16px', fontWeight: 'bolder' }}>- Gearvn cung cấp dịch vụ giao hàng toàn quốc, gửi hàng tận nơi đến địa chỉ cung cấp của Quý khách. Thời gian giao hàng dự kiến phụ thuộc vào kho và địa chỉ nhận hàng của Quý khách.</b>
            </WrapperTextIcons>
            <WrapperTextIcons>
                - Với đa phần đơn hàng, GearTN cần vài giờ làm việc để kiểm tra thông tin và đóng gói hàng. Nếu các sản phẩm đều có sẵn GearTN sẽ nhanh chóng bàn giao cho đối tác vận chuyển.
            </WrapperTextIcons>
            <WrapperTextIcons>
                <b style={{ fontSize: '16px', fontWeight: 'bolder' }}>- Phí dịch vụ giao hàng</b>
            </WrapperTextIcons>
            <WrapperTextIcons>
                <img style={{ width: '50%', height: '300px' }} src={giaohang} alt="giaohang" />
            </WrapperTextIcons>
            <WrapperTextIcons>
                Chính sách này có hiệu lực từ ngày 30 tháng 05 năm 2024.
            </WrapperTextIcons>
            <WrapperTextIcons>
                Thời gian dự kiến giao hàng: phụ thuộc vào kho và địa chỉ nhận hàng của Quý khách. Thời gian dự kiến giao hàng tiêu chuẩn như sau:
            </WrapperTextIcons>
            <WrapperTextIcons>
                <img style={{ width: '50%', height: '300px' }} src={timegiaohang} alt="timegiaohang" />
            </WrapperTextIcons>
            <WrapperTextIcons>
                . Nội thành Tp.HCM: Quận 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, Bình Tân, Gò Vấp, Thủ Đức, Bình Thạnh, Phú Nhuận, Tân Phú, Tân Bình.
            </WrapperTextIcons>
            <WrapperTextIcons>
                . Nội thành Hà Nội: Hoàn Kiếm, Đống Đa, Ba Đình, Hai Bà Trưng, Hoàng Mai, Thanh Xuân, Tây Hồ, Cầu Giấy, Long Biên, Hà Đông, Nam Từ Liêm, Bắc Từ Liêm.
            </WrapperTextIcons>
            <WrapperText>
                <h3 style={{ fontSize: '16px', fontWeight: 'bolder' }}><u >Lưu ý:</u></h3>
            </WrapperText>
            <WrapperTextIcons>
                . Trong một số trường hợp, hàng hóa không có sẵn tại kho gần nhất, thời gian giao hàng có thể chậm hơn so với dự kiến do điều hàng.
            </WrapperTextIcons>
            <WrapperTextIcons>
                . Ngày làm việc là từ thứ hai đến thứ 6, không tính thứ 7, Chủ nhật và các ngày nghỉ lễ, tết, nghỉ bù, và không bao gồm các tuyến huyện đảo xa.
            </WrapperTextIcons>
            <WrapperText>
                <h3 style={{ fontSize: '16px', fontWeight: 'bolder' }}>MỘT SỐ LƯU Ý KHI NHẬN HÀNG</h3>
            </WrapperText>
            <WrapperTextIcons>
                . Trước khi tiến hành giao hàng cho Quý khách, Hỗ trợ kỹ thuật (HTTK) của GearTN hoặc bưu tá của Đối tác vận chuyển sẽ liên hệ qua số điện thoại của Quý khách trước khoảng 3 đến 5 phút để xác nhận giao hàng.
            </WrapperTextIcons>
            <WrapperTextIcons>
                . Áp dụng cho đơn hàng giao hàng tiêu chuẩn, nếu Quý khách không thể có mặt trong đợt nhận hàng thứ nhất, bưu tá sẽ cố gắng liên lạc lại thêm ít nhất 2 lần nữa (trong 02 ca giao hàng khác nhau) để sắp xếp thời gian giao hàng, Quý khách vui lòng để ý điện thoại để liên hệ được với bưu tá giao hàng.
            </WrapperTextIcons>
            <WrapperTextIcons>
                . Khi nhận hàng, Quý khách vui lòng quay lại video quá trình khui nhận hàng hóa. Trong trường hợp Quý khách không đồng ý nhận hàng với xuất phát nguyên nhân từ hàng hóa của GearVN không đảm bảo, không đúng như mô tả,... Đơn hàng của Quý khách sẽ được hoàn lại cho chúng tôi và được hủy trên hệ thống GearTN. Tham khảo thêm chính sách bảo hành tại https://geartn.com/pages/chinh-sach-bao-hanh.
            </WrapperTextIcons>
            <WrapperTextIcons>
                . Trong trường hợp đơn hàng đang giao đến Quý khách có ngoại quan bên ngoài hộp hàng hóa có dấu hiệu bị rách, móp, ướt, thủng, mất niêm phong,…Quý khách vui lòng kiểm tra kỹ chất lượng sản phẩm bên trong trước khi nhận hàng. Quý khách hoàn toàn có quyền từ chối nhận hàng và báo về cho chúng tôi qua hotline 1900.5301 để được hỗ trợ giao lại đơn hàng mới hoặc hủy đơn hàng.
            </WrapperTextIcons>
            <WrapperTextIcons>
                . Mọi thông tin về việc thay đổi sản phẩm hay hủy đơn đơn hàng, đề nghị Quý khách thông báo sớm để GearVN có thể điều chỉnh lại đơn hàng. Quý khách có thể liên hệ với chúng tôi qua số điện thoại hotline: 1900.5301 hoặc chat trực tiếp trên fanpage GearTN hoặc website https://geartn.com/ để được hỗ trợ tra cứu tình hình vận chuyển đơn hàng.
            </WrapperTextIcons>
            <p style={{ textAlign: 'right' }}><a href="#" > <ArrowUpOutlined /> Quay lại đầu trang</a></p>
        </WrapperContainer>
    );
}

export default TransportPage;
