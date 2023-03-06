import React, { FC } from 'react'
import { ColorType } from '../lib/type'

interface ButtonColorFieldProps {
  data: ColorType[]
  handleClick: (color: ColorType) => void
}

const ButtonColorField: FC<ButtonColorFieldProps> = ({ data, handleClick }) => {
  // logic
  // view
  return (
    <ul className="grid grid-cols-8 gap-2.5 px-4">
      {data.map((color, idx) => (
        <li key={idx} className="w-7.5 h-7.5">
          <button
            type="button"
            className="w-full h-full rounded-full"
            aria-label="색상 선택"
            style={{ background: color.color }}
            onClick={() => handleClick(color)}></button>
        </li>
      ))}
    </ul>
  )
}
export default ButtonColorField
