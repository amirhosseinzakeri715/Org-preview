import Image from "next/image"
import { FaXTwitter } from "react-icons/fa6"
import { MdArrowOutward } from "react-icons/md"
import { TbWorld, TbPhone } from "react-icons/tb"
import { PiShoppingBagOpen } from "react-icons/pi"
import accredited from "@/public/images/accredited.png"
import { ScrollToTopButton } from "./ScrollToTopButton"
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa"

export const Footer: React.FC= () =>{
    const list= [
        {
            title: "PARTNERS & INVESTORS",
            content: [
                "Investors",
                "Partner with Us",
                "Suppliers"
            ]
        },
        {
            title: "OUR COMPANY",
            content: [
                "Leadership",
                "Structure & Governance",
                "Policies & Practices",
                "Archive",
                "Awards & Recognition"
            ]
        },
        {
            title: "HELP",
            content: [
                "Sitemap"
            ]
        },
        {
            title: "LEGAL",
            content: [
                "Privacy",
                "Consumer Health Data Privacy Policy",
                "Terms and Conditions",
                "Your Privacy Choices",
                "Do Not Sell or Share My Personal Information/ Opt-Out of Targeted Advertising",
                "NOTICE: We may sell your sensitive personal data."
            ]
        }
    ]

    return(
        <footer className="bg-blue-800 relative z-30 clip-ellipse text-white px-4 lg:px-16 xl:px-32 pb-4 pt-12 space-y-12">
            <div className="flex justify-center">
                <ScrollToTopButton/>
            </div>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-5 md:gap-y-3 text-sm font-medium">
                <li className="space-y-2">
                    <span className="flex gap-x-2 items-center cursor-pointer group">
                        <TbPhone className="size-5"/>
                        <span className="group-hover:underline">Contact</span>
                    </span>
                    <span className="flex gap-x-1 items-center cursor-pointer group">
                        <PiShoppingBagOpen className="size-5 mr-1"/>
                        <span className="group-hover:underline">Careers</span>
                        <MdArrowOutward className="size-5"/>
                    </span>
                </li>
                {list.map((items) => (
                    <li key={items.title} className="space-y-2">
                        <h3 className="text-lg">{items.title}</h3>
                        {items.content.map((item) =>(
                            <h5
                                key={item}
                                className="cursor-pointer hover:underline"
                            >
                                {item}
                            </h5>
                        ))}
                    </li>
                ))}
            </ul>
            <span className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-y-3">
                <button className="px-5 text-blue-800 bg-white flex items-center font-semibold rounded-2xl h-9 cursor-pointer">
                    <TbWorld className="text-2xl"/>
                    USA
                </button>
                <p className="text-sm">© 2025 Procter & Gamble</p>
                <span className="flex items-center gap-x-7 text-2xl">
                    <FaFacebook className="cursor-pointer"/>
                    <span className="bg-white text-blue-800 text-lg rounded-full p-0.5 cursor-pointer">
                        <FaXTwitter/>
                    </span>
                    <FaYoutube className="cursor-pointer"/>
                    <FaInstagram className="cursor-pointer"/>
                    <FaLinkedin className="cursor-pointer"/>
                </span>
            </span>
            <div className="flex justify-center -mt-5">
                <Image
                    width={82}
                    height={43}
                    alt="Accredited"
                    src={accredited}
                />
            </div>
        </footer>
    )
}