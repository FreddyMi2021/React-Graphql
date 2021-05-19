import React, { useState } from 'react'
import { BiSearch} from 'react-icons/bi'
import {useMutation, useQuery} from '@apollo/client'
import {ALL_LANGUAGE} from '../../services/queries/LanguageProgrammationQueries';
import {CREATE_PROGRAMMING_LANGUAGE} from '../../services/Mutations/ProgrammingLanguageMutation';
import { AddLanguage } from './Component/Add/AddLanguage';
import { ListLanguage } from './Component/List/ListLanguage';

const LanguagePro = () => {
    const [name, setName] = useState('');

    const {loading: LanguageLoading, error: LanguageError,data: LanguageData} = useQuery(ALL_LANGUAGE)

    const [createLanguagePro] = useMutation(CREATE_PROGRAMMING_LANGUAGE, {
        onCompleted(){
            setTimeout(() => {
                window.top.location.reload()
                }, 1000)
        }
    })
    if(LanguageLoading) return <p>Loading...</p>
    if(LanguageError) return <p>Error</p>

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' ) {
            alert("Le champ est vide")
        } else {
            if (LanguageData !== null && LanguageData.allProgrammingLanguages !== null) {
                createLanguagePro({
                    variables: {
                    name: name,
                    },
                });
            }
        }
    };

    const listPL = []

    if(LanguageData !== null && LanguageData !== undefined){
      LanguageData.allProgrammingLanguages.map((language) => (
        listPL.push(<ListLanguage
          key={language.id}
          id={language.id}
          name={language.name}
        />)
      ))
    }else{
      <div className='text-center'>
        <h1>No programming language</h1>
      </div>
    }
    console.log(listPL)
    return(
        <>
            <div className="py-4">
              <div className="w-full pb-4">
                  <AddLanguage name={name} setName={setName} handleSubmit={handleSubmit} />
              </div>
              <div className="w-full">
                  <div className='w-full bg-gray-200 md:flex items-start justify-between px-4 p-2 rounded-t'>
                      <div className="mt-1 w-full md:w-1/3 ">
                          <label htmlFor="" className="text-lg uppercase font-bold text-gray-500">
                              Language list: &nbsp;
                              <span className="text-xl text-green-600">
                                  {listPL.length <= 9 ? '0'+listPL.length : listPL.length}
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
                      <thead className="text-center">
                        <tr className="text-center">
                          <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                            ID
                          </th>
                          <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                            Programming language
                          </th>
                          <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                          Update/Delete
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-center">
                        {
                        listPL
                        }
                      </tbody>
                    </table>
                  </div>
                  
              </div>
            </div>
        </>
    )
}

export default LanguagePro;