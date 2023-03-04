// import { border } from '@mui/system'
import React, { FC } from 'react'
import Label from '../components/Label'

const InputField: FC = () => {
  return (
    <div>
      <Label text="습관이름" labelName="name" />
      <input
        type="text"
        className="rounded-[10px] w-full h-[40px] bg-[#D9D9D9] opacity-20 text-[#b6b6b6] px-[16px] mt-[10px]"
        placeholder="습관이름을 입력하세요."
        id="name"
      />
    </div>
  )
}

export default InputField
