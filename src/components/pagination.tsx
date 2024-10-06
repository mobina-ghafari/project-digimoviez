import {  faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Page =()=>{
    return(
        <div dir="ltr" className="pagin">
            <ul className="">
                <li className="first">
                    <a href="/" className="">۱</a>
                </li>
                <li className="li-hover">
                    <a href="/" className="">۲</a>
                </li>
                <li className="li-hover">
                    <a href="/" className="">۳</a>
                </li>
                <li className="li-hover">
                    <a href="/" className="">۴</a>
                </li>
                <li className="li-hover">
                    <a href="/" className="">۵</a>
                </li>
                <li className="li-hover">
                    <a href="/" className="">۶</a>
                </li>
                <li className="li-hover">
                    <a href="/" className="">۷</a>
                </li>
                <li className="li-hover">
                    <span>...</span>
                </li>
                <li className="li-hover">
                    <a href="/" className="">۸۳۱</a>
                </li>
                <li className="li-hover">
                    <a href="/" className="">۸۳۲</a>
                </li>
                <li className="li-hover">
                    <a href="/" className="">۸۳۳</a>
                </li>
                <li className="li-hover">
                    <a href="/" className="">۸۳۴</a>
                </li>
                <li className="li-hover">
                    <a href="/" className="">۸۳۵</a>
                </li>
                <li className="li-hover">
                    <a href="/" className="">۸۳۶</a>
                </li>
                <li className="li-hover">
                    <a href="/" className="">۸۳۷</a>
                </li>
                <li className="bottom">
                    <a href="/" className=""><FontAwesomeIcon icon={faChevronRight}/></a>
                </li>
            </ul>
        </div>
    )
}
export default Page;