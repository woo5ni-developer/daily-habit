import React, { FC, useState } from 'react'
import ButtonColorField from '../components/ButtonColorField'
import HabitTerm from '../components/HabitTerm'
import InputField from '../components/InputField'
import Title from '../components/Title'
import BackButton from '../components/BackButton'
import Cycle from '../components/Cycle'
import { colorList, radioList, iconList } from '../data/response'
import { ColorType, IconFieldType } from '../lib/type'
import ButtonIconField from '../components/ButtonIconField'
import { useRecoilState } from 'recoil'
import { habitItemState } from '../state/dataState'

const Set: FC = () => {
  const [habit, setHabitItem] = useRecoilState(habitItemState)
  const [selectColor, setSelectColor] = useState<ColorType>()
  const [selectIcon, setSelectIcon] = useState<IconFieldType>()

  const habitParam = () => {
    setHabitItem({
      ...habit,
      id: 1,
      title: '',
      icon: selectIcon,
      color: selectColor,
    })

    console.log(habit)
  }
  const handleSelectColor = (color: ColorType): void => {
    setSelectColor(color)
    console.log()
  }
  const radioHandler = (selectValue: string): void => {
    console.log('selectValue ' + selectValue)
  }
  const handleSelectIcon = (icon: IconFieldType): void => {
    // setHabitItem()
    setSelectIcon(icon)
    console.log('여기야!!', icon.name)
  }
  const handleInputChange = (setInputValue: string) => {
    console.log('setInputValue' + setInputValue)
  }
  const SelectTerm = (value: Date): void => {
    console.log('period ' + value)
  }
  return (
    <div>
      <Title text="New Habit" />
      <BackButton />

      <div className="mt-[24px]">
        <InputField onChange={handleInputChange} />
      </div>
      <div className="mt-[24px]">
        <ButtonColorField data={colorList} handleClick={handleSelectColor} />
      </div>

      <div className="mt-[24px]">
        <ButtonIconField data={iconList} handleClick={handleSelectIcon} />
      </div>

      <div className="mt-[24px]">
        <Cycle data={radioList} radioHandler={radioHandler} />
      </div>

      <div className="mt-[24px]">
        <HabitTerm selectTerm={SelectTerm} />
      </div>

      <button type="button" onClick={() => habitParam()}>
        버튼
      </button>
    </div>
  )
}

export default Set
