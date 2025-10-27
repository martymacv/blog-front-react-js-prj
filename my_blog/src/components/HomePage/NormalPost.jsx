import { Link } from "react-router-dom"

function NormalPost() {
    return (
        <div className="flex flex-col w-full mt-7 rounded-t-md">
            <img className="rounded-t-md"
                src="src/assets/images/Rectangle 5-1.png" alt="" />
            <div className="flex flex-col gap-3 p-6 bg-[#202020ff] rounded-b-md shadow-simple-post">
                <h6 className="font-roboto text-white text-[18px] font-[500]">
                    Как я сходил на FrontEnd Conf 2021</h6>
                <p className="font-roboto text-[#d2d2d2ff] text-[14px] leading-[21px] font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
                </p>
                <div className="flex md:flex-row flex-col gap-3 justify-between">
                    <div className="flex flex-row gap-3 items-center">
                        <span className="font-lato text-[#828282ff] text-[12px] font-[400]">
                            21.06.2020</span>
                        <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                        <Link className="font-lato text-[#828282ff] text-[12px] font-[400]">
                            создание сайтов</Link>
                    </div>
                    <Link to={"/post/1"}
                        className="font-roboto text-[#107effff] text-[14px] font-[400]">
                            читать
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NormalPost
