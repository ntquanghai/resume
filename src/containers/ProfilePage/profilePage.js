import { Outlet } from "react-router-dom"
import Header from "../../layouts/Header/header"
import Footer from "../../layouts/Footer/footer"

const ProfilePage = () => {
    return(
        <div className="flex flex-col w-full h-full bg-gray-800" style ={{minHeight:"100vh"}}>
           <Header></Header> 
           <Outlet/>
           <Footer></Footer>
        </div>
    )
}

export default ProfilePage

