import React, { FC } from 'react'
import { ColorType } from '../lib/type'

interface ButtonColorFieldProps {
  data: ColorType[]
}
const ButtonColorField: FC<ButtonColorFieldProps> = ({ data }) => {
  // logic

  // view
  return (
    <ul className="grid grid-cols-8 gap-2.5 px-4">
      {data.map((color, idx) => (
        <li key={idx} className="w-7.5 h-7.5">
          <button
            type="button"
            className="w-full h-full rounded-full"
            aria-label="색상선택"
            style={{ background: color.color }}></button>
        </li>
      ))}
    </ul>
  )
}
export default ButtonColorField
