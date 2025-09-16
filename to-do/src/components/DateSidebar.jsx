import React, { useState } from 'react'

const DateSidebar = () => {

  const [days] = useState(['1', '2', '3', '4', '5', '6', '7']);
  const today = new Date();

  
  return (
    <>
    <div className='days__container'>
        {days.map((day, index) => {
            const date = new Date(today);
            date.setDate(today.getDate() + index);
            return (
                <button key={day}>
                    {day} - {date.toLocaleDateString()}
                </button>
            );
        })}
    </div>
    </>
  )
}

export default DateSidebar