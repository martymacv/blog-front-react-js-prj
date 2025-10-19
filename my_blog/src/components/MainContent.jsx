import './MainContent.css'

export default function MainContent() {
    return (
        <div className="main-content">
            <div className="menu-content-box">
                <Header />
            </div>
            <div className='main-content-box'>
                <VideoShorts />
                <div className='test'>
                <input type="text" placeholder='Напишите что-нибудь'/>
            </div>
            </div>
            
        </div>
    );
}

function Header() {
    return (
        <nav className="main-navigation">
            <ul className="menu-list">
                <li className="menu-font menu-item inline effect">
                    <a className="menu-font menu-link" href="#">Главная</a>
                </li>
                <li className="menu-font menu-item inline effect">
                    <a className="menu-font menu-link" href="#">Обо мне</a>
                </li>
            </ul>
        </nav>
    );
}

function VideoShorts() {
    return (
        <div className="videoshort flexbox">
            <div className='videoshort preview item1 block effect'>
                <p className="videoshort font title">Отдыхаю на природе</p>
                <p className="videoshort font date">21.09.2020</p>
            </div>
            <div className='videoshort preview item2 block effect'>
                <p className="videoshort font title">Заканчиваю сложный проект</p>
                <p className="videoshort font date">15.09.2020</p>
            </div>
            <div className='videoshort preview item3 block effect'>
                <p className="videoshort font title">Отдыхаю на природе</p>
                <p className="videoshort font date">21.09.2020</p>
            </div>
            <div className='videoshort preview item4 block effect'>
                <p className="videoshort font title">Отдыхаю на природе</p>
                <p className="videoshort font date">21.09.2020</p>
            </div>
        </div>
    );
}