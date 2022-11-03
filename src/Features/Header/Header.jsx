import React, { useContext } from 'react';
import { typingContext } from '../../Typing/TypingContext';
    

const Header = () => {

     const { theme, setTheme, lastTheme } = useContext(typingContext);

     const setAppTheme = (e) => {

          lastTheme.current = theme;

          if (window.localStorage.theme === "dark") {
               setTheme("light")
               localStorage.removeItem("theme")
          } else {     
               setTheme("dark")
               localStorage.theme = "dark"
          }
  
          document.getElementById("root").classList.toggle("dark-root");
          document.documentElement.classList.toggle('dark');
     }; 

  return (
       <div id='header' className='w-full flex'>
           <img id='img' src='../assets/Images/flash.png' alt="flash" />
           <div className='mt-5 mb-5 flex'>
               <h1 href=".././public/index.html" id='title' className='font-lato text-4xl text-brown ml-4 dark:text-white'>Flash Typing</h1>
           </div>
           <div 
               className='mt-5 mb-5 ml-auto mr-36 cursor-pointer right-icon'
               onClick={ setAppTheme }>
               <img 
                    src= {`${theme === 'light' ? '../assets/Images/dark-mode.png' : '../assets/Images/ligth-mode.png'} `}
                    alt=""
                    className='w-8' 
                />
           </div>
      </div>);
};

export default Header;
