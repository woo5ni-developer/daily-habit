import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton: FC = () => {
  const navigate = useNavigate()
  const goBack = (): void => {
    navigate(-1)
  }
  const buttonBackgroundStyle = {
    backgroundImage: 'url("./images/arrow-left.png")',
    backgroundSize: '100% 100%',
  }
  return (
    <button
      style={buttonBackgroundStyle}
      className="absolute top-[33px] left-[19px] w-[22px] h-[22px] block"
      onClick={goBack}>
      <span className="overflow-hidden inline-block relative z-[-1] border-0 w-px h-px">
        뒤로가기
      </span>
    </button>
  )
}
export default BackButton
