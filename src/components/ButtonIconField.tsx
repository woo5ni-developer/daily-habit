import React, { FC } from 'react'
import { IconContext } from 'react-icons'
import { IconFieldType } from '../lib/type'

interface ButtonIconFieldProps {
  data: IconFieldType[]
  handleClick: (icon: IconFieldType) => void
}

const ButtonColorField: FC<ButtonIconFieldProps> = ({ data, handleClick }) => {
  // logic
  const BtnHandler = (icon: IconFieldType): void => {
    handleClick(icon)
  }
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
    <div style={iconField.container}>
      {data.map((icon, idx) => (
        <button
          key={idx}
          type="button"
          className="w-[30px] h-[30px] rounded-[10px] bg-red-500"
          onClick={() => BtnHandler(icon)}>
          <IconContext.Provider value={{ size: '30px' }}>
            {React.createElement(icon.icon)}
          </IconContext.Provider>
        </button>
      ))}
    </div>
  )
}
export default ButtonColorField
