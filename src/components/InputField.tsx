// import { border } from '@mui/system'
import React, { FC } from 'react'
import Label from '../components/Label'
import { useState } from 'react'

interface InputFieldProps {
  onChange: (value: string) => void
}

const InputField: FC<InputFieldProps> = ({ onChange }) => {
  const [inputValue, setInputValue] = useState('')

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <div>
      <Label text="습관이름" labelName="name" />
      <input
        type="text"
        className="rounded-[10px] w-full h-[40px] bg-[#f7f7f7] text-[#b6b6b6] px-[16px] mt-[10px]"
        placeholder="습관이름을 입력하세요."
        id="name"
        onChange={inputChange}
      />
    </div>
  )
}

export default InputField
