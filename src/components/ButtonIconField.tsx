import React, { FC, useState } from 'react'
import { IconContext } from 'react-icons'
import { useRecoilValue } from 'recoil'
import { IconFieldType } from '../lib/type'
import { habitItemState } from '../state/dataState'
import Label from './Label'

interface ButtonIconFieldProps {
  data: IconFieldType[]
  handleClick: (icon: IconFieldType) => void
}

const ButtonColorField: FC<ButtonIconFieldProps> = ({ data, handleClick }) => {
  // logic

  //state
  const [selectedIcon, setSelectedIcon] = useState<IconFieldType>(data[0])

  // Recoil state
  const habit = useRecoilValue(habitItemState)

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
  const isChecked = (icon: IconFieldType) => {
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
              backgroundColor: isChecked(icon) ? habit.color.color : '',
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
