import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineMinusCircle, AiOutlineCode, AiOutlineDashboard, AiOutlineDatabase, AiOutlineQrcode, AiOutlineCodeSandbox } from 'react-icons/ai'
import {BsFileCode} from 'react-icons/bs';
import {BiUserCheck, BiLogInCircle} from 'react-icons/bi';
import {FaBars, FaWordpress} from 'react-icons/fa';
import {ImProfile} from 'react-icons/im'
import axios from 'axios';
import './Css/Navbar.css'
const Navbar = ()=>{
    let admin = JSON.parse(localStorage.getItem('currentAdmin'));
    const [isOpen, setIsOpen] = useState(false)
    const handlsubmit = ()=>{
      setIsOpen(!isOpen)
    }

    function logout() {
      axios({
        url: 'http://localhost:4000/admin/sign_out',
        method: 'delete'
        
      })
        .then((result) => {
          if (result.status === 200) {
            localStorage.removeItem('currentAdmin');
  
            window.location.href = '/login_page';
          }
        })
        .catch(function (error) {
          console.log(error);
          localStorage.removeItem('currentAdmin');
  
          window.location.href = '/login_page';
        });
        if(admin === null){
          window.location.href = '/login_page';
        }
    }

    return(
      
      <>
      
        {
          isOpen ? (
            <div className="fixed z-50 w-64 transition-all duration-150 ease-out h-screen flex flex-shrink-0">
              <div className="flex flex-col w-64 bg-gray-800">
                <div className="h-0 flex-1 flex flex-col overflow-y-auto">
                  <div className="flex h-16 items-center justify-between flex-shrink-0 px-4 ">
                    <Link to='/'>
                      <img
                        src='Logo/sayna.png'
                        alt='logo'
                        className='h-6'
                      />
                    </Link>
                    <AiOutlineMinusCircle 
                      size="2em" 
                      onClick={()=>handlsubmit()}
                      className="text-white cursor-pointer text-right" 
                    />
                  </div>
                  <nav className="flex-1 border-t border-gray-200 bg-gray-800">

                    <Link to="/" className="links group flex items-center px-4 py-4 text-sm leading-5 font-medium text-white focus:outline-none focus:bg-gray-700 hover:bg-gray-700 transition ease-in-out duration-150">
                        <div className='icons w-8 h-8 rounded-md bg-gray-700 text-center mr-2'>
                          <div
                              className='font-bold text-lg text-white font-bold'
                              style={{ lineHeight: '1.8rem' }}
                          >
                              <AiOutlineDashboard size="1em" className="inline" />
                          </div>
                        </div>
                        Dashboard
                    </Link>
                    <Link to="/product_owner" className="links group flex items-center px-4 py-4 text-sm leading-5 font-medium text-white focus:outline-none focus:bg-gray-700 hover:bg-gray-700 transition ease-in-out duration-150">
                        <div className='icons w-8 h-8 rounded-md bg-gray-700 text-center mr-2'>
                          <div
                              className='font-bold text-lg text-white font-bold'
                              style={{ lineHeight: '1.8rem' }}
                          >
                              <BiUserCheck size="1em" className="inline" />
                          </div>
                        </div>
                        Product owner
                    </Link>
                    <Link to='/language_programmation'
                      className="links group flex items-center px-4 py-4 text-sm leading-5 font-medium text-white focus:outline-none focus:bg-gray-700 hover:bg-gray-700 transition ease-in-out duration-150"
                    >
                        <div className='icons w-8 h-8 rounded-md bg-gray-700 text-center mr-2'>
                          <div
                              className='font-bold text-lg text-white font-bold'
                              style={{ lineHeight: '1.8rem' }}
                          >
                              <AiOutlineCode size="1em" className="inline" />
                          </div>
                        </div>
                        Language
                    </Link>
                    <Link to='/framework'
                      className="links group flex items-center px-4 py-4 text-sm leading-5 font-medium text-white focus:outline-none focus:bg-gray-700 hover:bg-gray-700 transition ease-in-out duration-150"
                    >
                        <div className='icons w-8 h-8 rounded-md bg-gray-700 text-center mr-2'>
                          <div
                              className='font-bold text-lg text-white font-bold'
                              style={{ lineHeight: '1.8rem' }}
                          >
                              <BsFileCode size="1em" className="inline" />
                          </div>
                        </div>
                        Framework
                    </Link>
                    <Link to='/cms'
                      className="links group flex items-center px-4 py-4 text-sm leading-5 font-medium text-white focus:outline-none focus:bg-gray-700 hover:bg-gray-700 transition ease-in-out duration-150"
                    >
                        <div className='icons w-8 h-8 rounded-md bg-gray-700 text-center mr-2'>
                          <div
                              className='font-bold text-lg text-white font-bold'
                              style={{ lineHeight: '1.8rem' }}
                          >
                              <FaWordpress size="1em" className="inline" />
                          </div>
                        </div>
                        Cms
                    </Link>
                    <Link to='/database'
                      className="links group flex items-center px-4 py-4 text-sm leading-5 font-medium text-white focus:outline-none focus:bg-gray-700 hover:bg-gray-700 transition ease-in-out duration-150"
                    >
                        <div className='icons w-8 h-8 rounded-md bg-gray-700 text-center mr-2'>
                          <div
                              className='font-bold text-lg text-white font-bold'
                              style={{ lineHeight: '1.8rem' }}
                          >
                              <AiOutlineDatabase size="1em" className="inline" />
                          </div>
                        </div>
                        Database
                    </Link>
                    <Link to='/environment'
                      className="links group flex items-center px-4 py-4 text-sm leading-5 font-medium text-white focus:outline-none focus:bg-gray-700 hover:bg-gray-700 transition ease-in-out duration-150"
                    >
                        <div className='icons w-8 h-8 rounded-md bg-gray-700 text-center mr-2'>
                          <div
                              className='font-bold text-lg text-white font-bold'
                              style={{ lineHeight: '1.8rem' }}
                          >
                              <AiOutlineQrcode size="1em" className="inline" />
                          </div>
                        </div>
                        Environment
                    </Link>
                    <Link to='/dependance'
                      className="links group flex items-center px-4 py-4 text-sm leading-5 font-medium text-white focus:outline-none focus:bg-gray-700 hover:bg-gray-700 transition ease-in-out duration-150"
                    >
                        <div className='icons w-8 h-8 rounded-md bg-gray-700 text-center mr-2'>
                          <div
                              className='font-bold text-lg text-white font-bold'
                              style={{ lineHeight: '1.8rem' }}
                          >
                              <AiOutlineCodeSandbox size="1em" className="inline" />
                          </div>
                        </div>
                        Dependancies
                    </Link>
                  </nav>
                  <div className="border-t border-gray-50">
                    
                    <Link to='/login_page'
                      className="links group py-4 text-gray-200 flex items-center px-4 text-sm leading-5 font-medium hover:text-white focus:outline-none hover:bg-gray-700 focus:bg-gray-700 transition ease-in-out duration-150"
                      onClick={() => logout()}
                    >
                        <div className='icons w-8 h-8 rounded-md bg-gray-700 text-center mr-2'>
                          <div
                              className='font-bold text-lg text-white font-bold'
                              style={{ lineHeight: '1.8rem' }}
                          >
                              <BiLogInCircle size="1em" className="inline text-red-500" />
                          </div>
                        </div>
                        Log out
                    </Link>
                    <Link to='/'
                      className="links group py-4 text-gray-200 flex items-center px-4 text-sm leading-5 font-medium hover:text-white focus:outline-none focus:bg-gray-700 hover:bg-gray-700 transition ease-in-out duration-150"
                    >
                        <div className='icons w-8 h-8 rounded-md bg-gray-700 text-center mr-2'>
                          <div
                              className='font-bold text-lg text-white font-bold'
                              style={{ lineHeight: '1.8rem' }}
                          >
                              <ImProfile size="1em" className="inline text-green-500" />
                          </div>
                        </div>
                        My profile
                    </Link>
                  </div>
                </div>
              </div>
              
            </div>
          ):(
            <div className="fixed z-50 w-16 transition-all duration-150 ease-out h-screen flex flex-shrink-0">
              <div className="flex flex-col w-64 bg-gray-800">
                <div className="h-0 flex-1 flex flex-col overflow-y-auto">
                  <div className="flex h-16 border-b border-gray-200 items-center justify-between flex-shrink-0 px-4 ">
                    {/* <Link to='/'>
                      <img
                        src='http://admin-school.sayna.io/assets/public/images/logo/sayna.svg'
                        alt='logo'
                        className='h-6'
                      />
                    </Link> */}
                    <FaBars 
                      size="2em" 
                      onClick={()=>handlsubmit()}
                      className="text-white cursor-pointer text-right" 
                    />
                  </div>
                  <nav className="space-y-4 pt-5 flex-1 mx-auto bg-gray-800">

                    <Link to="/" className="links group h-10 w-10 rounded-full bg-gray-700 m-auto flex  items-center text-sm leading-5 font-medium text-white focus:outline-none focus:bg-gray-700 hover:bg-gray-700 transition ease-in-out duration-150">
                        <AiOutlineDashboard size="1.8em" className="m-auto icone" />
                    </Link>
                    <Link to="/product_owner" className="link group h-10 w-10 rounded-full bg-gray-700 flex items-center text-sm leading-5 font-medium text-white focus:outline-none focus:bg-gray-700 hover:bg-gray-700 transition ease-in-out duration-150">
                        <BiUserCheck size="1.8em" className="m-auto" />
                    </Link>
                    <Link to='/language_programmation'
                      className="links group flex h-10 w-10 rounded-full bg-gray-700 m-auto items-center text-sm leading-5 font-medium text-white focus:outline-none focus:bg-gray-700 hover:bg-gray-700 transition ease-in-out duration-150"
                    >
                        <AiOutlineCode size="1.8em" className="m-auto"/>
                    </Link>
                    <Link to='/framework'
                      className="links group flex h-10 w-10 rounded-full bg-gray-700 m-auto items-center text-sm leading-5 font-medium text-white focus:outline-none focus:bg-gray-700 hover:bg-gray-700 transition ease-in-out duration-150"
                    >
                        <BsFileCode size="1.8em" className="m-auto"/>
                    </Link>
                    <Link to='/cms'
                      className="links group flex h-10 w-10 rounded-full bg-gray-700 m-auto items-center text-sm leading-5 font-medium text-white focus:outline-none focus:bg-gray-700 hover:bg-gray-700 transition ease-in-out duration-150"
                    >
                        <FaWordpress size="1.8em" className="m-auto"/>
                    </Link>
                    <Link to='/database'
                      className="links group flex h-10 w-10 rounded-full bg-gray-700 m-auto items-center text-sm leading-5 font-medium text-white focus:outline-none focus:bg-gray-700 hover:bg-gray-700 transition ease-in-out duration-150"
                    >
                        <AiOutlineDatabase size="1.8em" className="m-auto "/>
                    </Link>
                    <Link to='/environment'
                      className="link group flex h-10 w-10 rounded-full bg-gray-700 m-auto items-center text-sm leading-5 font-medium text-white focus:outline-none focus:bg-gray-700 hover:bg-gray-700 transition ease-in-out duration-150"
                    >
                        <AiOutlineQrcode size="1.8em" className="m-auto"/>
                    </Link>
                    <Link to='/dependance'
                      className="links group flex h-10 w-10 rounded-full bg-gray-700 m-auto items-center text-sm leading-5 font-medium text-white focus:outline-none focus:bg-gray-700 hover:bg-gray-700 transition ease-in-out duration-150"
                    >
                        <AiOutlineCodeSandbox size="1.8em" className="m-auto"/>
                    </Link>
                  </nav>
                  <div className=" border-t border-gray-50">
                    
                    <div className="space-y-4 py-4 mx-auto">
                      <Link to='/login_page'
                        className="links group flex h-10 w-10 rounded-full bg-gray-700 m-auto items-center text-sm leading-5 font-medium text-white focus:outline-none focus:bg-gray-700 hover:bg-gray-700 transition ease-in-out duration-150"
                        onClick={() => logout()}
                      >
                          <BiLogInCircle size="1.5em" className="text-red-500 m-auto"/>
                      </Link>
                      <Link to='/'
                        className="links group flex h-10 w-10 rounded-full bg-gray-700 m-auto items-center text-sm leading-5 font-medium text-white focus:outline-none focus:bg-gray-700 hover:bg-gray-700 transition ease-in-out duration-150"
                      >
                          <ImProfile size="1.5em" className="text-green-500 m-auto"/>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          )
        }
      </>

    )
}
export default Navbar;