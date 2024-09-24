import Logo from '../img/logo-light.png';
import Joker from '../img/joker.png';
import BradPitt from '../img/brad pitt.png';
import BreakingBad from '../img/breaking-bad.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUserPlus , faRightToBracket , faHome , faFilm , faTv ,
     faTheaterMasks , faHeadset , faSearch , faBars 
    }from '@fortawesome/free-solid-svg-icons';

const Nav =()=>{
    return(
        <div className="container-fluid px-0">
            <div className="nav-top">
                <div className="row px-0 mx-0">
                    <div className="col-xl-10 col-lg-12 mx-auto">
                        <div className="d-md-flex align-items-center justify-content-between text-center">
                            <div className="mt-3">
                                <img src={Logo} width={"250px"} alt="" className="" />
                            </div>
                            <div className=" mt-3 d-flex align-items-center text-center justify-content-center">
                                <a href="/" className="me-2">وارد شوید<FontAwesomeIcon className='ms-2' style={{width:"19px" , height:"19px"}} icon={faRightToBracket} /></a>
                                <a href="/" className="">ثبت نام<FontAwesomeIcon className='ms-2' style={{width:"19px", height:"19px"}} icon={faUserPlus} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div dir='rtl' className="nav-bottom mx-0 px-0 mt-4">
                <div className="row mx-0 px-0">
                    <div className="col-xl-10 col-lg-12 mx-auto">
                        <div className="hiden-items d-lg-flex align-items-center justify-content-between py-3">
                        <ul className=" d-flex align-items-center justify-content-center text-center my-auto mx-0 px-0" style={{listStyle:"none"}}>
                            <li className="ms-5">
                                <a href="/" className="nav-items d-flex align-items-center">
                                <FontAwesomeIcon className='items-icon ms-2' icon={faHome}/>
                                <span className="d-flex flex-column">
                                    <span className="text-white">خانه</span>
                                    <span className="">HOME</span>
                                </span>
                                </a>
                            </li>
                            <li className="nav-item-movies ms-5">
                                <a href="/" className="nav-items d-flex align-items-center">
                                <FontAwesomeIcon className='items-icon ms-2' icon={faFilm}/>
                                <span className="d-flex flex-column">
                                    <span className="text-white">دانلود فیلم</span>
                                    <span className="">MOVIES</span>
                                </span>
                                </a>
                                <div className="nav-item-movies-hover">
                                    <div className="item-movies">
                                    <ul className="">
                                        <li className="">
                                            <a href="/" className="">دانلود فیلم</a>
                                        </li>
                                        <li className="">
                                            <a href="/" className="">فیلم های دارای پخش آنلاین</a>
                                        </li>
                                        <li className="">
                                            <a href="/" className="">فیلم های پیشنهادی</a>
                                        </li>
                                        <li className="">
                                            <a href="/" className="">فیلم های دوبله فارسی</a>
                                        </li>
                                        <li className="">
                                            <a href="/" className="">سینمای هند</a>
                                        </li>
                                        <li className="">
                                            <a href="/" className="">دانلود انیمیشن</a>
                                        </li>
                                        <li className="">
                                            <a href="/" className="">۲۵۰ فیلم برتر تاریخ</a>
                                        </li>
                                        <li className="">
                                            <a href="/" className="">باکس آفیس</a>
                                        </li>
                                        <li className="">
                                            <a href="/" className="">بزودی...</a>
                                        </li>
                                        <li className="">
                                            <a href="/" className="">فیلم های 3 بعدی</a>
                                        </li>
                                    </ul>
                                        <img src={Joker} width={"30%"}  alt="" className="" />
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item-series ms-5">
                                <a href="/" className="nav-items d-flex align-items-center">
                                <FontAwesomeIcon className='items-icon ms-2' icon={faTv}/>
                                <span className="d-flex flex-column">
                                    <span className="text-white">دانلود سریال</span>
                                    <span className="">SERIES</span>
                                </span>
                                </a>
                                <div className="nav-item-series-hover">
                                    <div className="item-series">
                                    <ul className="">
                                        <li className="">
                                            <a href="/" className="">دانلود سریال</a>
                                        </li>
                                        <li className="">
                                            <a href="/" className="">۲۵۰ سریال برتر تاریخ</a>
                                        </li>
                                        <li className="">
                                            <a href="/" className="">پربازدید ترین سریال ها</a>
                                        </li>
                                        <li className="">
                                            <a href="/" className="">سریال های پایان یافته</a>
                                        </li>
                                        <li className="">
                                            <a href="/" className="">سریال های کره ای</a>
                                        </li>
                                        <li className="">
                                            <a href="/" className="">مینی سریال</a>
                                        </li>
                                        <li className="">
                                            <a href="/" className="">سریال های دارای پخش آنلاین</a>
                                        </li>
                                        <li className="">
                                            <a href="/" className="">برترین سریال های قرن 21</a>
                                        </li>
                                        <li className="">
                                            <a href="/" className="">سریال کنسل شده</a>
                                        </li>
                                        <li className="">
                                            <a href="/" className="">سریال های دوبله فارسی</a>
                                        </li>
                                        <li className="">
                                            <a href="/" className="">سریال های انیمیشنی</a>
                                        </li>
                                        <li className="">
                                            <a href="/" className="">انیمه</a>
                                        </li>
                                    </ul>
                                        <img src={BreakingBad} width={"30%"}  alt="" className="" />
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item-artists ms-5">
                                <a href="/" className="nav-items d-flex align-items-center">
                                <FontAwesomeIcon className='items-icon ms-2' icon={faTheaterMasks}/>
                                <span className="d-flex flex-column">
                                    <span className="text-white">هنرمندان</span>
                                    <span className="">ARTISTS</span>
                                </span>
                                </a>
                                <div className="nav-item-artists-hover">
                                    <div className="item-artists">
                                    <ul className="">
                                        <li className="">
                                            <a href="/" className="">برترین بازیگران مرد</a>
                                        </li>
                                        <li className="">
                                            <a href="/" className="">برترین بازیگران زن</a>
                                        </li>
                                        <li className="">
                                            <a href="/" className="">برترین کارگردانان</a>
                                        </li>
                                        <li className="">
                                            <a href="/" className="">اخبار سینما و هنرمندان</a>
                                        </li>
                                    </ul>
                                        <img src={BradPitt} width={"30%"}  alt="" className="" />
                                    </div>
                                </div>
                            </li>
                            <li className="">
                                <a href="/" className="nav-items d-flex align-items-center">
                                <FontAwesomeIcon className='items-icon ms-2' icon={faHeadset}/>
                                <span className="d-flex flex-column">
                                    <span className="text-white">تماس با ما</span>
                                    <span className="">CONTACT</span>
                                </span>
                                </a>
                            </li>
                        </ul>
                        <div className="input-search d-flex" >
                            <div className="menu ms-5 me-2 text-white btn text-center">
                                <FontAwesomeIcon style={{width:"30px" , height:"30px"}} icon={faBars}/>
                            </div>
                            <form action="" className='d-flex'>
                                <input type="text" placeholder='جستجو کنید . . .' />
                                <button className=""><FontAwesomeIcon icon={faSearch}/></button>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Nav