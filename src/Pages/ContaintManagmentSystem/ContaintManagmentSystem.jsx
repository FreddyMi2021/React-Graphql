import { useMutation, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { BiSearch} from 'react-icons/bi'
import { CREATE_CMS } from '../../services/Mutations/CmsMutation'
import { ALL_CMS } from '../../services/queries/CmsQueries'
import { AddCms } from './Components/Add/AddCms'
import { ListCMS } from './Components/List/ListCMS'
const ContaintManagmentSystem = () => {
  const [name, setName] = useState('');
  const [cmd, setCmd] = useState('');
  const [programmingLanguageId, setProgrammingLanguageId] = useState();

    const {loading: CMSLoading, error: CMSError, data: CMSData} = useQuery(ALL_CMS)
    
    const [createCMS] = useMutation(CREATE_CMS, {
      onCompleted() {
        setTimeout(() => {
          window.top.location.reload()
          }, 1000)
      }
    })
    const handleSubmit = (e)=>{
      e.preventDefault();
        if (name === '' || cmd === '' ) {
            alert("Le champ est vide")
        } else {
            if (CMSData !== null && CMSData.allCms !== null) {
              console.log(programmingLanguageId)
                createCMS({
                  variables: {
                    name: name,
                    cmd: cmd,
                    programmingLanguageId: parseInt(programmingLanguageId)
                  },
                });
            }
        }
    }

    if(CMSLoading) return <p>LOADING...</p>
    if(CMSError) return <p>Error...</p>

    

    const listeCMS = []
    if(CMSData){
      CMSData.allCms.map(cms=>(
            listeCMS.push(<ListCMS 
              key={cms.id} 
              id={cms.id} 
              name={cms.name} 
              cmd={cms.cmd} 
              language={cms.programmingLanguage ? cms.programmingLanguage.name : '-'} 
              />)
        ))
    }

    return(
        <>
            <div className="py-4">
              <div className="w-full pb-4">
                  <AddCms
                    name={name}
                    cmd={cmd}
                    programmingLanguageId={programmingLanguageId}
                    setName={setName}
                    setCmd={setCmd}
                    setProgrammingLanguageId={setProgrammingLanguageId}
                    handleSubmit={handleSubmit}
                  />
              </div>
              <div className="w-full">
                <div className='w-full bg-gray-200 md:flex items-start justify-between px-4 p-2 rounded-t'>
                      <div className="mt-1 w-full md:w-1/3 ">
                          <label htmlFor="" className="text-lg uppercase font-bold text-gray-500">
                              CMS list: &nbsp;
                              <span className="text-xl text-green-600">
                                  {listeCMS.length < 10 ? '0'+listeCMS.length : listeCMS.length}
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
                            Name
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
                          listeCMS
                        }
                      </tbody>
                    </table>
                  </div>
                  
              </div>
            </div>
        </>
    )
}

export default ContaintManagmentSystem;