import Logo from '../img/logo-light.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

const Nav =()=>{
    return(
        <div className="container-fluid mt-3">
            <div className="nav-top">
                <div className="row">
                    <div className="col-xl-10 col-lg-12 mx-auto">
                        <div className="d-md-flex align-items-center justify-content-between text-center">
                            <div className="">
                                <img src={Logo} width={"250px"} alt="" className="" />
                            </div>
                            <div className="d-flex">
                                <a href="/" className="me-2">وارد شوید<FontAwesomeIcon className='ms-2' style={{fontSize:"18px"}} icon={faRightToBracket} /></a>
                                <a href="/" className="">ثبت نام<FontAwesomeIcon className='ms-2' style={{fontSize:"16px"}} icon={faUserPlus} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav-bottom">
                <div className="row">
                    <div className="col-xl-10 col-lg-12 mx-auto"></div>
                </div>
            </div>
        </div>
    )
}
export default Nav