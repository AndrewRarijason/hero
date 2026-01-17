import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";

export default function Hero() {
    return(
    <section className="min-h-screen bg-[#1c1c1c] flex pt-10 justify-center py-10">
        <div className="w-full max-w-5xl text-center px-2 sm:px-4">
            {/* Bulle */}
            <div className="mx-auto w-full max-w-full px-1
            sm:max-w-[500px]
            md:max-w-[580px]
            lg:max-w-[620px]
            xl:max-w-[740px]">
                <div className="flex bg-white rounded-[32px] items-center shadow-[0_0_18px_#71ddae80] justify-center gap-4
                sm:flex-row sm:rounded-[50px] sm:gap-3 p-3 sm:p-4 sm:px-2">
                    <Image
                        src="/2_Logo_Bulle.png"
                        alt="Logo bulle"
                        width={48}
                        height={48}
                        className="w-10 sm:w-10 md:w-12"
                        priority
                    />
                    <h1 className="
                        text-black
                        text-[14px] xs:text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[26px]
                        font-[800] sm:font-extrabold
                        leading-tight
                        ">
                        CRÉER UN SITE WEB <span className="font-black underline sm:decoration-[3px] underline-offset-4">VRAIMENT</span> UNIQUE
                    </h1>
                </div>
            </div>

            {/* Headline */}
            <div className="pt-8 mx-auto w-full max-w-full sm:pt-10 sm:max-w-[800px]">
                <h1 className="text-[30px] font-[600] leading-[1.1]
                xs:text-[36px]
                sm:text-[34px]
                md:text-[46px]
                lg:text-[56px]">
                    Votre <span className="text-[#71ddae]">site</span> doit&nbsp;
                    <span className="text-[#71ddae]">donner envie</span> de&nbsp;
                    <span className="text-[#71ddae]">rester</span>,
                    pas de{" "}
                    <span className="text-[#71ddae] relative inline-block">
                        revenir
                        <span className="absolute left-0 right-0 top-[45%] h-[3px] bg-[#1c1c1c] sm:h-[4px]" />
                    </span>
                    <span className="text-[#71ddae] relative inline-block">
                        &nbsp;en <span className="text-[#71ddae]"> arrière
                        <span className="absolute left-0 right-0 top-[45%] h-[3px] bg-[#1c1c1c] sm:h-[4px]" /></span>    
                    </span>.
                </h1>
            </div>

            {/* Subheadline */}
            <div>
                <h2 className="mt-6 text-gray-300 max-w-full mx-auto text-[14px] font-bold
                sm:max-w-2xl sm:text-base
                xs:text-sm
                md:text-[20px]">
                    <span className="block sm:inline">Design moderne</span>
                    <span className="hidden sm:inline">&nbsp;, </span>
                    <span className="block sm:inline">SEO solide, Suivi complet :</span>
                    <span>
                        <br className="hidden sm:block"/>on construit un site
                    qui retient vos visiteurs et vous apporte des résultats.
                    </span>
                </h2>
            </div>

            {/* Boutons */}
            <div className="mt-6 flex flex-col gap-4 p-2 justify-center
            sm:flex-row items-center sm:p-5 ">
                <div className="relative flex flex-col items-center">
                    <Link href="#" passHref>
                        <button className="flex bg-gradient-to-r from-[#71ddaf] to-[#2a9d7a] text-[#1c1c1c] items-center justify-center
                        rounded-xl gap-3 w-64 font-extrabold transition-transform duration-200 hover:scale-105 cursor-pointer
                        md:w-62 h-12 md:h-16 md:gap-4 text-[18px] md:text-[22px] ">
                            <FaCalendarAlt />Prendre RDV
                        </button>
                    </Link>
                    <Image
                        src="/3_Un_Ptit_Click.png"
                        alt="Un ptit click"
                        width={88}
                        height={88}
                        className="hidden w-22 absolute -left-8 top-8
                    sm:block
                    md:-left-12 md:top-12"
                    />
                </div>
                <Link href="#" passHref>
                    <button className="flex bg-transparent border border-[#71ddae] text-[#71ddae] w-64 h-12
                    items-center justify-center rounded-xl gap-3 font-extrabold cursor-pointer
                    md:w-78 md:h-16 md:gap-2 text-[15px]
                    sm:text-[17px] ">
                        Découvrir nos projets <FaArrowDownLong />
                    </button>
                </Link>
            </div>
        </div>
    </section>
    )
}