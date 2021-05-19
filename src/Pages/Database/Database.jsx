import React, { useState } from 'react'

import {useMutation, useQuery} from '@apollo/client'
import { BiSearch} from 'react-icons/bi'

import {ALL_DATABASE,
  //  SHOW_DATABASE
  } from '../../services/queries/DatabaseQueries';
import {CREATE_DATABASE} from '../../services/Mutations/DatabaseMutation';
import { AddDatabase } from './Component/Add/AddDatabase';
import { ListDatabase } from './Component/List/Listdatabase';

function Database() {
    const [name, setName] = useState('');
    

    const {loading: DBLoading, error: DBError,data: DBData} = useQuery(ALL_DATABASE)

    const [createDB] = useMutation(CREATE_DATABASE, {
        onCompleted(){
            setTimeout(() => {
                window.top.location.reload()
                }, 1000)
        }
    })
    
    if(DBLoading) return <p>Loading...</p>
    if(DBError) return <p>Error</p>
    const dbList = []
    if (DBData !== null && DBData !== undefined){
      DBData.allDatabases.map((db) => (
        dbList.push(<ListDatabase
          key={db.id}
          id={db.id}
          name={db.name}
        />)
      ))
    }else{
      <div className='text-center'>
        <h1>No database</h1>
      </div>
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' ) {
            alert("Le champ est vide")
        } else {
            if (DBData !== null && DBData.allDatabases !== null) {
                createDB({
                    variables: {
                      name: name,
                    },
                });
            }
        }

    };

    return(
        <>
            <div className="py-4">
              <div className="w-full pb-4">
                  <AddDatabase 
                  name={name} 
                  setName={setName} 
                  handleSubmit={handleSubmit} 
                  />
              </div>
              <div className="w-full">
                  <div className='w-full bg-gray-200 md:flex items-start justify-between px-4 p-2 rounded-t'>
                      <div className="mt-1 w-full md:w-1/3 ">
                          <label htmlFor="" className="text-lg uppercase font-bold text-gray-500">
                              Database list: &nbsp;
                              <span className="text-xl text-green-600">
                                  {dbList.length < 10 ? '0'+dbList.length : dbList.length}
                              </span>
                          </label>
                      </div>
                      <div className="w-full md:w-2/3 space-y-4 md:space-y-0 justify-end md:space-x-4 md:flex flex-wrap">
                          <div className='rounded-lg flex'>
                              <input
                                  className='rounded-l-lg w-full bg-gray-100 h-10 pl-4 text-gray-500 font-semibold outline-none focus:outline-none'
                                  type='text'
                                  placeholder='Search database'
                              />
                              <button className='rounded-r-lg bg-green-600 w-10 h-10  flex justify-end items-center text-green-600 p-2 focus:outline-none hover:text-grey-darkest'>
                                  <BiSearch className='text-gray-100' size='2em' />
                              </button>
                          </div>
                          
                      </div>
                  </div>
                  <div className="mt-4">
                    <table className='min-w-full text-center leading-normal'>
                      <thead className="justify-between">
                        <tr>
                          <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                            ID
                          </th>
                          <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                            Database name
                          </th>
                          <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                          Update/Delete
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          dbList
                        }
                      </tbody>
                    </table>
                  </div>
                  
              </div>
            </div>
        </>
    )
}

export default Database;