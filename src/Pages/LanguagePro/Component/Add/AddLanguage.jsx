import React, { useState } from 'react'
import {BsFileCode} from 'react-icons/bs'
import {BiSave} from 'react-icons/bi'
import { AiFillCloseCircle, AiOutlineFolderAdd } from 'react-icons/ai';
export const AddLanguage = (props) => {
    const [showModal, setShowModal] = useState(false);
    return(
        <div className="w-full ">
            <div className='w-full md:flex items-start justify-between rounded-t'>
                
                <div className="w-full md:space-y-0 justify-end md:flex flex-wrap">
                        <button
                            className='bg-green-700 flex w-auto float-right px-2 text-white rounded active:bg-indigo-800 text-sm font-bold uppercase py-2 shadow hover:shadow-lg outline-none focus:outline-none'
                            type='submit'
                            value='Submit'
                            style={{ transition: 'all .15s ease' }}
                            onClick={() => setShowModal(true)}
                        >
                            <span>Add language</span>
                            <span>
                            <AiOutlineFolderAdd
                                className='ml-4 text-white inline'
                                size='1.5em'
                            />
                            </span>
                        </button>
                </div>
            </div>
            <div className='relative w-full'>
          {showModal ? (
            <>
              <div className='justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none'>
                <div
                  className='relative w-full rounded-lg mx-auto max-w-2xl'
                  style={{ height: 'auto' }}
                >
                <form className='space-y-4' 
                            onSubmit={(e) => props.handleSubmit(e)}
                            >
                  <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                    <div className='flex items-start justify-between p-2 border-b border-solid border-gray-300 rounded-t'>
                      <h1 className='font-bold text-lg text-gray-500'>
                        Add programming language
                      </h1>
                      <button
                        className='p-1 ml-auto bg-red-500 border-0 rounded-lg float-right leading-none outline-none focus:outline-none'
                        onClick={() => setShowModal(false)}
                      >
                        <AiFillCloseCircle className='bg-transparent text-white h-6 w-6 block outline-none focus:outline-none' />
                      </button>
                    </div>

                    <div
                      className='p-4 w-full md:flex rounded-lg'
                      style={{ height: 'auto' }}
                    >
                        <div className=' w-full'>
                            <div className='w-full '>
                                <div className="w-full">
                                    <fieldset>
                                        <div className='w-full flex'>
                                            <span className='input bg-gray-200 w-12  flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest'>
                                                <BsFileCode className='text-green-600' size='2em' />
                                            </span>
                                            <input
                                                className='input w-full bg-gray-100 h-12 pl-4 text-gray-500 font-semibold outline-none focus:outline-none'
                                                type='text'
                                                placeholder='Programming language'
                                                value={props.name}
                                                onChange={(e) => props.setName(e.target.value)}
                                            />
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                      </div>
                    </div>
                    <div className='flex items-start justify-end px-4 p-2 border-t border-solid border-gray-300 rounded-t'>
                        <button
                            className='bg-green-700 flex w-auto float-right px-6 text-white rounded active:bg-indigo-800 text-sm font-bold uppercase py-2 shadow hover:shadow-lg outline-none focus:outline-none'
                            type='submit'
                            value='Submit'
                            style={{ transition: 'all .15s ease' }}
                        >
                            <span>Save</span>
                            <span>
                            <BiSave
                                className='ml-4 text-white inline'
                                size='1.5em'
                            />
                            </span>
                        </button>
                    </div>
                  </div>
                  </form>
                </div>
              </div>
              <div className='opacity-90 fixed inset-0 z-40 bg-green-900'></div>
            </>
          ) : null}
        </div>
        </div>
    )
}