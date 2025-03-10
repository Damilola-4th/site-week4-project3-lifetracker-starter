import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import "./SleepPage.css"
import SleepPageCard from '../SleepPageCard/SleepPageCard'


const SleepPage = ({ SleepLogs, setSleepLogs, Login, GetSleepingData }) => {
  // const = sleepPageFunctions
  console.log(Login)

  
  if (Login){
    useEffect( () => { GetSleepingData( setSleepLogs) }, [])
    }
  console.log('SleepLogs is:', SleepLogs)

  return (
    <div className='Sleep-Container'>
    <div className='header-wrap-sleep'>
      <h1 className='header'>Sleep</h1>
    </div>

    <div className='body-sleep'>
    <Link  to={"/sleep/create"}><button className='add-sleep-btn'>+</button> </Link>
    <br />


    {SleepLogs.length > 0 && SleepLogs.map((SleepLogs, id) => (<SleepPageCard key={id} SleepLogs={SleepLogs}/>))}

    {/* <SleepPageCard/> */}

    </div>
    </div>
  )
}

export default SleepPage