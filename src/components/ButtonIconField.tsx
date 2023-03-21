import React, { FC, useState } from 'react'
import { FaSwimmer } from 'react-icons/fa'
import { GiMuscleUp } from 'react-icons/gi'

const ButtonColorField: FC = () => {
  // logic
  const iconField = {
    container: {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridTemplateRows: 'repeat(9, 1fr)',
      gap: '6px',
      'writing-mode': 'vertical-lr',
    },
  }
  // view
  return (
    <div style={iconField.container} className="writingMode-lr">
      <button type="button" className="w-[30px] h-[30px] rounded-[10px] bg-red-500">
        <FaSwimmer className="w-full h-full" />
      </button>
      <button type="button" className="w-[30px] h-[30px] rounded-[10px] bg-red-500">
        <GiMuscleUp className="w-full h-full" />
      </button>
    </div>
  )
}
export default ButtonColorField
