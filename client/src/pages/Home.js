import React from 'react';
import Nav from '../components/home/nav';
import { Link } from "react-router-dom";
import appHomeEx from '../assets/appHomeEx.png';
import appMapEx from '../assets/appMapEx.png';

function Home() {

return (
  <>
    <Nav />
    <div className='relative'>
      <div className='grid grid-cols-2 w-5/6 m-auto my-5 opacity-70'>
      <img alt='home-bg' src='https://images.ctfassets.net/gxwgulxyxxy1/7vCr3w32xXoZr7krBQwcaZ/2b040b7965ddc8d3acd717e05b533d8a/US-Arizona-Scottsdale-7517524ha-2.jpg' />
      <img alt='home-bg' src='https://www.ucf.edu/news/files/2020/02/vacation-rental.jpg' />
      <img alt='home-bg' src='https://previews.123rf.com/images/jovanmandic/jovanmandic1908/jovanmandic190800258/128614306-young-people-having-fun-on-summer-vacation-happy-friends-drinking-tropical-cocktails-on-the-beach-.jpg' />
      <img alt='home-bg' src='https://c.stocksy.com/a/5Xa700/z9/1808731.jpg' />
      </div>
      <h1 className='text-4xl font-bold bg-white shadow-lg w-1/2 absolute top-1/3 left-1/4 rounded-lg p-5'>A Digital Guide for your Vacation Rental Guests</h1>
    </div>
    <div className='flex flex-wrap bg-red-500 w-full justify-around pt-5'>
      <div className='flex w-full m-3'>
        <div className='grid content-center w-1/2'>
          <p className='font-bold text-white text-2xl'>Guide this Guide THat and soem ifno.</p>
        </div>
        <img className='w-48 rounded-3xl m-auto' alt='ex' src={appHomeEx} />
      </div>
      <div className='flex w-full m-3'>
      <img className='w-48 rounded-3xl m-auto' alt='ex' src={appMapEx} />
      <div className='grid content-center w-1/2'>
          <p className='font-bold text-white text-2xl'>Guide this Guide Map and soem  map fino about maps ifno.</p>
        </div>
      </div>
    </div>
    
  </>
)
};

export default Home;