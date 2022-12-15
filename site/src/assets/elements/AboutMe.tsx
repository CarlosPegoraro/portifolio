import "../css/aboutMe.css"

export function AboutMe() {
    return (
        <div className="mt-5 text-center">
            <h1 id="myName" className="mx-auto my-5">
                carlos eduardo pegoraro lopes
            </h1>
            <p id="introText" className="mx-auto my-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique consectetur ratione eveniet non reprehenderit assumenda dignissimos voluptatem optio voluptatibus magnam commodi, corrupti repudiandae voluptate omnis, iste harum laborum nulla praesentium?
            </p>
            <div className="mt-5">
                <h1 className="m-0" id="arrowTextAM">
                    Sobre Mim
                </h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#D08C60" className="bi bi-caret-down arrow" viewBox="0 0 16 16">
                    <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                </svg>
            </div>
        </div>
    )
}