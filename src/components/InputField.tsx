// import { border } from '@mui/system'
import React, { FC } from 'react'
import Label from '../components/Label'
import { useState } from 'react'

const InputField: FC = () => {
  const [inputValue, setInputValue] = useState('')
  return (
    <div>
      <Label text="습관이름" labelName="name" />
      <input
        type="text"
        className="rounded-[10px] w-full h-[40px] bg-[#f7f7f7] text-[#b6b6b6] px-[16px] mt-[10px]"
        placeholder="습관이름을 입력하세요."
        id="name"
        onChange={(event) => {
          setInputValue(event.target.value)
          console.log(inputValue)
        }}
      />
    </div>
  )
}

export default InputField
