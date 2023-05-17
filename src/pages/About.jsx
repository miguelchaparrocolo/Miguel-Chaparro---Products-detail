import './About.css';
import Profile from '../../public/profile';

function About (){
    return(
        <>
            <div className='about__title'><h1>About Me!</h1></div>
            <div className='about__container'>
                <div className='about__container--profile'>
                    <img src = {Profile} className='about__container--img' alt='profile_photo'></img>
                    <div className='about__container--text'>
                        <div className='about__container--text__name'><h3>Miguel Chaparro</h3></div>
                        <div className='about__container--text__description'><p>Soy un Junior Developer y estudiante FullStack en Make It Real</p></div>
                    </div>
                </div>
                <div className='about__container--learning'>
                    <div className='about__container--learning__title'><h6>Learning</h6></div>
                    <div className='about__conatiner--learning__list'><ul>
                        <li>Como usar e importar las api a mis proyectos</li>
                        <li>React y su multifuncionalidad y eficacia en proyectos</li>
                        <li>Git remoto y local enfocado en proyectos grupales</li>
                    </ul></div>  
                </div>
                <div className='about__container--contact'>
                    <div className='about__container--contact__github'><p>
                        Github - <a href='https://github.com/miguelchaparrocolo'>miguelchaparrocolo</a>  
                    </p></div>
                    <div className='about__container--contact__mail'><p>miguelangelchaparrotirado@gmail.com</p></div>
                </div>
            </div>
        </>
    );
}

export default About;