import '../App.css'

export default function Home() {

    return(<>
            <div className="background">


            <header className = "PageTop">
                <div className="Title">
                    <p>Will</p>
                </div>

                <div className= "button-Group">
                    <button className = "btn1" type={"button"}>About</button>
                    <button className = "btn2" type={"button"}>Contact</button>
                </div>
            </header>
            <div className = "body">
                <div className="opening_text">
                    <p className="Header_Txt">Hi! I'm Will.</p>
                    <div className= "sub_text">
                        <p>I'm a computer science student at the University of Leeds with an interest in software engineering</p>
                    </div>
                </div>
                <div className="about">
                    <div className= "grid">
                        <div className="grid_left">
                            <p>Hi I'm Will, a student at the University of Leeds and studying Computer Science.</p>
                            <p>I have always had an interest in studying something computer related since GCSE and studying at Uni has helped me to achieve this dream</p>
                            <p>My passion is software engineering as I have always has an interest in programming. I have had the opportunity to participate in the <a href="https://luucompsoc.co.uk/">2025 LeedsHack</a>, working as a team of 4 to develop software over 24 hours</p>
                            <p>I'm most confident working in Python, but I also have experience with C and C#</p>
                        </div>
                        <img className = "image" src='src/assets/Will.webp' alt = "Will"/>
                    </div>
                </div>
            </div>
            </div>


        </>
    )
}
