import { SiJavascript, SiHtml5, SiCss3, SiReact, SiGithub, SiPython, SiMysql } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const SkillPage = () => {
    return(
        <div className = "mt-40 text-white w-3/4 mx-auto">
            <div className ="flex-grow flex flex-col">
                <div className = "text-4xl font-extrabold text-center uppercase">SKILLS</div>
                <div className = "mt-8 text-2xl mx-auto">
                    <div className = "flex mb-8">
                        <SiPython className = "w-8 h-8 "></SiPython>
                        <div className = "font-bold ml-4"> Python:</div>
                        <div className = "ml-2 font-thin">Basic understanding of Java's syntax and Data-related libraries (Python (pandas, NumPy, Scikit-learn, Matplotlib, Seaborn))</div>
                    </div>
                    <div className = "flex mb-8">
                        <FaJava className = "w-8 h-8 "></FaJava>
                        <div className = "font-bold ml-4"> Java:</div>
                        <div className = "ml-2 font-thin">Basic understanding of Java's syntax and Object Oriented Programming</div>
                    </div>
                    <div className = "flex mb-8">
                        <SiMysql className = "w-8 h-8 "></SiMysql>
                        <div className = "font-bold ml-4"> MySQL:</div>
                        <div className = "ml-2 font-thin">Basic understanding of MySQL</div>
                    </div>
                    <div className = "flex mb-8">
                        <SiHtml5 className = "w-8 h-8 text-orange-400 "></SiHtml5>
                        <div className = "font-bold ml-4"> HTML5:</div>
                        <div className = "ml-2 font-thin">Basic understanding of HTML5's tags</div>
                    </div>
                    <div className = "flex mb-8">
                        <SiCss3 className = "w-8 h-8 text-blue-400 "></SiCss3>
                        <div className = "font-bold ml-4"> CSS3:</div>
                        <div className = "ml-2 font-thin">Basic understanding of the language, familiar with CSS frameworks (Tailwindcss) </div>
                    </div>
                    <div className = "flex mb-8">
                            <SiReact className = "w-8 h-8 text-cyan-400 "></SiReact>
                            <div className = "font-bold ml-4"> ReactJS:</div>
                            <div className = "ml-2 font-thin">Basic understanding of rendering, functional components, props, states, lifecycle, </div>
                    </div>
                    <div className = "flex my-8">
                            <SiJavascript className = "shrink-0 w-8 h-8 text-yellow-400 "></SiJavascript>
                            <div className = "ml-4 font-thin"><b className = "font-bold">Javascript: </b>Basic understanding of the language's syntax, data types, methods, arrays, objects, promises, arrow functions, DOM, ...</div>
                    </div>
                    <div className = "flex my-8">
                            <SiGithub className = "w-8 h-8"></SiGithub>
                            <div className = "font-bold ml-4"> GitHub:</div>
                            <div className = "ml-2 font-thin">Basic understanding on repositories, merging, commiting, pushing, pulling, ...</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillPage

