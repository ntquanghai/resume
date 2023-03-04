import Project from "../../components/project/project"
import { useState, useEffect } from "react"
import axios from "axios";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';



const PersonalProjectsPage = () => {    

    const [projectInfo, setProjectInfo] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const getData = async () => {
            setProjectInfo(
                [
                    {
                        name: "QuizApp",
                        desc: "A quiz-based website, where users can solve puzzles from a variety of topics.",
                        tech: "HTML, TailwindCSS, Javascript, Firebase",
                        feats: ["Users with the highest scores and the best solving time would be placed accordingly on the leaderboard.","Designated codes to promote users to editors, granting the ability to edit questions."],
                        src: "/quiz.png",
                        demoLink: "https://quizzyofficial.netlify.app/",
                        repo: "https://github.com/ntquanghai/QuizWeb",
                    },
                    {
                        name: "Sinema",
                        desc: "A movie website, where users can get information about the highest reated, latest, and upcoming movies.",
                        tech: "Javascript, ReactJS, CSS",
                        feats: ["Basic adaptation of a search engine","Draggable movie carousels"],
                        src: "/movie.png",
                        demoLink: "https://earnest-phoenix-7b75dd.netlify.app/",
                        repo: "https://github.com/ntquanghai/movieApp"
                    },
                    {
                        name: "Academyre (Ongoing)",
                        desc: "An online academy, where students can choose a variety of courses, of different topics to enroll and study.",
                        tech: "Javascript, ReactJS, TailwindCSS, MongoDB, MaterialUI",
                        feats: ["Course lessons are provided via videos","Responsive design for mobile phones","Students are able to leave ratings and comments under dedicated page of courses","Basic adaptation of search engine with returned results listed via pagination"],
                        src: "/academy.png",
                        demoLink: "https://storied-salamander-3aa3f9.netlify.app/",
                        repo: "https://github.com/ntquanghai/academyre",

                    }
                ]
            )
            setIsLoading(true)
        
    }

    useEffect(() => {
        getData();
    },[])

    return(
        <div>
            <div className = "mt-40 px-80 text-white h-full bg-gray-800" style ={{maxHeight:"100%"}}>
                <div className ="flex-grow w-full mb-32">
                    <div className = "text-4xl font-extrabold text-center uppercase">Personal projects</div>
                    {projectInfo &&
                    projectInfo.map((info, index) => {
                        return(
                            <Project
                                key = {index}
                                data = {info}
                                isLoading = {isLoading}
                            ></Project>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default PersonalProjectsPage

