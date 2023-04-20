// import { border } from '@mui/system'
import React, { FC, useState } from 'react'
import { RadioType } from '../lib/type'
import Label from '../components/Label'
import { useRecoilValue } from 'recoil'
import { habitItemState } from '../state/dataState'

interface CycleProps {
  data: RadioType[]
  radioHandler: any
}

const Cycle: FC<CycleProps> = ({ data, radioHandler }) => {
  const [selectValue, setSelectValue] = useState('Morning')
  const habit = useRecoilValue(habitItemState)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectValue(event.target.value)
    radioHandler(event.target.value)
  }
  const selectedBgColor = habit?.color?.color || '#4CFCE1'
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
            }}
            className="rounded-[10px] px-[12px] py-[8px] pl-[35px] bg-no-repeat bg-[left_12px_center] bg-[#d9d9d9] peer-checked:bg-[#fff]"
            htmlFor={'radio' + data.id}>
            {data.text}
          </label>
        </div>
      ))}
    </div>
  )
}

export default Cycle
