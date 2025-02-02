//img
import LateNight from '../img/Late Night.jpg';
import Chief from '../img/chief.jpg';
import Sing from '../img/sing.jpg';
import Christ from '../img/christ.jpg';
import Body from '../img/body.jpg';
import Afraid from '../img/afraid.jpg';
import Slingshot from '../img/slingshot.jpg';
import Present from '../img/present.jpg';
import Film from '../img/1992.jpg';
import Cucko from '../img/cucko.jpg';
import Penguin from '../img/penguin.jpg';
import From from '../img/from.jpg';
import Daryl from '../img/daryl.jpg';
import Tulsa from '../img/tulsa.jpg';
import Joan from '../img/joan.jpg';
import Uzumaki from '../img/uzumaki.jpg';
import Nobody from '../img/nobody.jpg';
import Nogain from '../img/nogain.jpg';
import Dear from '../img/dear.jpg';
import Ghost from '../img/ghost.jpg';
import Blue from '../img/blue.jpg';
import Dahmer from '../img/dahmer.jpg';
import Gyeongseong from '../img/gyeongseong.jpg';
import Royal from '../img/royal.jpg';
import Lover from '../img/lover.jpg';
import ManS from '../img/manS.jpg';
import Puss from '../img/puss.jpg';
import SpiderMan from '../img/spiderMan.jpg';
import Hitman from '../img/hitman.jpg';
import Birth from '../img/birth.jpg';
import Wedding from '../img/wedding.jpg';
//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong, faChevronLeft, faClapperboard, faEarth , faFilm, faMicrophone, faTheaterMasks, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { faClock, faClosedCaptioning, faFolderClosed, faHeart } from '@fortawesome/free-regular-svg-icons';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

//pagination
import Page from './pagination';

const Cards =()=>{
    return(
        <div className="container-fluid">
            <div className="row px-0 mx-0">
                <div className="col-xl-10 mx-auto">
                    <div className="row mx-0 px-0 ">
                        <div dir='rtl' className="col-xl-9 col-lg-9 col-md-12">
                            <div className="card">
                                <div className="row px-0 mx-0">
                                    <div className="col-md-3 col-sm-12">
                                        <div className="card-right">
                                            <img src={LateNight} alt="" />
                                            <a href="/" className="d-flex">
                                                <div className="trailer-icon"><FontAwesomeIcon style={{width:"22px" , height:"22px"}} icon={faClapperboard}/></div>
                                                <div className="skew"></div>
                                                <span className="trailer-title">مشاهده تریلر</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-9 col-sm-12">
                                        <div className="card-left">
                                            <div className="name-score">
                                                <a href="/" className="title">دانلود فیلم Late Night with the Devil 2023</a>
                                                <div className="heart-score">
                                                    <a  href='/' className="heart"><FontAwesomeIcon className='icon' icon={faHeart}/></a>
                                                    <div className="score">
                                                        <span className="number">7.5<span className='text-white' style={{fontSize:"14px" , fontWeight:"normal"}}>/10</span></span>
                                                        <span className="votes">9.5K Votes</span>
                                                        <span className="imdb">IMDB</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="">
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faTv}/>
                                                    <span className="">کیفیت : 1080p BluRay</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faClock}/>
                                                    <span className=""> زمان : 92 دقیقه</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faFolderClosed}/>
                                                    <span className="">ژانر : ترسناک</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faUserSecret}/>
                                                    <span className="">کارگردان : Cameron Cairnes , Colin Cairnes</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faTheaterMasks}/>
                                                    <span className="">ستارگان : david dastmalchian,Laura Gordon,Ian Bliss</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faEarth}/>
                                                    <span className="">محصول کشور : آمریکا , استرالیا , امارات متحده عربی</span>
                                                </li>
                                                <li className="">
                                                    <span className='score'>72</span>
                                                    <span className="">امتیاز منتقدین</span>
                                                </li>
                                            </ul>
                                            <p className="">پخش زنده برنامه‌ای در سال 1977 آنطور که انتظار می‌رود پیش نمی‌رود و اتفاقات دست به دست هم می‌دهند تا نیرویی پلید وارد خانه تمام مردم کشور شود که...</p>
                                            <div className="bluray"><span>نسخه BluRay اضافه شد</span></div>
                                        </div>
                                    </div>
                                </div>
                                <a href="/" className="download">
                                    <div className="title">ادامه / <span>دانلود</span></div>
                                    <div className="bg-icon">
                                        <div className=""><FontAwesomeIcon className='icon' icon={faArrowDownLong}/></div>
                                    </div>
                                </a>
                                <div className="subtitle">
                                    <FontAwesomeIcon className='icon' icon={faClosedCaptioning} />
                                </div>
                            </div>
                            <div className="card">
                                <div className="row px-0 mx-0">
                                    <div className="col-md-3 col-sm-12">
                                        <div className="card-right">
                                            <img src={Chief} alt="" />
                                            <a href="/" className="d-flex">
                                                <div className="trailer-icon"><FontAwesomeIcon style={{width:"22px" , height:"22px"}} icon={faClapperboard}/></div>
                                                <div className="skew"></div>
                                                <span className="trailer-title">مشاهده تریلر</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-9 col-sm-12">
                                        <div className="card-left">
                                            <div className="name-score">
                                                <a href="/" className="title">دانلود فیلم Chief of Station 2024</a>
                                                <div className="heart-score">
                                                    <a  href='/' className="heart"><FontAwesomeIcon className='icon' icon={faHeart}/></a>
                                                    <div className="score">
                                                        <span className="number">7.5<span className='text-white' style={{fontSize:"14px" , fontWeight:"normal"}}>/10</span></span>
                                                        <span className="votes">9.5K Votes</span>
                                                        <span className="imdb">IMDB</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="">
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faTv}/>
                                                    <span className="">کیفیت : 1080p BluRay</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faClock}/>
                                                    <span className=""> زمان : 97 دقیقه</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faFolderClosed}/>
                                                    <span className="">ژانر : اکشن , هیجان انگیز</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faUserSecret}/>
                                                    <span className="">کارگردان : jesse v. johnson</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faTheaterMasks}/>
                                                    <span className="">ستارگان : aaron eckhart,olga kurylenko,alex pettyfer</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faEarth}/>
                                                    <span className="">محصول کشور : آمریکا</span>
                                                </li>
                                            </ul>
                                            <p className=""> محصول کشور : آمریکا
                                            داستان رئیس سابق قرارگاه سیا که متوجه می‌شود مرگ همسرش تصادفی نبوده و برای همین به دنیای جاسوسی برمی‌گردد تا...</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="/" className="download">
                                    <div className="title">ادامه / <span>دانلود</span></div>
                                    <div className="bg-icon">
                                        <div className=""><FontAwesomeIcon className='icon' icon={faArrowDownLong}/></div>
                                    </div>
                                </a>
                                <div className="subtitle">
                                    <FontAwesomeIcon className='icon' icon={faClosedCaptioning} />
                                </div>
                            </div>
                            <div className="card">
                                <div className="row px-0 mx-0">
                                    <div className="col-md-3 col-sm-12">
                                        <div className="card-right">
                                            <img src={Sing} alt="" />
                                            <a href="/" className="d-flex">
                                                <div className="trailer-icon"><FontAwesomeIcon style={{width:"22px" , height:"22px"}} icon={faClapperboard}/></div>
                                                <div className="skew"></div>
                                                <span className="trailer-title">مشاهده تریلر</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-9 col-sm-12">
                                        <div className="card-left">
                                            <div className="name-score">
                                                <a href="/" className="title">دانلود فیلم Sing Sing 2023</a>
                                                <div className="heart-score">
                                                    <a  href='/' className="heart"><FontAwesomeIcon className='icon' icon={faHeart}/></a>
                                                    <div className="score">
                                                        <span className="number">7.5<span className='text-white' style={{fontSize:"14px" , fontWeight:"normal"}}>/10</span></span>
                                                        <span className="votes">9.5K Votes</span>
                                                        <span className="imdb">IMDB</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="">
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faTv}/>
                                                    <span className="">کیفیت : 1080p WEB-DL</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faClock}/>
                                                    <span className=""> زمان : 107 دقیقه</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faFolderClosed}/>
                                                    <span className=""> ژانر : درام</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faUserSecret}/>
                                                    <span className="">کارگردان : Greg Kwedar</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faTheaterMasks}/>
                                                    <span className="">ستارگان : colman domingo,Clarence Maclin,Sean San Jose</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faEarth}/>
                                                    <span className="">محصول کشور : آمریکا</span>
                                                </li>
                                                <li className="">
                                                    <span className='score'>84</span>
                                                    <span className="">امتیاز منتقدین</span>
                                                </li>
                                            </ul>
                                            <p className="">داستان مردی به‌نام دیواین جی که به اشتباه به زندان سینگ سینگ افتاده. او پس از مدتی به تئاتر در زندان علاقه‌مند می‌شود که...</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="/" className="download">
                                    <div className="title">ادامه / <span>دانلود</span></div>
                                    <div className="bg-icon">
                                        <div className=""><FontAwesomeIcon className='icon' icon={faArrowDownLong}/></div>
                                    </div>
                                </a>
                                <div className="subtitle">
                                    <FontAwesomeIcon className='icon' icon={faClosedCaptioning} />
                                </div>
                            </div>
                            <div className="card">
                                <div className="row px-0 mx-0">
                                    <div className="col-md-3 col-sm-12">
                                        <div className="card-right">
                                            <img src={Christ} alt="" />
                                            <a href="/" className="d-flex">
                                                <div className="trailer-icon"><FontAwesomeIcon style={{width:"22px" , height:"22px"}} icon={faClapperboard}/></div>
                                                <div className="skew"></div>
                                                <span className="trailer-title">مشاهده تریلر</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-9 col-sm-12">
                                        <div className="card-left">
                                            <div className="name-score">
                                                <a href="/" className="title">دانلود فیلم The Last Temptation of Christ 1988</a>
                                                <div className="heart-score">
                                                    <a  href='/' className="heart"><FontAwesomeIcon className='icon' icon={faHeart}/></a>
                                                    <div className="score">
                                                        <span className="number">7.5<span className='text-white' style={{fontSize:"14px" , fontWeight:"normal"}}>/10</span></span>
                                                        <span className="votes">9.5K Votes</span>
                                                        <span className="imdb">IMDB</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="">
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faTv}/>
                                                    <span className="">کیفیت : 1080p BluRay</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faClock}/>
                                                    <span className="">  زمان : 164 دقیقه</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faFolderClosed}/>
                                                    <span className="">ژانر : درام</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faUserSecret}/>
                                                    <span className="">کارگردان : martin scorsese</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faTheaterMasks}/>
                                                    <span className="">ستارگان : willem dafoe,Harvey Keitel,Barbara Hershey</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faEarth}/>
                                                    <span className="">محصول کشور : آمریکا , کانادا</span>
                                                </li>
                                                <li className="">
                                                    <span className='score'>80</span>
                                                    <span className="">امتیاز منتقدین</span>
                                                </li>
                                            </ul>
                                            <p className="">داستان زندگی عیسی مسیح و آخرین وسوسه او زمانی که به صلیب کشیده شده بود.</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="/" className="download">
                                    <div className="title">ادامه / <span>دانلود</span></div>
                                    <div className="bg-icon">
                                        <div className=""><FontAwesomeIcon className='icon' icon={faArrowDownLong}/></div>
                                    </div>
                                </a>
                                <div className="subtitle">
                                    <FontAwesomeIcon className='icon' icon={faClosedCaptioning} />
                                </div>
                            </div>
                            <div className="card">
                                <div className="row px-0 mx-0">
                                    <div className="col-md-3 col-sm-12">
                                        <div className="card-right">
                                            <img src={Body} alt="" />
                                            <a href="/" className="d-flex">
                                                <div className="trailer-icon"><FontAwesomeIcon style={{width:"22px" , height:"22px"}} icon={faClapperboard}/></div>
                                                <div className="skew"></div>
                                                <span className="trailer-title">مشاهده تریلر</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-9 col-sm-12">
                                        <div className="card-left">
                                            <div className="name-score">
                                                <a href="/" className="title">دانلود فیلم Mind Body Spirit 2023</a>
                                                <div className="heart-score">
                                                    <a  href='/' className="heart"><FontAwesomeIcon className='icon' icon={faHeart}/></a>
                                                    <div className="score">
                                                        <span className="number">7.5<span className='text-white' style={{fontSize:"14px" , fontWeight:"normal"}}>/10</span></span>
                                                        <span className="votes">9.5K Votes</span>
                                                        <span className="imdb">IMDB</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="">
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faTv}/>
                                                    <span className="">کیفیت : 1080p WEB-DL</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faClock}/>
                                                    <span className=""> زمان : 80 دقیقه</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faFolderClosed}/>
                                                    <span className="">ژانر : ترسناک</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faUserSecret}/>
                                                    <span className="">کارگردان : Alex Henes , Matthew Merenda</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faTheaterMasks}/>
                                                    <span className="">ستارگان : Sarah J. Bartholomew,Madi Bready,KJ Flahive</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faEarth}/>
                                                    <span className="">محصول کشور : آمریکا</span>
                                                </li>
                                            </ul>
                                            <p className="">داستان یک اینفلوئنسر یوگا که سعی می‌کند در خانه مادربزرگ‌اش، مراسم روحانی‌ای را تمرین کند اما...</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="/" className="download">
                                    <div className="title">ادامه / <span>دانلود</span></div>
                                    <div className="bg-icon">
                                        <div className=""><FontAwesomeIcon className='icon' icon={faArrowDownLong}/></div>
                                    </div>
                                </a>
                                <div className="subtitle">
                                    <FontAwesomeIcon className='icon' icon={faClosedCaptioning} />
                                </div>
                            </div>
                            <div className="card">
                                <div className="row px-0 mx-0">
                                    <div className="col-md-3 col-sm-12">
                                        <div className="card-right">
                                            <img src={Afraid} alt="" />
                                            <a href="/" className="d-flex">
                                                <div className="trailer-icon"><FontAwesomeIcon style={{width:"22px" , height:"22px"}} icon={faClapperboard}/></div>
                                                <div className="skew"></div>
                                                <span className="trailer-title">مشاهده تریلر</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-9 col-sm-12">
                                        <div className="card-left">
                                            <div className="name-score">
                                                <a href="/" className="title">دانلود فیلم Afraid 2024</a>
                                                <div className="heart-score">
                                                    <a  href='/' className="heart"><FontAwesomeIcon className='icon' icon={faHeart}/></a>
                                                    <div className="score">
                                                        <span className="number">7.5<span className='text-white' style={{fontSize:"14px" , fontWeight:"normal"}}>/10</span></span>
                                                        <span className="votes">9.5K Votes</span>
                                                        <span className="imdb">IMDB</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="">
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faTv}/>
                                                    <span className="">کیفیت : 1080p WEB-DL</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faClock}/>
                                                    <span className="">زمان : 84 دقیقه</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faFolderClosed}/>
                                                    <span className="">ژانر : ترسناک , رازآلود , علمی تخیلی , هیجان انگیز</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faUserSecret}/>
                                                    <span className="">کارگردان : chris weitz</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faTheaterMasks}/>
                                                    <span className="">ستارگان : john cho,katherine waterston,Keith Carradine</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faEarth}/>
                                                    <span className="">محصول کشور : آمریکا , انگلستان</span>
                                                </li>
                                                <li className="">
                                                    <span className='score' style={{backgroundColor:"red"}}>28</span>
                                                    <span className="">امتیاز منتقدین</span>
                                                </li>
                                            </ul>
                                            <p className="">داستان خانواده کرتیس که برای آزمایش یک سیستم دستیار خانگی هوش مصنوعی به‌نام آیا، انتخاب می‌شوند. آیا سیستمی است که رفتار خانواده را زیر نظر می‌گیرد و نیازهای آن‌ها را محاسبه می‌کند اما...</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="/" className="download">
                                    <div className="title">ادامه / <span>دانلود</span></div>
                                    <div className="bg-icon">
                                        <div className=""><FontAwesomeIcon className='icon' icon={faArrowDownLong}/></div>
                                    </div>
                                </a>
                                <div className="subtitle">
                                    <FontAwesomeIcon className='icon' icon={faClosedCaptioning} />
                                </div>
                            </div>
                            <div className="card">
                                <div className="row px-0 mx-0">
                                    <div className="col-md-3 col-sm-12">
                                        <div className="card-right">
                                            <img src={Slingshot} alt="" />
                                            <a href="/" className="d-flex">
                                                <div className="trailer-icon"><FontAwesomeIcon style={{width:"22px" , height:"22px"}} icon={faClapperboard}/></div>
                                                <div className="skew"></div>
                                                <span className="trailer-title">مشاهده تریلر</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-9 col-sm-12">
                                        <div className="card-left">
                                            <div className="name-score">
                                                <a href="/" className="title">دانلود فیلم Slingshot 2024</a>
                                                <div className="heart-score">
                                                    <a  href='/' className="heart"><FontAwesomeIcon className='icon' icon={faHeart}/></a>
                                                    <div className="score">
                                                        <span className="number">7.5<span className='text-white' style={{fontSize:"14px" , fontWeight:"normal"}}>/10</span></span>
                                                        <span className="votes">9.5K Votes</span>
                                                        <span className="imdb">IMDB</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="">
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faTv}/>
                                                    <span className="">کیفیت : 1080p WEB-DL</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faClock}/>
                                                    <span className=""> زمان : 108 دقیقه</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faFolderClosed}/>
                                                    <span className="">ژانر : علمی تخیلی , هیجان انگیز</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faUserSecret}/>
                                                    <span className="">کارگردان : mikael håfström</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faTheaterMasks}/>
                                                    <span className="">ستارگان : casey affleck,laurence fishburne,emily beecham</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faEarth}/>
                                                    <span className="">محصول کشور : آمریکا , اندونزی , مجارستان</span>
                                                </li>
                                                <li className="">
                                                    <span className='score' style={{backgroundColor:"#eb8307"}}>50</span>
                                                    <span className="">امتیاز منتقدین</span>
                                                </li>
                                            </ul>
                                            <p className="">داستان فضانوردی که سعی دارد در فضاپیما و مأموریت به خطر افتاده‌اش به سمت قمرِ زحل یعنی تایتان، کنترل خود را حفظ کند تا بتواند مرز بین توهم و واقعیت را تشخیص دهد.</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="/" className="download">
                                    <div className="title">ادامه / <span>دانلود</span></div>
                                    <div className="bg-icon">
                                        <div className=""><FontAwesomeIcon className='icon' icon={faArrowDownLong}/></div>
                                    </div>
                                </a>
                                <div className="subtitle">
                                    <FontAwesomeIcon className='icon' icon={faClosedCaptioning} />
                                </div>
                            </div>
                            <div className="card">
                                <div className="row px-0 mx-0">
                                    <div className="col-md-3 col-sm-12">
                                        <div className="card-right">
                                            <img src={Present} alt="" />
                                            <a href="/" className="d-flex">
                                                <div className="trailer-icon"><FontAwesomeIcon style={{width:"22px" , height:"22px"}} icon={faClapperboard}/></div>
                                                <div className="skew"></div>
                                                <span className="trailer-title">مشاهده تریلر</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-9 col-sm-12">
                                        <div className="card-left">
                                            <div className="name-score">
                                                <a href="/" className="title">دانلود فیلم The Present 2024</a>
                                                <div className="heart-score">
                                                    <a  href='/' className="heart"><FontAwesomeIcon className='icon' icon={faHeart}/></a>
                                                    <div className="score">
                                                        <span className="number">7.5<span className='text-white' style={{fontSize:"14px" , fontWeight:"normal"}}>/10</span></span>
                                                        <span className="votes">9.5K Votes</span>
                                                        <span className="imdb">IMDB</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="">
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faTv}/>
                                                    <span className="">کیفیت : 1080p BluRay</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faClock}/>
                                                    <span className=""> زمان : 86 دقیقه</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faFolderClosed}/>
                                                    <span className="">ژانر : کمدی</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faUserSecret}/>
                                                    <span className="">کارگردان : Christian Ditter</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faTheaterMasks}/>
                                                    <span className="">ستارگان : isla fisher,greg kinnear,Easton Rocket Sweda</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faEarth}/>
                                                    <span className="">محصول کشور : آمریکا</span>
                                                </li>
                                            </ul>
                                            <p className="">داستان پسری باهوش که متوجه می‌شود با یک عتیقه خانوادگی می‌تواند زمان را دستکاری کند. او با کمک خواهر و برادرش سعی می‌کند به قبل از جدایی مادر و پدرشان برگردد تا شرایط را تغییر دهد.</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="/" className="download">
                                    <div className="title">ادامه / <span>دانلود</span></div>
                                    <div className="bg-icon">
                                        <div className=""><FontAwesomeIcon className='icon' icon={faArrowDownLong}/></div>
                                    </div>
                                </a>
                                <div className="subtitle">
                                    <FontAwesomeIcon className='icon' icon={faClosedCaptioning} />
                                </div>
                            </div>
                            <div className="card">
                                <div className="row px-0 mx-0">
                                    <div className="col-md-3 col-sm-12">
                                        <div className="card-right">
                                            <img src={Film} alt="" />
                                            <a href="/" className="d-flex">
                                                <div className="trailer-icon"><FontAwesomeIcon style={{width:"22px" , height:"22px"}} icon={faClapperboard}/></div>
                                                <div className="skew"></div>
                                                <span className="trailer-title">مشاهده تریلر</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-9 col-sm-12">
                                        <div className="card-left">
                                            <div className="name-score">
                                                <a href="/" className="title">دانلود فیلم 1992 2022</a>
                                                <div className="heart-score">
                                                    <a  href='/' className="heart"><FontAwesomeIcon className='icon' icon={faHeart}/></a>
                                                    <div className="score">
                                                        <span className="number">7.5<span className='text-white' style={{fontSize:"14px" , fontWeight:"normal"}}>/10</span></span>
                                                        <span className="votes">9.5K Votes</span>
                                                        <span className="imdb">IMDB</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="">
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faTv}/>
                                                    <span className="">کیفیت : 1080p WEB-DL</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faClock}/>
                                                    <span className=""> زمان : 97 دقیقه</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faFolderClosed}/>
                                                    <span className="">ژانر : اکشن , درام , هیجان انگیز</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faUserSecret}/>
                                                    <span className="">کارگردان : ariel vromen</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faTheaterMasks}/>
                                                    <span className="">ستارگان : tyrese gibson,ray liotta,scott eastwood</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faEarth}/>
                                                    <span className="">محصول کشور : آمریکا</span>
                                                </li>
                                                <li className="">
                                                    <span className='score' style={{backgroundColor:"#eb8307"}}>44</span>
                                                    <span className="">امتیاز منتقدین</span>
                                                </li>
                                            </ul>
                                            <p className="">داستان مغازه‌داری که در جریانات 1992 و حکم رادنی کینگ، سعی دارد پسر خود را از دست اعضای یک گروه خلافکاری عصبانی نجات دهد.</p>
                                            <div className="bluray"><span>نسخه BluRay اضافه شد</span></div>
                                        </div>
                                    </div>
                                </div>
                                <a href="/" className="download">
                                    <div className="title">ادامه / <span>دانلود</span></div>
                                    <div className="bg-icon">
                                        <div className=""><FontAwesomeIcon className='icon' icon={faArrowDownLong}/></div>
                                    </div>
                                </a>
                                <div className="subtitle">
                                    <FontAwesomeIcon className='icon' icon={faClosedCaptioning} />
                                </div>
                            </div>
                            <div className="card">
                                <div className="row px-0 mx-0">
                                    <div className="col-md-3 col-sm-12">
                                        <div className="card-right">
                                            <img src={Cucko} alt="" />
                                            <a href="/" className="d-flex">
                                                <div className="trailer-icon"><FontAwesomeIcon style={{width:"22px" , height:"22px"}} icon={faClapperboard}/></div>
                                                <div className="skew"></div>
                                                <span className="trailer-title">مشاهده تریلر</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-9 col-sm-12">
                                        <div className="card-left">
                                            <div className="name-score">
                                                <a href="/" className="title">دانلود فیلم Cuckoo 2024</a>
                                                <div className="heart-score">
                                                    <a  href='/' className="heart"><FontAwesomeIcon className='icon' icon={faHeart}/></a>
                                                    <div className="score">
                                                        <span className="number">7.5<span className='text-white' style={{fontSize:"14px" , fontWeight:"normal"}}>/10</span></span>
                                                        <span className="votes">9.5K Votes</span>
                                                        <span className="imdb">IMDB</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="">
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faTv}/>
                                                    <span className="">کیفیت : 1080p WEB-DL Full HD</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faClock}/>
                                                    <span className=""> زمان : 102 دقیقه</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faFolderClosed}/>
                                                    <span className="">ژانر : ترسناک , رازآلود , هیجان انگیز</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faUserSecret}/>
                                                    <span className=""> کارگردان : Tilman Singer</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faTheaterMasks}/>
                                                    <span className="">ستارگان : Hunter Schafer,Jan Bluthardt,marton csokas</span>
                                                </li>
                                                <li className="">
                                                    <FontAwesomeIcon className='icon' icon={faEarth}/>
                                                    <span className="">محصول کشور : آلمان , آمریکا</span>
                                                </li>
                                                <li className="">
                                                    <span className='score'>72</span>
                                                    <span className="">امتیاز منتقدین</span>
                                                </li>
                                            </ul>
                                            <p className="">داستان دختری هفده ساله که مجبور می‌شود با خانواده‌اش به مسافر‌خانه‌ای برود که هیچ چیز آنطور که به نظر می‌آید نیست.</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="/" className="download">
                                    <div className="title">ادامه / <span>دانلود</span></div>
                                    <div className="bg-icon">
                                        <div className=""><FontAwesomeIcon className='icon' icon={faArrowDownLong}/></div>
                                    </div>
                                </a>
                                <div className="subtitle">
                                    <FontAwesomeIcon className='icon' icon={faClosedCaptioning} />
                                </div>
                            </div>
                            <Page/>
                        </div>
                        <div dir='rtl' style={{zIndex:"1"}} className="col-xl-3 col-lg-3 col-md-12 update-series mx-0 px-0">
                            <div className="series">
                                <div className="title">
                                    <FontAwesomeIcon className='icon' icon={faTv} />
                                    <div className="d-flex flex-column text-white">
                                        <span className="span-t">سریال های</span>
                                        <span className="span-b">بروز شده</span>
                                    </div>
                                </div>
                                <div className="first-series">
                                    <a href='/' className="">
                                        <img src={Penguin} alt="" className="" />
                                        <span className="film-title">قسمت <span className='film-e'>۲</span> فصل اول با زیرنویس منتشرشد</span>
                                    </a>
                                </div>
                                <div className="series-little">
                                    <a href="/" className="">
                                        <img src={From} alt="" className="" />
                                        <span className="film-title">قسمت <span className='film-e'>۲</span> فصل اول با زیرنویس منتشرشد</span>
                                    </a>
                                </div>
                                <div className="series-little">
                                    <a href="/" className="">
                                        <img src={Daryl} alt="" className="" />
                                        <span className="film-title">قسمت <span className='film-e'>۲</span> فصل اول با زیرنویس منتشرشد</span>
                                    </a>
                                </div>
                                <div className="series-little">
                                    <a href="/" className="">
                                        <img src={Tulsa} alt="" className="" />
                                        <span className="film-title">قسمت <span className='film-e'>۲</span> فصل اول با زیرنویس منتشرشد</span>
                                    </a>
                                </div>
                                <div className="series-little">
                                    <a href="/" className="">
                                        <img src={Joan} alt="" className="" />
                                        <span className="film-title">قسمت <span className='film-e'>۲</span> فصل اول با زیرنویس منتشرشد</span>
                                    </a>
                                </div>
                                <div className="series-little">
                                    <a href="/" className="">
                                        <img src={Uzumaki} alt="" className="" />
                                        <span className="film-title">قسمت <span className='film-e'>۲</span> فصل اول با زیرنویس منتشرشد</span>
                                    </a>
                                </div>
                                <div className="series-little">
                                    <a href="/" className="">
                                        <img src={Nobody} alt="" className="" />
                                        <span className="film-title">قسمت <span className='film-e'>۲</span> فصل اول با زیرنویس منتشرشد</span>
                                    </a>
                                </div>
                                <div className="series-little">
                                    <a href="/" className="">
                                        <img src={Nogain} alt="" className="" />
                                        <span className="film-title">قسمت <span className='film-e'>۲</span> فصل اول با زیرنویس منتشرشد</span>
                                    </a>
                                </div>
                                <div className="series-little">
                                    <a href="/" className="">
                                        <img src={Dear} alt="" className="" />
                                        <span className="film-title">قسمت <span className='film-e'>۲</span> فصل اول با زیرنویس منتشرشد</span>
                                    </a>
                                </div>
                                <div className="series-little">
                                    <a href="/" className="">
                                        <img src={Ghost} alt="" className="" />
                                        <span className="film-title">قسمت <span className='film-e'>۲</span> فصل اول با زیرنویس منتشرشد</span>
                                    </a>
                                </div>
                                <div className="series-little">
                                    <a href="/" className="">
                                        <img src={Blue} alt="" className="" />
                                        <span className="film-title">قسمت <span className='film-e'>۲</span> فصل اول با زیرنویس منتشرشد</span>
                                    </a>
                                </div>
                                <div className="series-little">
                                    <a href="/" className="">
                                        <img src={Dahmer} alt="" className="" />
                                        <span className="film-title">قسمت <span className='film-e'>۲</span> فصل اول با زیرنویس منتشرشد</span>
                                    </a>
                                </div>
                                <div className="series-little">
                                    <a href="/" className="">
                                        <img src={Gyeongseong} alt="" className="" />
                                        <span className="film-title">قسمت <span className='film-e'>۲</span> فصل اول با زیرنویس منتشرشد</span>
                                    </a>
                                </div>
                                <div className="series-little">
                                    <a href="/" className="">
                                        <img src={Royal} alt="" className="" />
                                        <span className="film-title">قسمت <span className='film-e'>۲</span> فصل اول با زیرنویس منتشرشد</span>
                                    </a>
                                </div>
                                <div className="series-little">
                                    <a href="/" className="">
                                        <img src={Lover} alt="" className="" />
                                        <span className="film-title">قسمت <span className='film-e'>۲</span> فصل اول با زیرنویس منتشرشد</span>
                                    </a>
                                </div>
                            </div>
                            <div className="film-double">
                                <div className="title">
                                        <FontAwesomeIcon className='icon' icon={faMicrophone} />
                                        <div className="d-flex flex-column text-white">
                                            <span className="span-t">فیلم های</span>
                                            <span className="span-b">دوبله فارسی</span>
                                        </div>
                                </div>
                                <div className="slider-film mt-4">
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
                                        <img src={ManS} alt='' />
                                        <div className="title">
                                            <span className="name">Despicable Me 4 2024</span>
                                            <span className="score">6.2<span>/10</span></span>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="">
                                        <img src={Puss} alt='' />
                                        <div className="title">
                                            <span className="name">Puss in Boots:<br/> The Last Wish 2022</span>
                                            <span className="score">6.2<span>/10</span></span>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="">
                                        <img src={SpiderMan} alt='' />
                                        <div className="title">
                                            <span className="name">Spider-Man:Across the<br/> Spider-Verse 2023</span>
                                            <span className="score">6.2<span>/10</span></span>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="">
                                        <img src={Hitman} alt='' />
                                        <div className="title">
                                            <span className="name">Hitman:Agent 47 2015</span>
                                            <span className="score">6.2<span>/10</span></span>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="">
                                        <img src={Birth} alt='' />
                                        <div className="title">
                                            <span className="name">Birh 2004</span>
                                            <span className="score">6.2<span>/10</span></span>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                </Swiper>
                                </div>
                            </div>
                            <div className="category">
                                <div className="title">
                                    <FontAwesomeIcon className='icon' icon={faFilm} />
                                    <div className="d-flex flex-column text-white">
                                        <span className="span-t">دسته بندی</span>
                                        <span className="span-b">فیلم ها</span>
                                    </div>
                                </div>
                                <ul className="">
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">درام</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">هیجان انگیز</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">کمدی</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">اکشن</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">ماجراجویی</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">جنایی</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">ترسناک</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">عاشقانه</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">رازآلود</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">فانتزی</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">درام</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">هیجان انگیز</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">کمدی</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">اکشن</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">ماجراجویی</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">جنایی</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">ترسناک</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">عاشقانه</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">رازآلود</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">فانتزی</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">درام</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">هیجان انگیز</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">کمدی</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">اکشن</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">ماجراجویی</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">جنایی</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">ترسناک</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">عاشقانه</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">رازآلود</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">فانتزی</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">رازآلود</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">فانتزی</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">فانتزی</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="category">
                                <div className="title">
                                    <FontAwesomeIcon className='icon' icon={faFilm} />
                                    <div className="d-flex flex-column text-white">
                                        <span className="span-t">دسته بندی</span>
                                        <span className="span-b">سریال ها</span>
                                    </div>
                                </div>
                                <ul className="">
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">درام</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">هیجان انگیز</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">کمدی</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">اکشن</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">ماجراجویی</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">جنایی</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">ترسناک</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">عاشقانه</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">رازآلود</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">فانتزی</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">درام</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">هیجان انگیز</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">کمدی</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">اکشن</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">ماجراجویی</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">جنایی</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">ترسناک</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">عاشقانه</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">رازآلود</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">فانتزی</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">درام</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">هیجان انگیز</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">کمدی</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">اکشن</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">ماجراجویی</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">جنایی</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">ترسناک</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">عاشقانه</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">رازآلود</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                    <li className="">
                                        <div className="">
                                            <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                                            <a href="/">فانتزی</a>
                                        </div>
                                        <span className="">(۴۴۸۲)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="trailer">
                                <div className="title">
                                    <FontAwesomeIcon className='icon' icon={faFilm} />
                                    <div className="d-flex flex-column text-white">
                                        <span className="span-t">تریلرها</span>
                                        <span className="span-b">به زودی</span>
                                    </div>
                                </div>
                                <div className="trailer-film">
                                    <a href="/">
                                        <img src={Wedding} alt="" className="" />
                                        <span className="">The People We Hate at the Wedding 2022</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cards;