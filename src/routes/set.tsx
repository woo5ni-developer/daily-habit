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
import Button from '@mui/material/Button'

const Set: FC = () => {
  const [habit, setHabitItem] = useRecoilState(habitItemState)
  const [selectColor, setSelectColor] = useState<ColorType>(colorList[0])
  const [selectIcon, setSelectIcon] = useState<IconFieldType>(iconList[0])
  const [inputValue, setInputValue] = useState('')

  const habitParam = (): void => {
    console.log('habitParam')
    setHabitItem({
      id: 0,
      title: inputValue,
      icon: selectIcon,
      color: selectColor,
    })
  }
  const handleSelectColor = (color: ColorType): void => {
    setSelectColor(color)
  }
  const radioHandler = (selectValue: string): void => {
    console.log(selectValue)
  }
  const handleSelectIcon = (icon: IconFieldType): void => {
    // setHabitItem()
    setSelectIcon(icon)
    console.log('여기야!!', icon.name)
  }
  const handleInputChange = (value: string) => {
    setInputValue(value)
  }
  return (
    <div>
      <Title text="New Habit" />
      <BackButton />
      <div className="mt-6">
        <InputField onChange={handleInputChange} />
      </div>
      <div className="mt-6">
        <ButtonColorField data={colorList} handleClick={handleSelectColor} />
      </div>
      <div className="mt-6">
        <ButtonIconField data={iconList} handleClick={handleSelectIcon} />
      </div>
      <div className="mt-6">
        <Cycle data={radioList} radioHandler={radioHandler} />
      </div>
      <div className="mt-6">
        <HabitTerm />
      </div>
      <div className="mt-6">
        <Button
          variant="contained"
          fullWidth={true}
          size="large"
          className="!py-3 !text-2xl !rounded-3xl !normal-case !bg-dh-navy"
          onClick={habitParam}>
          Let’s Start
        </Button>
      </div>
    </div>
  )
}

export default Set
