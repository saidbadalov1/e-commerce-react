import { Close } from '@material-ui/icons'
import React, { useState } from 'react'

function Announce() {

    const [announceStyle, setAnnounceStyle] = useState('text-center mobile:text-left flex items-center fixed top-0 justify-center z-10 w-[100%]  bg-[#8a4af3] text-white font-bold')
    const handleClose = () => {
        setAnnounceStyle(announceStyle + ' hidden ' )
    }
  return (
    <div className={announceStyle}>
        <h2 className='text-center mobile:text-left mobile:text-[13px]'>Hurry up it's 40% off now!</h2>
        <Close onClick={handleClose} className='cursor-pointer'/>
    </div>
  )
}

export default Announce