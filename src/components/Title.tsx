import React, { FC } from 'react'

interface Props {
  text: string
}

const Title: FC<Props> = ({ text }) => {
  return <div className="text-[24px] text-[#1E1E1E] text-center font-bold">{text}</div>
}

export default Title
