// import { border } from '@mui/system'
import React, { FC } from 'react'
import Label from '../components/Label'

const InputField: FC = () => {
  return (
    <div>
      <Label text="당신은  하루 중 언제 이 습관을 하는 게 좋은가요?" labelName="when" />
      <div className="rounded-[10px] px-[12px] py-[8px] bg-[#d9d9d9] inline-block relative">
        <input type="radio" id="radio01" className="opacity-[0] absolute inset-0" />
        <label htmlFor="radio01">Morning</label>
      </div>
    </div>
  )
}

export default InputField
