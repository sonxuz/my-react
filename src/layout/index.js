
import Heder from "./Header";
import Saibar from "./Saibar";
import style from './layou.module.scss';
import classNames from "classnames/bind";
 
const cs = classNames.bind(style);


function Layout({children}) {
    return <div className={cs('waper')}>
        <Heder />
        <div className={cs('container')}>
            <Saibar />
            <div className={cs('content')}>{children}</div>

        </div>
    </div>
}

export default Layout;