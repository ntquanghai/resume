import ReactDOM from "react-dom/client";
import { Link, Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
    <Outlet/>
    <div className="App flex w-screen h-screen bg-gray-800">
      <div className = "m-auto flex flex-col w-1/2">
        <div className = "text-7xl text-white font-extrabold mb-4">Hai Nguyen</div>
        <div className = "text-2xl text-white font-thin">Web Developer</div>
        {/* <div className = "flex flex-col w-1/2 mx-auto">
            <div className = "flex justify-between">
              <div className = "py-8 flex"><IoMdCall className = "w-8 h-8 mr-2"></IoMdCall><div className = "">(+84)977005564</div> </div>
              <div className = "py-8 flex justify-between"><SiGmail className = "w-8 h-8 mr-2"></SiGmail> ntqhai2002@gmail.com</div>
            </div>
            <div className = "flex justify-between">
            <a className = "py-8 flex justify-between"><SiFacebook className = "w-8 h-8 mr-2"></SiFacebook> Facebook</a>
            <div className = "py-8 flex justify-between"><SiGithub className = "w-8 h-8 mr-2"></SiGithub> GitHub</div>
            </div>
        </div> */}

        <div className='mx-auto mt-12 w-1/2'>
        <div className = "flex justify-around">
            <Link to="profile/about-me">
            <div className = "text-xl text-white font-semibold hover:text-gray-300 cursor-pointer">
                View my profile
            </div>
            </Link>
            <div className = "text-xl text-white font-semibold hover:text-gray-300 cursor-pointer">
                  Download my CV
            </div>        
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default HomePage
