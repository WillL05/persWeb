import '../App.css'
import menuIcon from '../assets/menuIcon.svg';
import picture from '../assets/Will.webp'
import {useState} from "react";

export default function Home() {
    const [open, setOpen] = useState(false);
    const [openT, setOpenT] = useState(false);
    const [openThree, setOpenThree] = useState(false);
    const [clicked,setClicked] = useState(false);

    return(<>

            <title>Will</title>
            <div className="background">
                <header className="PageTop">
                    <div className="Title">
                        <p>Will</p>
                    </div>

                    <div className="button-Group">

                        <a href={"#about"} className="btn1" type={"button"}>0.1 About</a>
                        <a href={"#projects"} className="btn2" type={"button"}>0.2 Projects</a>
                        <a href={"#tutoring"} className="btn3" type={"button"}>0.3 Tutoring</a>
                        <a href={"#contact"} className="btn4" type={"button"}>0.4 Contact</a>
                    </div>
                    <div className={"Menu-Icon"}>
                        <input type="image" src={menuIcon} alt="menu" width="22" height="22"
                               onClick={() => setClicked(!clicked)}/>
                        <div className={`menu ${clicked ? 'active' : ''}`}>
                            <a href={"#about"} className="btn1" type={"button"}>0.1 About</a>
                            <a href={"#projects"} className="btn2" type={"button"}>0.2 Projects</a>
                            <a href={"#tutoring"} className="btn3" type={"button"}>0.3 Tutoring</a>
                            <a href={"#contact"} className="btn4" type={"button"}>0.4 Contact</a>
                        </div>
                    </div>
                </header>
                <div className="body">
                    <div className="opening_text">
                        <p className="Header_Txt">Hi! I'm Will.</p>
                        <div className="sub_text">
                            <p>I'm a computer science student at the University of Leeds with an interest in software
                                engineering</p>
                        </div>
                    </div>
                    <div id="about" className="about">
                        <h2>01. About</h2>
                        <div className="grid">
                            <div className="grid_left">
                                <p>Hi I'm Will, a student at the University of Leeds and studying Computer Science.</p>
                                <p>I have always had an interest in studying something computer related since GCSE and
                                    studying at Uni has helped me to achieve this dream.</p>
                                <p>My passion is software engineering as I have always has an interest in programming. I
                                    have had the opportunity to participate in the <a href="https://luucompsoc.co.uk/">2025
                                        LeedsHack</a>, working as a team of 4 to develop software over 24 hours.</p>
                                <p>I'm most confident working in Python, but I also have experience with C and C#.</p>
                            </div>
                            <img className="image" src={picture} alt="Will"/>
                        </div>
                    </div>
                    <div id="projects">
                        <h2>02. Projects</h2>
                        <div className="project_grid">
                            <ul className="project_list">
                                <li className={open ? "open" : ""}>
                                    <button type="button" className="coll_button"
                                            onClick={() => setOpen(!open)}> A-Level Unity game,
                                    </button>
                                    <div className={`collapsable ${open ? "open" : ""}`}>
                                        <p>This project was for my A-Level project, in which we performed design,
                                            analysis, implementation and testing. This project helped me to understand
                                            software engineering cycles and the work around developing a piece of
                                            software, not just the programming.</p>
                                    </div>
                                </li>
                                <li className={openT ? "open" : ""}>
                                    <button type="button" className="coll_button"
                                            onClick={() => setOpenT(!openT)}> Weather Website,
                                    </button>
                                    <div className={`collapsable ${openT ? "open" : ""}`}>
                                        <p>This was a personal project I spent some time working on over the Christmas
                                            holidays. I used python to access data from the OpenWeatherMap API and
                                            combined this with a flask webpage, allowing the user to view current and
                                            future weather for a place of their choosing. This helped me to understand
                                            how APIs are utilised within python.</p>
                                    </div>
                                </li>
                                <li className={openThree ? "open" : ""}>
                                    <button type="button" className="coll_button"
                                            onClick={() => setOpenThree(!openThree)}> This Website.
                                    </button>
                                    <div className={`collapsable ${openThree ? "open" : ""}`}>
                                        <p>This website has been developed using React and Typescript and using
                                            Javascript for any animations.</p>
                                    </div>
                                </li>

                            </ul>
                            <p className={"guidance"}>click to expand</p>
                        </div>
                    </div>
                    <div id="tutoring">
                        <h2>03. Tutoring</h2>
                        <div className="Tutoring_Content">
                            <p>Over Summer 2025 I will be offering tutoring online, for GCSE and A-Level Computer
                                Science students. Group or individual</p>
                            <p>Having only recently completed my A-Levels and GCSEs, at Outwood Grange Academy, I have
                                extensive knowledge of course material and know what it is like to study Computer
                                Science at these levels.</p>
                            <p>I am fully DBS checked </p>
                            <p>If you have any questions don't hesitate to <a href={"#contact"}>contact me.</a></p>
                        </div>
                    </div>
                    <div id={"contact"}>
                        <h2>04. Contact</h2>
                        <p>if you have any queries regarding anything do not hesitate to contact me across these
                            platforms:</p>
                        <ul>
                            <li><a href={"https://www.linkedin.com/in/william-l-8355b32bb/"}>Linkedin</a></li>
                            <li><a href={"https://www.facebook.com/share/1GjfE99MHR/"}>Facebook</a></li>
                            <li><a href={"mailto:williamlrd21@gmail.com"}>Email</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}
