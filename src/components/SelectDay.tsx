import React, { FC } from 'react'

const SelectDay: FC = () => {
  return (
    <div className="mx-[-4px]">
      <div
        className="relative pt-[8px] inline-block mx-[4px]"
        style={{ width: 'calc((100% / 7) - 8px)' }}>
        {/* 선택시 요일버튼 상단에 뜨는 불릿 */}
        <i className="absolute block w-[4px] h-[4px] bg-[#4CFCE1] radius-[4px] top-0 left-[18px]"></i>
        {/* //선택시 요일버튼 상단에 뜨는 불릿 */}
        {/* 오늘 버튼엔 bg-[#4CFCE1] 클래스 추가 */}
        <button className="w-full h-[40px] rounded-[10px] border-[#d9d9d9] border border-solid text-[#1E1E1E] font-bold text-[14px] bg-[#4CFCE1]">
          월
        </button>
        {/* //오늘 버튼엔 bg-[#4CFCE1] 클래스 추가 */}
        <span className="block text-center text-[#d9d9d9] text-[14px]">1</span>
      </div>

      <div
        className="relative pt-[8px] inline-block mx-[4px]"
        style={{ width: 'calc((100% / 7) - 8px)' }}>
        <button className="w-full h-[40px] rounded-[10px] border-[#d9d9d9] border border-solid text-[#1E1E1E] font-bold text-[14px]">
          화
        </button>
        <span className="block text-center text-[#d9d9d9] text-[14px]">2</span>
      </div>

      <div
        className="relative pt-[8px] inline-block mx-[4px]"
        style={{ width: 'calc((100% / 7) - 8px)' }}>
        <button className="w-full h-[40px] rounded-[10px] border-[#d9d9d9] border border-solid text-[#1E1E1E] font-bold text-[14px]">
          수
        </button>
        <span className="block text-center text-[#d9d9d9] text-[14px]">3</span>
      </div>

      <div
        className="relative pt-[8px] inline-block mx-[4px]"
        style={{ width: 'calc((100% / 7) - 8px)' }}>
        <button className="w-full h-[40px] rounded-[10px] border-[#d9d9d9] border border-solid text-[#1E1E1E] font-bold text-[14px]">
          목
        </button>
        <span className="block text-center text-[#d9d9d9] text-[14px]">4</span>
      </div>

      <div
        className="relative pt-[8px] inline-block mx-[4px]"
        style={{ width: 'calc((100% / 7) - 8px)' }}>
        <button className="w-full h-[40px] rounded-[10px] border-[#d9d9d9] border border-solid text-[#1E1E1E] font-bold text-[14px]">
          금
        </button>
        <span className="block text-center text-[#d9d9d9] text-[14px]">5</span>
      </div>

      <div
        className="relative pt-[8px] inline-block mx-[4px]"
        style={{ width: 'calc((100% / 7) - 8px)' }}>
        <button className="w-full h-[40px] rounded-[10px] border-[#d9d9d9] border border-solid text-[#1E1E1E] font-bold text-[14px]">
          토
        </button>
        <span className="block text-center text-[#d9d9d9] text-[14px]">6</span>
      </div>

      <div
        className="relative pt-[8px] inline-block mx-[4px]"
        style={{ width: 'calc((100% / 7) - 8px)' }}>
        <button className="w-full h-[40px] rounded-[10px] border-[#d9d9d9] border border-solid text-[#1E1E1E] font-bold text-[14px]">
          일
        </button>
        <span className="block text-center text-[#d9d9d9] text-[14px]">7</span>
      </div>
    </div>
  )
}

export default SelectDay
