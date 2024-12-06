import styles from './saibar.module.scss'
import classNames from 'classnames/bind';

const cs = classNames.bind(styles)

function Saibar() {
    return <header className={cs('waper')}>
        <div className={cs('content')}>
            <h1>day là saibar</h1>
        </div>
    </header>
}

export default Saibar;