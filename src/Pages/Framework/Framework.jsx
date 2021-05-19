import React, { useState } from 'react'
import { BiSearch} from 'react-icons/bi'
import {useMutation, useQuery} from '@apollo/client'

import {ALL_FRAMEWORK} from '../../services/queries/FrameworkQueries';
import {CREATE_FRAMEWORK} from '../../services/Mutations/FrameworkMutation';

import { AddFramework } from './Component/Add/AddFramework';
import { ListFramework } from './Component/List/ListFramework';

const Framework = () => {
    const [name, setName] = useState('');
    const [cmd, setCMD] = useState('');
    const [programmingLanguageId, setProgrammingLanguageId] = useState();

    
    const {loading: FWLoading, error: FWError,data: FWData} = useQuery(ALL_FRAMEWORK)

    const [createFramework] = useMutation(CREATE_FRAMEWORK, {
        onCompleted(){
            setTimeout(() => {
                window.top.location.reload()
            }, 1000)
        }
    })

    if(FWLoading) return <p>Loading...</p>
    if(FWError) return <p>Error</p>

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || cmd === '' || programmingLanguageId ==='') {
            alert("Le champs est vide")
        } else {
            if (FWData !== null && FWData.allFrameworks !== null) {
                createFramework({
                    variables: {
                        name: name,
                        cmd: cmd,
                        programmingLanguageId: parseInt(programmingLanguageId)
                    },
                });
            }
        }

    };

    const ListFram = []

    if(FWData !== null && FWData !== undefined){
      FWData.allFrameworks.map((fw) => (
        ListFram.push(<ListFramework
          key={fw.id}
          id={fw.id}
          name={fw.name}
          cmd={fw.cmd}
          language={fw.programmingLanguage}

        />)
      ))
    }else{
      <h1>No framework</h1>
    }

    return(
        <>
            <div className="py-4">
              <div className="w-full pb-4">
                  <AddFramework 
                      name={name} 
                      cmd={cmd}
                      programmingLanguageId={programmingLanguageId}
                      setName={setName}
                      setCMD={setCMD}
                      setProgrammingLanguageId={setProgrammingLanguageId}
                      handleSubmit={handleSubmit} 
                  />
              </div>
              <div className="w-full">
                <div className='w-full bg-gray-200 md:flex items-start justify-between px-4 p-2 rounded-t'>
                      <div className="mt-1 w-full md:w-1/3 ">
                          <label htmlFor="" className="text-lg uppercase font-bold text-gray-500">
                              Framework list: &nbsp;
                              <span className="text-xl text-green-600">
                                  {ListFram.length < 10 ? '0'+ListFram.length : ListFram.length}
                              </span>
                          </label>
                      </div>
                      <div className="w-full md:w-2/3 space-y-4 md:space-y-0 justify-end md:space-x-4 md:flex flex-wrap">
                          <div className='rounded-lg flex'>
                              <input
                                  className='rounded-l-lg w-full bg-gray-100 h-10 pl-4 text-gray-500 font-semibold outline-none focus:outline-none'
                                  type='text'
                                  placeholder='Search framework'
                              />
                              <button className='rounded-r-lg bg-green-600 w-10 h-10  flex justify-end items-center text-green-600 p-2 focus:outline-none hover:text-grey-darkest'>
                                  <BiSearch className='text-gray-100' size='2em' />
                              </button>
                          </div>
                          
                      </div>
                  </div>
                  <div className="mt-4">
                    <table className='min-w-full text-center leading-normal'>
                      <thead>
                        <tr>
                          <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                            ID
                          </th>
                          <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                            Framework
                          </th>
                          <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                            Commande
                          </th>
                          <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                            Language
                          </th>
                          <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                            Update/Delete
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          ListFram
                        }
                      </tbody>
                    </table>
                  </div>
                  
              </div>
            </div>
        </>
    )
}

export default Framework;