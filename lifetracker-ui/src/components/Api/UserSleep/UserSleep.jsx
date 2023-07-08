import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const UserSleep = ({UserID}) => {
    const [SleepLogs, setSleepLogs] = useState([])
    const GetSleepingData = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/sleep/sleeplogs/${UserID}`);
            console.log(response.data)
            setSleepLogs(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    const PostSleepingData = async (SleepingLog) => {
        try {
            console.log("Sleeping Log is:",SleepingLog ,'UserID is:', UserID)
            const response = await axios.post("https://lifetracker-bk1k.onrender.com/sleep/sleepingData", { 'start_time' :SleepingLog.starttime, 'end_time': SleepingLog.endtime, 'UserID': UserID } );
            console.log(response.data)
            // SetLogInUserInfo(true)
        } catch (error) {
            console.error(error)
        }
    }

  return {
    PostSleepingData,
    GetSleepingData,
    setSleepLogs,
    SleepLogs
    
}
}

export default UserSleep
