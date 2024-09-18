import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import Maxin from '../img/maxin.jpg';
import Trap from '../img/trap.jpg';
import InsideOut from '../img/inside out.jpg';
import Film1 from '../img/film1.jpg';
import Film2 from '../img/film2.jpg';
import Film3 from '../img/film3.jpg';
import Film4 from '../img/film4.jpg';
import Film5 from '../img/film5.jpg';
import Film6 from '../img/film6.jpg';
import Man4 from '../img/man4.jpg';


const Slider =()=>{
    
      return (
        <div className="mt-5">
           <Swiper
         effect={'coverflow'}
         grabCursor={true}
         centeredSlides={true}
         slidesPerView={3}
         loop={true}
         coverflowEffect={{
           rotate: 50,
           stretch: 0,
           depth: 100,
           modifier: 1,
           slideShadows: false,
         }}
         navigation={true}
         modules={[EffectCoverflow , Navigation]}
       >
        <SwiperSlide>
          <a href="/" className="film">
            <img src={Trap} alt="Slide 1" />
            <div className="about-film">
                <span className="score">6.2<span className=''>/10</span></span>
                <span className="imdb">IMDB</span>
                <span className="name">Trap 2024</span>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/" className="film">
            <img src={InsideOut} alt="Slide 2" />
            <div className="about-film">
                <span className="score">7.7<span className=''>/10</span></span>
                <span className="imdb">IMDB</span>
                <span className="name">Inside Out 2 2024</span>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/" className="film">
            <img src={Man4} alt="Slide 2" />
            <div className="about-film">
                <span className="score">6.2<span className=''>/10</span></span>
                <span className="imdb">IMDB</span>
                <span className="name">Despicable Me 4 2024</span>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/" className="film">
            <img src={Maxin} alt="Slide 3" />
            <div className="about-film">
                <span className="score">6.4<span className=''>/10</span></span>
                <span className="imdb">IMDB</span>
                <span className="name">MaXXXine 2024</span>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/" className="film">
            <img src={Film1} alt="Slide 4" />
            <div className="about-film">
                <span className="score">6.2<span className=''>/10</span></span>
                <span className="imdb">IMDB</span>
                <span className="name">The Instigators 2024</span>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/" className="film">
            <img src={Film2} alt="Slide 5" />
            <div className="about-film">
                <span className="score">6.6<span className=''>/10</span></span>
                <span className="imdb">IMDB</span>
                <span className="name">Fly Me to the Moon 2024</span>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/" className="film">
            <img src={Film3} alt="Slide 5" />
            <div className="about-film">
                <span className="score">6.6<span className=''>/10</span></span>
                <span className="imdb">IMDB</span>
                <span className="name">Twisters 2024</span>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/" className="film">
            <img src={Film4} alt="Slide 5" />
            <div className="about-film">
                <span className="score">6.7<span className=''>/10</span></span>
                <span className="imdb">IMDB</span>
                <span className="name">Kinds of Kindness 2024</span>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/" className="film">
            <img src={Film5} alt="Slide 5" />
            <div className="about-film">
                <span className="score">6.9<span className=''>/10</span></span>
                <span className="imdb">IMDB</span>
                <span className="name">Blink Twice 2024</span>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/" className="film">
            <img src={Film6} alt="Slide 5" />
            <div className="about-film">
                <span className="score">6.8<span className=''>/10</span></span>
                <span className="imdb">IMDB</span>
                <span className="name">Longlegs 2024</span>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
        </div>
      );
}
export default Slider;