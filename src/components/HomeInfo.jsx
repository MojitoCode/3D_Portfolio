import React from 'react'

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">Hi, I'm <span className="font-semibold">Sam</span> 👋🏻
        <br></br>
        a Software Developer from the U.S.</h1>
    ),
    2: (
        <h1>2</h1>
    ),
    3: (
        <h1>3</h1>
    ),
    4: (
        <h1>4</h1>
    ),
}

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        {text}
    </div>
)

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo