import React from 'react'

import avatar from '../assets/img/avatar.png'

export const QueryCard = ({query}) => {
  return (
    <div className='flex mx-10 rounded-md px-7 py-3 text-bg gap-6 mb-7' style={{backgroundColor: '#D9D9D9'}}>
        <div className='usr-avatar'>
            <img src={avatar} alt="user image" className='pt-1 w-7'/>
        </div>
        <div className='usr-query'>
            <h2 className='font-semibold text-lg'>{query.query}</h2>
            <p className='mb-4' style={{color: '#313131cc'}}>{query.queryDesc}</p>
            <p className='font-semibold text-xs' style={{color: '#313131cc'}}>01/01/2021</p>
        </div>
    </div>
  )
}
