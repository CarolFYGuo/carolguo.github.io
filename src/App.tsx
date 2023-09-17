import './App.css';
import React, { useEffect, useState } from "react";
import emailIcon from './assets/icons/email.png';
import facebookIcon from './assets/icons/facebook.png';
import githubIcon from './assets/icons/github.png';
import linkedInIcon from './assets/icons/linkedin.png';
import resumeIcon from './assets/icons/resume.png';
import myself from './assets/myself.png';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const breakpoints = {
  sm: 640,
  // => @media (min-width: 640px) { ... }

  md: 1024,
  // => @media (min-width: 1024px) { ... }

  lg: 1280,

  cssValues: {
    sm: '640px',
    // => @media (min-width: 640px) { ... }

    md: '1024px',
    // => @media (min-width: 1024px) { ... }

    lg: '1280px',
    // => @media (min-width: 1280px) { ... }
  },
}

function App() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <header className={windowDimensions.width > breakpoints.md ? "App-header py-20 pl-20 pr-4": "App-header"}>
        <div className='flex flex-row'>
          <div className='flex flex-col justify-center ml-12'>
            <div className='flex flex-col text-start'>
              <h1 className="text-5xl text-primaryText font-MontserratSemiBold mb-6">
                Hello World! I'm Carol!
              </h1>
              <h2 className='text-3xl text-primaryText font-MontserratSemiBold mb-3'>
                I am a coder and a creator 🚀 
              </h2>
              <p className='text-xl text-primaryText font-MontserratMedium mb-3'>
                I work as a full-stack developer specializing in React Native and React.js. with a knack for turning coffee into code and debugging into an art form. I'm just an email away. Reach out and let's chat!
              </p>
            </div>
            <div className='flex flex-row justify-start w-full'>
              <img src={resumeIcon} onClick={() => {window.open('https://drive.google.com/file/d/1RdRATEy3eyS6HXnd7_b5Ok-RtwXBCPQ3/view?usp=sharing', '_blank');}} className='my-3 mr-3 hover:cursor-pointer'/>
              <img src={githubIcon} onClick={() => {window.open('https://github.com/CarolFYGuo', '_blank');}} className='m-3 hover:cursor-pointer'/>
              <img src={linkedInIcon} onClick={() => {window.open('https://www.linkedin.com/in/carol-guo-59229a231/', '_blank');}} className='m-3 hover:cursor-pointer'/>
              <img src={emailIcon} onClick={() => {window.open('https://outlook.live.com/mail/0/deeplink/compose?mailtouri=mailto%3Acarolguounsw%40gmail.com', '_blank');}} className='m-3 hover:cursor-pointer'/>
              <img src={facebookIcon} onClick={() => {window.open('https://www.facebook.com/lilylilylilyguo', '_blank');}} className='m-3 hover:cursor-pointer'/>
            </div>
          </div>
          {windowDimensions.width > breakpoints.md  && <img src={myself} className='h-[80vh]'/>}
        </div>
      </header>
    </div>
  );
}

export default App;
