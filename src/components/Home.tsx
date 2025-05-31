import '../App.css'

export default function Home() {

    return(<>
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
                    <h1 className="Header_Txt">Hi! I'm Will</h1>
                    <div className="text">
                        <p>I'm a computer science student at the University of Leeds with an interest in software engineering</p>
                    </div>
                </div>
                <img className = "image" src='src/assets/Will.webp' alt = "Will"/>
            </div>


        </>
    )
}
