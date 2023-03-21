import React, { FC } from 'react'

interface Props {
  text: string
  labelName: string
}

const Label: FC<Props> = ({ text, labelName }) => {
  return (
    <label className="text-[18px] text-[#1E1E1E] block" htmlFor={labelName}>
      {text}
    </label>
  )
}

export default Label
