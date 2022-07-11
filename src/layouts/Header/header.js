import Button from "../../components/button/button"
import { Link, Outlet } from "react-router-dom";

const Header = () => {

    const toSubDomain = (input) => {
        const returnedInput = input.toLowerCase().replace(" ","-")
        return returnedInput
    }

    const infoList = ["About me","Education","Skills","Personal projects","Personal experience"]
    return(
            <div className="w-screen px-60 fixed top-0 py-4 justify-between flex bg-gray-800">
                <Link to = "/">
                    <div className = "font-extrabold text-white text-4xl">Hai Nguyen</div>
                </Link>
                <div className = "w-1/2 my-auto">
                    <div className = "flex justify-around">
                        {infoList.map((text, index) => {
                            return(
                                <Link key = {index} to = {toSubDomain(text)}>
                                    <Button
                                        text = {text}
                                    ></Button>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
    )
}

export default Header

