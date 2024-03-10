import { Link } from "react-router-dom"
import { ImageWrap } from "../atom/ImageWrap"
import Logo from "../../assets/logo/logo.png";
import { NavLinks } from "../../data/NavLinks";
import { FiSearch } from "react-icons/fi";
import { Button } from "../atom/Button";


const Header = () => {

    const handleClick = () => {

    }

    return (
        <header className="w-full bg-navBg flex justify-between items-center py-4 md:px-4 px-3">
            <Link to='/'>
                <ImageWrap className="md:w-[170px] w-[120px]" alt="logo" image={Logo} />
            </Link>

            <ul className="flex items-center gap-8">
                {
                    NavLinks.map(({ name, path }, index) => (
                        <li className="text-gray-100" key={index}>
                            <Link className={`font-barlow font-semibold uppercase relative hover:text-myGreen transition-all duration-300`} to={path}>{name}</Link>
                        </li>
                    ))
                }
            </ul>

            <aside className="flex items-center">
                <Button className="text-gray-100 text-xl font-bold hover:text-myGreen" type="button" onClick={handleClick}>
                    <FiSearch />
                </Button>
                <Button className="relative ml-[25px] pl-[25px] before:content-[''] before:absolute before:-translate-y-2/4 before:w-1.5 before:h-7 before:bg-[#131b22] before:shadow-[inset_0px_3px_7px_0px_rgba(0,0,0,0.61)] before:left-0 before:top-2/4 lg:before:shadow-[inset_0px_3px_7px_0px_#45f882] lg:before:opacity-10
            md:before:shadow-[inset_0px_3px_7px_0px_#45f882] md:before:opacity-10
            sm:before:shadow-[inset_0px_3px_7px_0px_#45f882] sm:before:opacity-10
            xsm:before:shadow-[inset_0px_3px_7px_0px_#45f882] xsm:before:opacity-10
            ">
                    Connect Wallet
                </Button>
            </aside>
        </header>
    )
}

export default Header