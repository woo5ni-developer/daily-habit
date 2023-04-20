import React, { FC } from 'react'
import ButtonColorField from '../components/ButtonColorField'
import HabitTerm from '../components/HabitTerm'
import InputField from '../components/InputField'
import Title from '../components/Title'
import BackButton from '../components/BackButton'
import Cycle from '../components/Cycle'
import { colorList, radioList, iconList } from '../data/response'
import { ColorType, IconFieldType } from '../lib/type'
import ButtonIconField from '../components/ButtonIconField'

const Set: FC = () => {
  const SelectColor = (color: ColorType): void => {
    console.log(color.color)
  }
  const radioHandler = (selectValue: string): void => {
    console.log('selectValue ' + selectValue)
  }
  const SelectIcon = (icon: IconFieldType): void => {
    console.log(icon.icon)
  }
  return (
    <div>
      <Title text="New Habit" />
      <BackButton />
      <ButtonColorField data={colorList} handleClick={SelectColor} />
      <ButtonIconField data={iconList} handleClick={SelectIcon} />
      <InputField />
      <Cycle data={radioList} SelectColor={SelectColor} radioHandler={radioHandler} />
      <HabitTerm />
    </div>
  )
}

export default Set
