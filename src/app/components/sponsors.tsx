import Image from "next/image"
import Apple from "../../../public/assets/Apple.png"
import Microsoft from "../../../public/assets/Microsoft.png"
import Google from "../../../public/assets/Google.png"
import Slacks from "../../../public/assets/Slack_Technologies_Logo 1.png"

export default function Sponsors () {
    return (
        <div className="w-[1920px] h-[538px] flex flex-col justify-evenly items-center bg-white">
            <div className="w-[1482px] h-[87px]">
                <h1 className="text-center text-7xl font-bold leading-[87.14px] tracking-[-2%] text-[#212529]">Our Sponsors</h1>
                

            </div>
            <div className="w-[1482px] h-[71px] flex justify-between">
            <Image src={Apple} alt=""/>
                <Image src={Microsoft} alt=""/>
                <Image src={Slacks} alt=""/>
                <Image src={Google} alt=""/>
            </div>
        </div>
    )
}