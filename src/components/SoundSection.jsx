import React from "react"

function SoundSection () {

    const handleLearnMore = () => {
        const el = document.querySelector('.display-section')
        window.scrollTo({
            top: el?.getBoundingClientRect().bottom,
            left: 0,
            behavior: 'smooth'
        })
    }


     return (
        <div className="sound-section wrapper">
            <div className="body">
                <div className="sound-section-content content">
                    <h2 className="title">New sound system.</h2>
                    <p className="text">Feel the bass.</p>
                    <span className="description">
                        From $41.60/mo. or $999 before trade-in.
                    </span>
                    <ul className="links">
                        <li><button className="button">Buy</button></li>
                        <li><a className="link" onClick={handleLearnMore}>Learn more.</a></li>
                    </ul>
                </div>
            </div>
        </div>
     )
}

export default SoundSection