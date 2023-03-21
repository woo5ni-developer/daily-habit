import React, { FC } from 'react'
import ButtonColorField from '../components/ButtonColorField'
import HabitTerm from '../components/HabitTerm'
import InputField from '../components/InputField'
import Title from '../components/Title'
import BackButton from '../components/BackButton'
import Cycle from '../components/Cycle'
import { colorList } from '../data/response'
import { ColorType } from '../lib/type'
import ButtonIconField from '../components/ButtonIconField'

const Set: FC = () => {
  const SelectColor = (color: ColorType): void => {
    console.log(color.color)
  }
  return (
    <div>
      <Title text="New Habit" />
      <BackButton />
      <ButtonColorField data={colorList} handleClick={SelectColor} />
      <ButtonIconField />
      <InputField />
      <Cycle />
      <HabitTerm />
    </div>
  )
}

export default Set
