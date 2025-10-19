import './Sidebar.css'

export default function SidebarBox() {
    return (
        <div className="sidebar-box">
            <Sidebar/>
            <div className="empty"></div>
        </div>
    );
}

function Sidebar() {
    return (
        <div className="sidebar">
            <img className="wallpaper" src="src/assets/images/wallpaper.png" alt="wallpaper" />
            <img className="avatar" src="src/assets/images/avatar.png" alt="avatar" />
            <div className="user-info">
                <p className="username">Ролан Закиров</p>
                <p className="profession">Front-end разработчик</p>
            </div>
            <div role="content-box" className="social">
                <img className="instagram" src="src/assets/images/instagram.svg" alt="instagramm-link" />
                <img className="vk" src="src/assets/images/vk.svg" alt="vk-link" />
            </div>
            <hr className="hline1"/>
            <p className="about-self">
                Front-end разработчик. Практик верстки сайтов.Созданием сайтов занимаюсь с 2012 года. Работал в нескольких ИТ компаниях и наработал более 10 000 часов в создании сайтов различной сложности.
            </p>
            <hr className="hline2"/>
            <section className="sidebar-buttons">
                <button className="portfolio">Мои работы</button>
                <button className="send-me">Написать мне</button>
            </section>
        </div>
    );
}
