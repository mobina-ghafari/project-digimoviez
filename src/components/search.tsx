import { useState } from 'react';
import Slider from 'react-slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

//مقدار اولیه استیت 
const MIN =1888;
const MAX =2024;
const minScore = 1;
const maxScore = 10;

const Search =()=>{
    const [values , setValues] = useState([MIN , MAX]);
    const [scores , setScores] = useState([minScore , maxScore]);
    return(
        <div dir="rtl" className="container-fluid mt-5">
            <div className="row">
                <div className="col-xl-10 col-lg-12 mx-auto">
                    <div className="d-flex search-box">
                    <div className="search-icon">
                        <FontAwesomeIcon className='text-white' style={{width:"50px" , height:"50px"}} icon={faSearch}/>
                        <div className="d-flex flex-column mt-5">
                            <span style={{color:"white"}}>جستجو</span>
                            <span className='mt-3' style={{color:"#eb8307"}}>حرفه ای</span>
                        </div>
                    </div>
                    <div className="container-fluid py-4">
                    <div className="row mx-0 px-0 ">
                        <div className="col-xl-9 col-md-12">
                            <div className="row">
                            <div className="col-xl-3 col-md-4 " >
                            <div className="search-type mt-4">
                                <span style={{fontSize:"14px"}} className="text-white ms-3">نوع</span>
                                <div className="search-type-input">
                                <input type="radio" name="gender" id="film" />
                                <label htmlFor="film">فیلم</label>
                                <input type="radio" name="gender" id="serial" />
                                <label htmlFor="serial">سریال</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4">
                            <div className="search-director mt-4">
                                <span style={{fontSize:"14px"}} className="text-white ms-3">کارگردان</span>
                                <input type="text" placeholder="Christoper Nolan" />
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4">
                            <div className="search-actor mt-4">
                                <span style={{fontSize:"14px"}} className="text-white ms-3">بازیگران</span>
                                <input type="text" placeholder="Leonardo Dicaprio" />
                            </div>
                        </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-12">
                        <div className="search-year mt-4">
                                <div style={{fontSize:"14px"}} className="d-flex justify-content-between">
                                    <span className="text-white">سال ساخت</span>
                                    <span style={{color:"#eb8307"}} className={"values"}>{values[1]} - {values[0]}</span>
                                </div>
                                <Slider  className={"slider"}
                                            onChange={setValues}
                                            value={values}
                                            min={MIN}
                                            max={MAX}/>
                            </div>
                        </div>
                        <div className="col-xl-9 col-md-12">
                            <div className="row">
                                <div className="col-xl-4 col-md-4">
                                    <div className="search-select mt-4">
                                        <span style={{fontSize:"14px"}} className="text-white ms-3">کشور</span>
                                        <select name="" id="">
                                            <option value="">همه</option>
                                            <option value="">آمریکا</option>
                                            <option value="">آلمان</option>
                                            <option value="">ایران</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4">
                                    <div className="search-select mt-4">
                                        <span style={{fontSize:"14px"}} className="text-white ms-3">رده سنی</span>
                                        <select name="" id="">
                                            <option value="">همه</option>
                                            <option value="">PG-13</option>
                                            <option value="">TV-PG</option>
                                            <option value="">R</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4">
                                    <div className="search-select mt-4">
                                        <span style={{fontSize:"14px"}} className="text-white ms-3">ژانر</span>
                                        <select name="" id="">
                                            <option value="">همه</option>
                                            <option value="">درام</option>
                                            <option value="">هیجان انگیز</option>
                                            <option value="">کمدی</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-12">
                        <div className="search-score mt-4">
                                <div style={{fontSize:"14px"}} className="d-flex justify-content-between">
                                    <span className="text-white">امتیاز</span>
                                    <span style={{color:"#eb8307"}} className={"values"}>{scores[1]} - {scores[0]}</span>
                                </div>
                                <Slider  className={"slider"}
                                            onChange={setScores}
                                            value={scores}
                                            min={minScore}
                                            max={maxScore}/>
                            </div>
                        </div>
                        <div className="col-xl-9 col-md-12">
                            <div className="row">
                                <div className="col-xl-4 col-md-4">
                                    <div className="search-select mt-4">
                                        <span style={{fontSize:"14px"}} className="text-white ms-3">کیفیت</span>
                                        <select name="" id="">
                                            <option value="">همه</option>
                                            <option value="">1080p BluRay SoftSub</option>
                                            <option value="">1080p BlueRay</option>
                                            <option value="">1080 WEB-DL</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4">
                                    <div className="search-select mt-4">
                                        <span style={{fontSize:"14px"}} className="text-white ms-3">شبکه</span>
                                        <select name="" id="">
                                            <option value="">همه</option>
                                            <option value="">AMC</option>
                                            <option value="">ABC</option>
                                            <option value="">BBC</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4">
                                    <div className="search-select mt-4">
                                        <span style={{fontSize:"14px"}} className="text-white ms-3">ترتیب</span>
                                        <select name="" id="">
                                            <option value="">جدیدترین ها</option>
                                            <option value="">بالاترین امتیاز imdb</option>
                                            <option value="">بیش ترین رایimdb</option>
                                            <option value="">بیش ترین بازدید</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-md-8">
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="search-checkbox mt-4">
                                        <span style={{fontSize:"13px"}} className="text-white ms-2">دوبله فارسی</span>
                                        <div className="d-flex align-items-center">
                                            <input type="checkbox" id='double' className="" />
                                            <label htmlFor="double" className=""></label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="search-checkbox mt-4">
                                        <span style={{fontSize:"13px"}} className="text-white ms-2">سانسور شده</span>
                                        <div className="d-flex align-items-center">
                                            <input type="checkbox" id='censorship' className="" />
                                            <label htmlFor="censorship" className=""></label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="search-checkbox mt-4">
                                        <span style={{fontSize:"13px"}} className="text-white ms-2">زیرنویس شده</span>
                                        <div className="d-flex align-items-center">
                                            <input type="checkbox" id='subtitle' className="" />
                                            <label htmlFor="subtitle" className=""></label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="search-checkbox mt-4">
                                        <span style={{fontSize:"13px"}} className="text-white ms-2">پخش آنلاین</span>
                                        <div className="d-flex align-items-center">
                                            <input type="checkbox" id='online' className="" />
                                            <label htmlFor="online" className=""></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4">
                            <div className="search-btn mt-4">
                                <button className="">
                                    <span style={{fontSize:"14px"}} className="text-white">جستجو</span>
                                    <FontAwesomeIcon icon={faSearch} style={{color:"#eb8307" , width:"15px", height:"15px"}} />
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Search;