import React, { FC, useState } from 'react'
import { ColorType } from '../lib/type'
import Label from './Label'
interface ButtonColorFieldProps {
  data: ColorType[]
  handleClick: (color: ColorType) => void
}

const ButtonColorField: FC<ButtonColorFieldProps> = ({ data, handleClick }) => {
  // logic
  const [select, setSelect] = useState<ColorType>(data[0])
  const BtnHandler = (color: ColorType): void => {
    setSelect(color)
    handleClick(color)
  }
  // view
  return (
    <div>
      <Label text="색상" labelName="Color" />
      <ul className="grid grid-cols-8 gap-2.5 px-4">
        {data.map((color, idx) => (
          <li key={idx} className="w-7.5 h-7.5 relative">
            {select?.id === color.id && (
              <i className="block w-full h-full rounded-full absolute" aria-label="색상 선택 됨">
                <img
                  src="./images/icon-check.svg"
                  alt="체크 이미지"
                  className="w-full h-full rounded-full"
                />
              </i>
            )}
            <button
              type="button"
              className="w-full h-full rounded-full"
              aria-label="색상 선택"
              style={{ background: color.color }}
              onClick={() => BtnHandler(color)}></button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default ButtonColorField
