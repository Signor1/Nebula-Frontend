import { Button } from "../atom/Button"
import { Text } from "../atom/Text"
import tab1 from "../../assets/tab/about_tab01.png";
import tab2 from "../../assets/tab/about_tab02.png";
import tab3 from "../../assets/tab/about_tab03.png";
import tab4 from "../../assets/tab/about_tab04.png";
import tab5 from "../../assets/tab/about_tab05.png";
import tab6 from "../../assets/tab/about_tab06.png";
import { useState } from "react";

type tabButtonObj = {
    name: string,
    img: string
}

const tabButton: tabButtonObj[] = [
    {
        name: "tabOne",
        img: tab1,
    }, {
        name: "tabTwo",
        img: tab2
    },
    {
        name: "tabThree",
        img: tab3
    },
    {
        name: "tabFour",
        img: tab4
    },
    {
        name: "tabFive",
        img: tab5
    },
    {
        name: "tabSix",
        img: tab6
    }
]

const TopGamers = () => {
    const [activeTab, setActiveTab] = useState<string>(tabButton[0].name)

    const handleFilterClick = (filter: string) => {
        setActiveTab(filter)
    }


    return (
        <section className="w-full bg-cover bg-area bg-[top-center] bg-no-repeat">
            <main className="py-[130px]">
                <div className="container">
                    <div className="flex flex-wrap mx-[-15px]  justify-center ">
                        <div
                            className="w-6/12 basis-6/12 xl:w-6/12 xl:basis-6/12 lg:w-7/12 lg:basis-7/12 md:w-10/12 md:basis-10/12 sm:w-full sm:basis-full  xsm:w-full xsm:basis-full relative px-[15px]">
                            <div
                                className="text-center mb-[60px] relative after:content-[''] after:block after:bg-myGreen after:w-[65px] after:h-[5px] after:mt-5 after:mb-0 after:mx-auto">
                                <Text as="span"
                                    className="block uppercase text-[14px] tracking-[2px] font-semibold text-[#45f882] leading-none mt-0 mb-[7px] mx-0  sm:mt-0 sm:mb-2.5 sm:mx-0 xsm:mt-0 xsm:mb-2.5 xsm:mx-0">know
                                    about us</Text>
                                <Text as="h3" className="title text-[45px] font-extrabold tracking-[1px] m-0
                            sm:text-[35px] sm:leading-[1.1]
                            xsm:text-[35px] uppercase xsm:leading-[1.1]
                            ">top rated steamers</Text>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap mx-[-15px]  justify-center ">
                        <div
                            className="w-10/12 basis-10/12 xl:w-10/12 xl:basis-10/12 lg:w-full lg:basis-full md:w-full md:basis-full sm:w-full sm:basis-full xsm:w-full xsm:basis-full relative px-[15px]">
                            <div className="flex items-center flex-wrap justify-center gap-[15px_35px] mt-0 mb-10 mx-0">
                                <Button type="button" className="tg-btn-2">Buy Hero</Button>
                                <Button type="button" className="tg-btn-2 -secondary">Buy Hero</Button>
                            </div>

                            {/* Tab */}
                            <ul className="flex flex-wrap justify-center relative gap-[15px_35px] px-0 py-[22px] before:content-[''] before:absolute before:w-full before:h-px before:left-0 before:top-0 after:content-[''] after:absolute after:w-full after:h-px after:left-0 after:top-auto after:bottom-0 before:bg-gradient-to-r before:from-transparent before:via-[#45f882] before:to-transparent after:bg-gradient-to-r after:from-transparent after:via-[#45f882] after:to-transparent
                            md:gap-[15px_30px]
                            sm:gap-[20px_25px]
                            xsm:gap-[20px_25px]
                            ">
                                {
                                    tabButton.map((tab, index) => (
                                        <li className="relative z-[1]" key={index}>
                                            <Button
                                                onClick={() => handleFilterClick(tab.name)}
                                                className={`relative border transition-all duration-[0.3s] ease-[ease-out] delay-[0s] rounded-[50%] border-solid border-transparent  bg-gradient-to-t from-[#10181f] via-[#e3b17d] to-[#10181f]  hover:bg-gradient-to-t hover:from-[#10181f] hover:via-[#45f882] hover:to-[#10181f] hover:border-transparent group ${activeTab === tab.name ? "via-[#45f882]" : ""}`}
                                            ><Text as="span"
                                                className={`absolute w-[85px] h-[84px] border -translate-x-2/4 -translate-y-2/4 transition-all duration-[0.3s] ease-[ease-out] delay-[0s] z-[-1] rounded-[50%] border-solid border-transparent left-2/4 top-2/4 before:content-[''] before:absolute before:w-full before:h-full before:bg-[#0c1319] before:rounded-[50%] before:left-0 before:top-0 bg-gradient-to-t from-[#10181f] via-[#e3b17d] to-[#10181f]  group-hover:bg-gradient-to-t group-hover:from-[#10181f] group-hover:via-[#45f882] group-hover:to-[#10181f] ${activeTab === tab.name ? "via-[#45f882]" : ""}`}></Text>
                                                <img
                                                    className="bg-[#0c1319] rounded-[50%]"
                                                    src={tab.img} alt={tab.name} /></Button>
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default TopGamers