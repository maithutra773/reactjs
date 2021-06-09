import React from 'react'
import Products from '../components/Products';
import Footer from '../components/Footer';
const HomePage = (props) => {
    return (
        <div>
            <div>
            <div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://thuviennhadep.net/wp-content/uploads/banner-noi-that-9.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://noithatphuminh.vn/wp-content/uploads/2019/08/banner.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="http://nhaxinh.com/photo/main_banner/banner-nhaxinh-net-viet-duong-dai-201208.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </a>
</div>

                    <h2 className="big_title_store text-2xl border border-gray-200 text-center">DỊCH VỤ TƯ VẤN THIẾT KẾ VÀ HOÀN THIỆN NỘI THẤT</h2><br />
                    <p className="tvtk-header text-xl text-center my-1">KHI LIÊN HỆ WOODEN HOME QUÝ KHÁCH ĐƯỢC:</p>
                    <ul className="tvtk list-disc px-5 text-lg">
                        <li>Hướng dẫn quý khách trong việc chọn đồ nội thất</li>
                        <li>Tư vấn thiết kế miễn phí khi mua đồ nội thất Nhà Xinh</li>
                        <li>Tư vấn để có một không gian sống hài hòa, ấm cúng và thoải mái</li>
                        <li>Giúp quý khách thể hiện phong cách của mình qua không gian sống</li>
                        <li>Từ bản vẽ mặt bằng nhà quý khách, thiết kế Nhà Xinh thực hiện bản vẽ 3D giúp quý khách dễ dàng hình dung thực
                        tế.
                        </li>
                    </ul>
                    <br />
                    <p className="tvtk-header text-xl px-5">QUÝ KHÁCH NHẬN NHÀ THÔ, QUÁ BẬN RỘN, QUÝ KHÁCH CẦN MỘT ĐƠN VỊ UY TÍN?</p>
                    <div className>
                        <p className="tvtk-content px-5 text-lg ">Quý khách khi nhận nhà thô là biệt thự, nhà phố, căn hộ, chỉ cần cung cấp mặt bằng, Nhà Xinh
                        sẽ làm việc để đưa ra những ý tưởng thiết kế và cung cấp trọn gói cho không gian, từ tủ bếp, phòng khách, phòng ăn,
                        phòng ngủ, phòng làm việc… và những món đồ trang trí làm cho không gian thêm sống động.</p>
                        <br />
                    </div>
                    <div className="container">
                        <div className="row my-5">
                        <div className="col-sm">
                            <img src="http://nhaxinh.com/photo/hang-trang-tri-713x450-201214.jpg" />
                        </div>
                        <div className="col-sm">
                            <img src="http://nhaxinh.com/photo/binh-budpha-le-thuy-tinh-contour-1.jpg" />
                        </div>
                        <div className="col-sm">
                            <img src="http://nhaxinh.com/photo/den-ban-baron-blue-nickel-111602e-3.jpg" />
                        </div>
                        </div>
                    </div>
                    <h2 className="font-bold text-2xl text-center my-2">Một vài công trình đã thực hiện</h2>
                    <div className="row my-4 mx-3">
                        <div className="col-sm ">
                        <a href="http://www.nhaxinh.com/mau-thiet-ke/vinhomes-west-point-3pn-nam-tu-liem--36"><img src="http://www.nhaxinh.com/photo/project/36/AKA-uu-dai-cu-dan-nhan-nha-Vinhome-West-Point.jpg" /></a>
                        <a href="http://www.nhaxinh.com/mau-thiet-ke/vinhomes-west-point-3pn-nam-tu-liem--36"><h3 className="font-bold">MẪU THIẾT KẾ CHO CĂN HỘ VINHOMES WEST POINT 3PN (NAM TỪ LIÊM)</h3></a>
                        </div>
                        <div className="col-sm ">
                        <a href="http://www.nhaxinh.com/mau-thiet-ke/ha-do-centrosa-garden-2pn-quan-10--39"><img src="http://www.nhaxinh.com/photo/project/38/AKA-uu-dai-cu-dan-nhan-nha-eco-green-a3.jpg" /></a>
                        <a href="http://www.nhaxinh.com/mau-thiet-ke/ha-do-centrosa-garden-2pn-quan-10--39"><h3 className="font-bold">MẪU THIẾT KẾ CHO CĂN HỘ HÀ ĐÔ CENTROSA GARDEN 2PN (QUẬN 10)</h3></a>
                        </div>
                        <div className="col-sm">
                        <a href="http://www.nhaxinh.com/mau-thiet-ke/ha-do-centrosa-garden-2pn-quan-10--39"><img src=" http://www.nhaxinh.com/photo/project/34/aka-mau-can-ho-Vinhome-West-Point-1.jpg" /></a>
                        <a href="http://www.nhaxinh.com/mau-thiet-ke/ha-do-centrosa-garden-2pn-quan-10--39"><h3 className="font-bold">MẪU THIẾT KẾ CHO CĂN HỘ HÀ ĐÔ CENTROSA GARDEN 2PN (QUẬN 10)</h3></a>
                        </div>
                    </div></div>

            <Products {...props} />
            <Footer/>
        </div>
    )
}

export default HomePage
