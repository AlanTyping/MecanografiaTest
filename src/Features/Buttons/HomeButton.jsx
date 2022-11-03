import React, { useContext } from 'react';
import { countersContext, typingContext } from '../../Typing/TypingContext';

const HomeButton = () => {

    const counters = useContext(countersContext);
    const { setCurrentMode } = useContext(typingContext);

    const handleEnd = () => {

        counters.counterCorrect.reset(0)
        counters.counterIncorrect.reset(0) 
        counters.counterCorrectChars.reset(0)
        counters.counterIncorrectChars.reset(0)
        counters.counterRowWords.reset(0)
        setCurrentMode("start");
      }
      
  return (
        <button 
          className='h-3/4 px-3 bg-sky font-lato text-lg ml-4 rounded'
          onClick={ handleEnd }>
            Home
        </button>
      );
}

export default HomeButton;