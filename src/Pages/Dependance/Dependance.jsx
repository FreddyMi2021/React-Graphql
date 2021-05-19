import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react'

import { BiSearch} from 'react-icons/bi'


import { CREATE_DEPENDANCY_CMS, CREATE_DEPENDANCY_FRAMEWORK } from '../../services/Mutations/DependanciesMutation';
import {ALL_DEPENDANCY} from '../../services/queries/DependancyQueries';
import { AddDependancy } from './Components/Add/AddDependancy';
import { ListDependancy } from './Components/List/ListDependancy';
const Dependance = ()=>{
    const [name, setName] = useState('')
    const [cmd, setCMD] = useState('')
    const [description, setDescription] = useState('')
    const [frameworkId, setFrameworkId] = useState()
    const [cmsId, setCmsId] = useState()
    const {loading: DPLoading, error: DPError, data:DPData} = useQuery(ALL_DEPENDANCY)
    
    const [createDependancyCMS] = useMutation(CREATE_DEPENDANCY_CMS, {
        onCompleted: ()=> {
            setTimeout(() => {
                window.top.location.reload()
            }, 1000)
        }
    })

    const [craeteDepFramework] = useMutation(CREATE_DEPENDANCY_FRAMEWORK, {
        onCompleted: ()=> {
            setTimeout(() => {
                window.top.location.reload()
            }, 1000)
        }
    })

    const handleSubmit = (e)=> {
        e.preventDefault()
        if(name === '' || cmd === '' || description === ''){
            alert("Les champs sont vides")
        }else{
            if(DPData !== null && DPData.allDependencies !== null){
                if(frameworkId){
                    craeteDepFramework({
                        variables: {
                            name: name,
                            cmd: cmd,
                            description: description,
                            frameworkId: parseInt(frameworkId)
                        }
                    })
                }
                if(cmsId){
                    console.log(cmsId)
                    createDependancyCMS({
                        variables: {
                            name: name,
                            cmd: cmd,
                            description: description,
                            contentManagementSystemId: parseInt(cmsId)
                        }
                    })
                }
            }
        }
    }
    
    
    if(DPLoading) return <p>LOADING...</p>
    if(DPError) return <p>ERROR...</p>
    let listDependancy = []
    DPData !== null && DPData.allDependencies !== null && DPData !== undefined ? (
        DPData.allDependencies.map((dep) => (
            listDependancy.push(<ListDependancy
            key={dep.id}
            id={dep.id}
            name={dep.name}
            cmd={dep.cmd}
            description={dep.description}
            framework={dep.framework ? dep.framework.name : '-'}
            cms={dep.contentManagementSystem ? dep.contentManagementSystem.name : '-'}

        />)
        ))
    ) : (
        <h1>No dependancy</h1>
    )
   
    return(
        <>
            <div className="py-4">
                <div className="w-full">
                    <AddDependancy
                        name={name}
                        cmd={cmd}
                        description={description}
                        frameworkId={frameworkId}
                        cmsId={cmsId}
                        setName={setName}
                        setCMD={setCMD}
                        setDescription={setDescription}
                        setFrameworkId={setFrameworkId}
                        setCmsId={setCmsId}
                        handleSubmit={handleSubmit}
                    />
                </div>
                <div className="w-full mt-4">
                    <div className='w-full bg-gray-200 md:flex items-start justify-between px-4 p-2 rounded-t'>
                        <div className="mt-1 w-full md:w-1/3 ">
                            <label htmlFor="" className="text-lg uppercase font-bold text-gray-500">
                                Dependancy list: &nbsp;
                                <span className="text-xl text-green-600">
                                    {listDependancy.length < 10 ? '0'+listDependancy.length : listDependancy.length}
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
                        <table className='w-full text-center leading-normal'>
                            <thead>
                            <tr>
                                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                    ID
                                </th>
                                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                    Dependancy
                                </th>
                                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                Commande
                                </th>
                                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                Description
                                </th>
                                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                Framework
                                </th>
                                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                CMS
                                </th>
                                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                Update/Delete
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                listDependancy
                            }
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default Dependance;