import React, { FC } from 'react'

interface Props {
  text: string
  labelName: string
}

const Label: FC<Props> = ({ text, labelName }) => {
  return (
    <label className="text-lg block pb-4" htmlFor={labelName}>
      {text}
    </label>
  )
}

export default Label
