import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <>
            <div className='relative flex flex-col items-center justify-start w-full h-[230px] mb-3'>
                <img className='w-full' src="../src/assets/images/wallpaper.png" alt="wallpaper" />
                <div className='absolute rounded-full border-2 border-white top-[130px]'>
                    <img className='w-[98px]' src="../src/assets/images/avatars/avatar.png" alt="avatar" />
                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-white text-[18px] font-[400] font-roboto'>Ролан Закиров</h1>
                <p className='text-[#dededeff] text-[14px] font-[300] font-roboto'>Front-end разработчик</p>
            </div>
            <div className='flex flex-row gap-4 items-center justify-center pb-3'>
                <img src="../src/assets/images/instagram.svg" alt="instagram" />
                <img src="../src/assets/images/vk.svg" alt="vk" />
            </div>
            <hr className='border-1 w-[260px] border-[#1c1c1cff]' />
            <p className='text-white text-[12px] font-[400] leading-[18px] tracking-[0%] text-center py-3 px-5 font-roboto'>Front-end разработчик. Практик верстки сайтов. Созданием сайтов занимаюсь с 2012 года. Работал в нескольких ИТ компаниях и наработал более 10 000 часов в создании сайтов различной сложности.</p>
            <hr className='border-1 w-[260px] border-[#1c1c1cff]' />
            <div className='flex flex-row gap-5 items-center justify-center p-4'>
                <Link to="/profile/1/portfolio">
                    <button className='text-white font-roboto text-button bg-[#ed3024ff] rounded-full w-[120px] h-[40px]' type='button'>Мои работы</button>
                </Link>
                <button className='text-white font-roboto text-button bg-[#3137c9ff] rounded-full w-[120px] h-[40px]' type='button'>Написать мне</button>
            </div>
        </>
    );
}
