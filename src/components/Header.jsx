import { NavLink } from 'react-router-dom';
import './Header.css';

const HeaderUp = () => {
    return (
        <div className='header__container'>
            <nav>
                <div className='header__nav'>
                    <div className='header__nav--home'>
                        <NavLink to='/'>Home</NavLink>
                    </div>
                    <div className='header__nav--about'>
                        <NavLink to='/about'>About</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default HeaderUp;
