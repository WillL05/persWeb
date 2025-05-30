import '../App.css'

export default function Home() {

    return(<>
            <div className = "PageTop">
                <div className="Title">
                    <p>Will</p>
                </div>

                <div className= "button-Group">
                    <button className = "btn1" type={"button"}>About</button>
                    <button className = "btn2" type={"button"}>Contact</button>
                </div>
            </div>


            <img className = "image" src='src/assets/Will.webp' alt = "Will"/>

            <div className="text">

                <p>Hi! I'm Will, a first, going second year computer science student at the University of Leeds.  </p>
            </div>
        </>
    )
}
