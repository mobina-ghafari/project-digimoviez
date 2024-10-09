import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

//img
import DDL from '../img/DDL.jpg';
import Cross from '../img/cross.jpg';
import Elevation from '../img/elevation.jpg';
import Nasferatu from '../img/nosferatu.jpg';
import Emilia from '../img/emiliaperez.jpg';

//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Footer =()=>{
    return(
        <div className="continer-fluid footer pt-3 pb-2">
            <div className="row px-0 mx-0">
                <div className="col-xl-10 col-lg-12 mx-auto">
                    <div className="row mx-0 px-0">
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div dir='rtl' className="virtul-space">
                                <a href="" className="">
                                    <FontAwesomeIcon className='icon' icon={faTelegram} />
                                    <div className="title">
                                        <span className="fa">عضویت در کانال تلگرام</span>
                                        <span className="en">TELEGRAM CHANNEL</span>
                                    </div>  
                                </a>
                                <a href="" className="mt-2">
                                    <FontAwesomeIcon className='icon' icon={faInstagram} />
                                    <div className="title">
                                        <span className="fa">مشاهده در اینستاگرام</span>
                                        <span className="en">INSTAGRAM PAGE</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 ">
                            <div dir='rtl' className="footer-item ">
                                <div className="item">
                                    <a href="/" className="">دانلود فیلم</a>
                                    <a href="/" className="">پخش آنلاین فیلم ها</a>
                                    <a href="/" className="">۲۵۰ فیلم برتر تاریخ</a>
                                    <a href="/" className="">باکس آفیس</a>
                                    <a href="/" className="">قوانین و مقررات</a>
                                </div>
                                <div className="item">
                                    <a href="/" className="">دانلود سریال</a>
                                    <a href="/" className="">پخش آنلاین سریال ها</a>
                                    <a href="/" className="">۲۵۰ سریال برتر تاریخ</a>
                                    <a href="/" className="">سوالات متداول</a>
                                    <a href="/" className="">DMCA POLICY</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="footer-slider">
                            <Swiper
                                     slidesPerView={1}
                                     spaceBetween={30}
                                     loop={true}
                                     navigation={true}
                                     modules={[Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                    <div className="">
                                        <img src={DDL} alt='' />
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="">
                                        <img src={Cross} alt='' />
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="">
                                        <img src={Elevation} alt='' />
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="">
                                        <img src={Nasferatu} alt='' />
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="">
                                        <img src={Emilia} alt='' />
                                    </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <span className="text-white d-flex justify-content-end mt-4" style={{fontSize:"12px"}}>تمامی حقوق مادی و معنوی این وبسایت محفوظ می باشد و کپی برداری به هر نحوه پیگرد قانونی خواهد داشت</span>
                </div>
            </div>
        </div>
    )
}
export default Footer;