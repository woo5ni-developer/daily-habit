import { border } from '@mui/system'
import React, { FC } from 'react'

const InputField: FC = () => {
  return (
    <div>
      <input
        type="text"
        className="rounded-[10px] w-full h-[40px] bg-neutral-300 px-[16px]"
        placeholder="습관이름을 입력하세요."
      />
    </div>
  )
}

export default InputField
