import React, { useContext } from 'react';
import { useForm } from '../../Hooks/useForm';
import { types } from '../../Typing/Types';
import { typingContext } from '../../Typing/TypingContext';

const BeginForm = ( { setCurrentMode } ) => {

    const { formValues,  handleInputChanges, } = useForm({
        testType: 1,
        language: "English"
    })

    const { setTestSettings, dispatch } = useContext(typingContext);

    const handleStart = ( e ) => {
        e.preventDefault();

        dispatch({
            type: types.GenerateWords,
            payload:  formValues.language
        })
        
        setTestSettings({
            testType : formValues.testType, 
            language : formValues.language
        })
        
        setCurrentMode("inProcess")
    }

  return(
    <div id='caja-principal' className='w-3/5 flex justify-center items-center border-2 rounded-md border-gray shadow-xl mt-20'>
    <form className='flex flex-col font-lato text-xl items-center mt-8 mb-12'>
        <div className='mb-4'>
            <p className='font-mochiPop text-2xl dark:text-white font-bold'>Check how fast you can type</p>
            <p className='text-center font-lato mt-4 dark:text-white'>Pick your test</p>
        </div>
        <div className='mt-2 mb-4'>
            <select 
                name="testType" 
                className='pl-4 pr-32 py-1 outline-none'
                value={ formValues.testType }
                onChange={ handleInputChanges }
            >
                <option value = {1} defaultValue={true}>1 Minute Test</option>
                <option value = {2} >2 Minutes Test</option>
                <option value = {3} >3 Minutes Test</option>
            
            </select>
        </div>

        <div className='mt-4 mb-4'>
            <select 
                name="language" 
                className='pl-4 pr-48 py-1 outline-none'
                value={ formValues.language }
                onChange={ handleInputChanges }
            >
                <option value="English" defaultValue={true}>English</option>
                <option value="Spanish">Spanish</option>
            </select>
        </div>
        
        <div>
            <button 
                type='submit'
                className='rounded border-2 dark:text-white dark:border-gray px-12 py-2'
                onClick={ handleStart }
            >
                Start
            </button>
        </div>

    </form>
</div>);;
};

export default BeginForm;