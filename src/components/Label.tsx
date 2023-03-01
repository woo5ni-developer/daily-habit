import React, { FC } from 'react'

interface Props {
  text: string
}

const Label: FC<Props> = ({ text }) => {
  return <div className="text-[18px] text-[#1E1E1E]">{text}</div>
}

export default Label
