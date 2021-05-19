import { useMutation } from '@apollo/client';
import React from 'react';
// import { AiFillCloseCircle } from 'react-icons/ai';
import {FaTrashAlt} from 'react-icons/fa';
import {MdUpdate} from 'react-icons/md'
import { DESTROY_PO } from '../../../../services/Mutations/ProductOwnerMutation';

export const POList =(props)=> {
  
    // const [showModal, setShowModal] = useState(false);
  const [deletePO] = useMutation(DESTROY_PO, {
    onCompleted: ()=>{
      alert("Success")
      window.location.href = '/product_owner';
    }
  })

  const removePO = ()=>{
    
    deletePO({
      variables: {
        id: parseInt(props.id)
      }
    })
  }
  return (
    <tr key={props.id}>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <div className='flex items-center'>
            <div className='ml-3'>
              <p className='text-gray-900 whitespace-no-wrap'>
                {props.id}
              </p>
            </div>
          </div>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{props.name}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{props.email}</p>
        </td>
        
        <td className='block md:space-x-4 px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          
            <button
                className='bg-green-700 w-auto p-1 text-white rounded active:bg-indigo-800 text-sm font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none'
                type='submit'
                value='Submit'
                style={{ transition: 'all .15s ease' }}
            >
                <span>
                    <MdUpdate
                        className='text-white inline'
                        size='1.5em'
                    />
                </span>
            </button>
            <button
                className='bg-red-700 w-auto p-1 text-white rounded active:bg-indigo-800 text-sm font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none'
                type='submit'
                value='Submit'
                style={{ transition: 'all .15s ease' }}
                onClick={()=>removePO()}
            >
                <span>
                    <FaTrashAlt
                        className='text-white inline'
                        size='1.5em'
                    />
                </span>
            </button>
            
        </td>
      </tr>
  );
}
