import styles from './header.module.scss'
import classNames from 'classnames/bind';

const cs = classNames.bind(styles);

function Heder() {
    return <header className={cs('waper')}>
        <div className={cs('content')}>

        </div>
    </header>
}

export default Heder;