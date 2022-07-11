const EducationPage = () => {
    return(
        <div className = "mt-40 text-white w-1/2 mx-auto">
            <div className ="flex-grow flex flex-col">
                <div className = "text-4xl font-extrabold text-center uppercase">Education</div>
                <div className = "mt-8 text-2xl mx-auto">
                    <ol className = "list-decimal font-thin">
                        <li>
                            <p className = "text-2xl font-semibold">Nguyen Tat Thanh High School (August 2017 - June 2020)</p>
                            <ul className = "list-disc ml-6 text-lg">
                                <li><b>GPA:</b> 9.0/10</li>
                                <li>Bronze Medalist for the Nguyen Tat Thanh research team</li>
                            </ul>
                        </li>
                        <li className = "mt-8">
                            <p className = "text-2xl font-semibold">International English Language Testing System (IELTS)</p>
                            <ul className = "list-disc ml-6 text-lg">
                                <li><b>Band score:</b> 8.0/9.0 (Approved: 10/10/2019)</li>
                            </ul>
                        </li>
                        <li className = "mt-8">
                            <p className = "text-2xl font-semibold">SAT</p>
                            <ul className = "list-disc ml-6 text-lg">
                                <li><b>SAT score:</b> 1410/1600 (Approved: Dec. 07, 2019)</li>
                            </ul>
                        </li>
                        <li className = "mt-8">
                            <p className = "text-2xl font-semibold">University of Science and Technology in Hanoi (2020 - Present)</p>
                            <ul className = "list-disc ml-6 text-lg">
                                <li><b>First year GPA:</b> 2.8/4.0</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default EducationPage

