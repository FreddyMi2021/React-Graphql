import { useQuery } from '@apollo/client';
import React from 'react';
import { ALL_PO } from '../../services/queries/ProductOwnerQueries';
import { PoAdd } from './Components/Add/PoAdd';
import { POList } from './Components/List/POList';
import { BiSearch} from 'react-icons/bi'
export const ProductOwner = () =>{
    const {loading: POLoading, error: POError,data: POData} = useQuery(ALL_PO)
    if(POLoading) return <p>LOAD0ING...</p>
    if(POError) return <p>ERROR...</p>
    const poList= []

    if(POData !== null && POData !== undefined){
      POData.allProductOwners.map((po) => (
        poList.push(<POList
          key={po.id}
          id={po.id}
          name={po.name}
          email={po.email}
        />)
      ))
    }else{
      <div className='text-center'>
        <h1>No product owner</h1>
      </div>
    }
      
    
    return(
        <>
            <div className="py-4">
              <div className="w-full pb-4">
                  <PoAdd 
                  poList={poList}
                  />
              </div>
              <div className="w-full">
                <div className='w-full bg-gray-200 md:flex items-start justify-between px-4 py-2 rounded-t'>
                  <div className="mt-1 w-full md:w-1/3 ">
                        <label htmlFor="" className="text-lg uppercase font-bold text-gray-500">
                            Product owner list: &nbsp;
                            <span className="text-xl text-green-600">
                                {poList.length < 10 ? '0'+poList.length : poList.length}
                            </span>
                        </label>
                    </div>
                  <div className='w-1/3 justify-end float-right rounded-lg flex'>
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
                <div className="mt-4">
                  <table className='min-w-full text-center leading-normal'>
                    <thead className="justify-between">
                      <tr>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                          ID
                        </th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                          product owner Name
                        </th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                          Email adress
                        </th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                        Update/Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        poList
                      }
                    </tbody>
                  </table>
                </div>
                  
              </div>
            </div>
        </>
    )
}