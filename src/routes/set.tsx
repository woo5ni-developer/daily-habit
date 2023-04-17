import React, { FC } from 'react'
import ButtonColorField from '../components/ButtonColorField'
import HabitTerm from '../components/HabitTerm'
import InputField from '../components/InputField'
import Title from '../components/Title'
import BackButton from '../components/BackButton'
import Cycle from '../components/Cycle'
import { colorList, radioList } from '../data/response'
import { ColorType } from '../lib/type'

const Set: FC = () => {
  const SelectColor = (color: ColorType): void => {
    console.log(color.color)
  }
  const radioHandler = (selectValue: string): void => {
    console.log('selectValue ' + selectValue)
  }
  return (
    <div>
      <Title text="New Habit" />
      <BackButton />
      <ButtonColorField data={colorList} handleClick={SelectColor} />
      <InputField />
      <Cycle data={radioList} SelectColor={SelectColor} radioHandler={radioHandler} />
      <HabitTerm />
    </div>
  )
}

export default Set
