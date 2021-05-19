import React from 'react'
import { AiOutlineFolderAdd } from 'react-icons/ai';
export const PoAdd = () => {
    return(
        <div className="w-full">
            <div className='w-full md:flex items-start justify-between rounded-t'>
                
                <div className="w-full md:space-y-0 justify-end md:flex flex-wrap">
                        <button
                            className='bg-green-700 flex w-auto float-right px-2 text-white rounded active:bg-indigo-800 text-sm font-bold uppercase py-2 shadow hover:shadow-lg outline-none focus:outline-none'
                            type='submit'
                            value='Submit'
                            style={{ transition: 'all .15s ease' }}
                            // onClick={() => setShowModal(true)}
                        >
                            <span>Add product owner</span>
                            <span>
                            <AiOutlineFolderAdd
                                className='ml-4 text-white inline'
                                size='1.5em'
                            />
                            </span>
                        </button>
                </div>
            </div>
            
        </div>
    )
}