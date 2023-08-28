// import { border } from '@mui/system'
import React, { FC, useState } from 'react'
import { ColorType, RadioType } from '../lib/type'
import Label from '../components/Label'
interface CycleProps {
  data: RadioType[]
  radioHandler: (data: string) => void
  color: ColorType
}

const Cycle: FC<CycleProps> = ({ data, radioHandler, color }) => {
  const [selectValue, setSelectValue] = useState('Morning')

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectValue(event.target.value)
    radioHandler(event.target.value)
  }
  const checkedStyle = {
    backgroundColor: color.color,
  }
  return (
    <div>
      <Label text="당신은  하루 중 언제 이 습관을 하는 게 좋은가요?" labelName="term" />
      {data.map((data) => (
        <div key={data.id} className="inline-flex relative m-[5px] radio-button">
          <input
            type="radio"
            id={'radio' + data.id}
            className="opacity-[0] absolute inset-0 peer"
            name="term"
            value={data.text}
            onChange={onChange}
          />
          <label
            style={{
              backgroundImage: `url(${data.path})`,
              backgroundSize: data.bgWidth,
              ...(selectValue === data.text && checkedStyle),
            }}
            className="rounded-[10px] px-[12px] py-[8px] pl-[35px] bg-no-repeat bg-[left_12px_center] bg-[#d9d9d9]"
            htmlFor={'radio' + data.id}>
            {data.text}
          </label>
        </div>
      ))}
    </div>
  )
}

export default Cycle
