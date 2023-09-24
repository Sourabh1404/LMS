import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <div className='bg-[#F5F3EF] '>
      <div className='flex justify-between'>


        <div className='m-4 flex justify-center text-center items-center'>
          <h1 className='font-serif text-4xl'>BookStore</h1>

        </div>
        <div>
          <ul className='flex justify-center items-center text-center mt-6 gap-6 text-2xl font-serif  list-none '>
            <Link to={'/'}>
            <li>Home</li>
            </Link>
            <Link to={'/Books'}>
            <li>Books</li>
            </Link>
            <Link to={'/About'}>
            <li>Cart</li>
            </Link>
          </ul>
        </div>
        <div className='flex justify-center items-center text-center m-4  text-black  p-2'>

          <ul className='flex justify-center items-center text-center'>
            <li>{isAuthenticated && (
              <div className='flex justify-center items-center gap-4'>
                <img className='w-[30%] h-[30%] rounded-[50%]' src={user.picture} alt={user.name} />
                {/* <h2 className='text-sm'>{user.name}</h2> */}

              </div>
            )} </li>
            {isAuthenticated ? (
              
              <li> <button className='bg-[#F5F3EF] text-black font-semibold font-mono p-2 rounded-md shadow-xl'   onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </button></li>
            ) : (
              <li><button className='bg-[#F5F3EF] text-black font-semibold font-mono p-2 rounded-md shadow-xl' onClick={() => loginWithRedirect()}>Log In</button></li>
            )}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Navbar