import React, { FC, useState } from 'react'
import { IconContext } from 'react-icons'
import { ColorType, IconFieldType } from '../lib/type'
import Label from './Label'

interface ButtonIconFieldProps {
  data: IconFieldType[]
  handleClick: (icon: IconFieldType) => void
  color: ColorType
}

const ButtonColorField: FC<ButtonIconFieldProps> = ({ data, handleClick, color }) => {
  // logic

  //state
  const [selectedIcon, setSelectedIcon] = useState<IconFieldType>(data[0])

  const handleIconClick = (icon: IconFieldType): void => {
    setSelectedIcon(icon)
    handleClick(icon)
  }
  const iconField = {
    container: {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(9, 1fr)',
      gridTemplateRows: 'repeat(4, 1fr)',
      gap: '6px',
      gridAutoFlow: 'column',
    },
  }
  const isChecked = (icon: IconFieldType): boolean => {
    return icon.name === selectedIcon.name
  }
  // view
  return (
    <div>
      <Label text="아이콘" labelName="icon" />
      <div style={iconField.container}>
        {data.map((icon, idx) => (
          <button
            key={idx}
            type="button"
            style={{
              backgroundColor: isChecked(icon) ? color.color : '',
            }}
            className="w-[30px] h-[30px] rounded-[10px]"
            onClick={() => {
              handleIconClick(icon)
            }}>
            <IconContext.Provider value={{ size: '30px', style: { padding: '3px' } }}>
              {React.createElement(icon.icon)}
            </IconContext.Provider>
          </button>
        ))}
      </div>
    </div>
  )
}
export default ButtonColorField
