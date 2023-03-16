import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton: FC = () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }
  return (
    <div>
      <button className="absolute px-[24px] py-[35px] top-0 left-0" onClick={goBack}>
        &#60;
      </button>
    </div>
  )
}

export default BackButton
