const PersonalExpPage = () => {
    return(
        <div className = "mt-40 text-white w-1/2 mx-auto " style ={{maxHeight:"100%"}}>
            <div className ="flex-grow flex flex-col">
                <div className = "text-4xl font-extrabold text-center uppercase">Personal experiences</div>
                <div className = "mt-8 text-2xl mx-auto">
                    <ol className = "list-decimal font-thin">
                        <li>
                            <p className = "text-2xl font-semibold">ENGLISH FOR EVERYONE (October 2017 – September 2019)</p>
                            <p className = "text-xl"><b>Description: </b>Club assigned with English-related affairs of Nguyen Tat Thanh Highschool</p>
                            <p className = "text-xl"><b>Position: </b>Member/Head of Content Department</p>
                            <ul className = "mt-2 list-disc ml-6 text-lg font-thin">
                                <li>Design club timelines and event action plans</li>
                                <li>Supervise and train members of the department</li>
                                <li>Assign, review and summarize members' work</li>
                                <li>Serve as member of the Management Board</li>
                                <li>Serve as a translator, and assistant with matters regarding international students</li>
                            </ul>
                        </li>
                        <li className = "mt-8">
                        <p className = "text-2xl font-semibold">NGUYEN TAT THANH DEBATING TEAM (February 2018 – February 2019)</p>
                            <p className = "text-xl"><b>Description: </b>Team of students of Nguyen Tat Thanh Highschool tasked with attending debating competitions</p>
                            <p className = "text-xl"><b>Position: </b>Member/Mentor</p>
                            <ul className = "mt-2 list-disc ml-6 text-lg font-thin">
                                <li>Attend the annual Hanoi Academy Speak-Out competition.</li>
                                <li>Attend weekly debate practice sessions.</li>
                                <li>Research and prepare different social topics.</li>
                                <li>Practice and train members' debating skills (Body language, public speaking, facial expressions, timemanagement, etc...)</li>
                            </ul>
                        </li>
                        <li className = "mt-8">
                            <p className = "text-2xl font-semibold">Nguyen Tat Thanh Scientific Research Team (Project “Improving Easily Digestible Minerals in Soybean Milk by Removing Phytate and Trypsin Inhibitors”) (February 2018 – April 2018)</p>
                            <p className = "text-xl"><b>Description: </b>Team of students of Nguyen Tat Thanh Highschool tasked with researching scientific projects</p>
                            <p className = "text-xl"><b>Position: </b>Translator and presenter</p>
                            <ul className = "list-disc ml-6 text-lg">
                                <li>Attend the “Elementz International Science Research Conference and Exhibition” organized by the Anderson Serangoon Junior College (ASRJC) in Singapore.</li>
                                <li>Conduct researches, experiments and examine the results with teammates to prepare for the project.</li>
                                <li>Review and summarize the gathered information to finalize the project.</li>
                                <li>Give presentations on the project summary at competitions.</li>
                            </ul>
                        </li>
                        <li className = "mt-8">
                            <p className = "text-2xl font-semibold">UNISMUN 2019 (January 2019 – March 2019)</p>
                            <p className = "text-xl"><b>Description: </b>A simulation of fourms of the United Nations organized by United Nations International School in Hanoi</p>
                            <p className = "text-xl"><b>Position: </b>Delegate of Republic of India – Human Rights Council (Nguyen Tat Thanh Delegation)</p>
                            <ul className = "list-disc ml-6 text-lg mb-40">
                                <li>Attend the UNIS Model United Nations organized by United Nations International School</li>
                                <li>Conduct research on the country’s background and propose possible solutions for world problems based on the provided topics.</li>
                                <li>Attend the conference and discuss, debate and negotiate with other delegates to produce the most comprehensive and effective resolution</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default PersonalExpPage

