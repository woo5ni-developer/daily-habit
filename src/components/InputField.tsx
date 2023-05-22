// import { border } from '@mui/system'
import React, { FC } from 'react'
import Label from '../components/Label'

interface InputFieldProps {
  onChange: (value: string) => void
}

const InputField: FC<InputFieldProps> = ({ onChange }) => {
  const inputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value)
  }

  return (
    <div>
      <Label text="습관이름" labelName="name" />
      <input
        type="text"
        className="text-lg rounded-xl w-full bg-dh-gray-200 px-4 py-2"
        placeholder="습관이름을 입력하세요."
        id="name"
        onChange={inputChange}
      />
    </div>
  )
}

export default InputField
