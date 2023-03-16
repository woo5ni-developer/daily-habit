import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton: FC = () => {
  const navigate = useNavigate()
  const goBack = (): void => {
    navigate(-1)
  }
  return (
    <button
      className="absolute px-[24px] py-[35px] top-0 left-0 w-[11px] h-[18px] block"
      onClick={goBack}>
      <span className="overflow-hidden inline-block relative z-[-1] border-0 w-px h-px">
        뒤로가기
      </span>
    </button>
  )
}
export default BackButton
