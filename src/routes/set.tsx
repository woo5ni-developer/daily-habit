import React, { FC } from 'react'
import ButtonColorField from '../components/ButtonColorField'
import HabitTerm from '../components/HabitTerm'
import InputField from '../components/InputField'
import { colorList } from '../data/response'
import { ColorType } from '../lib/type'

const Set: FC = () => {
  const SelectColor = (color: ColorType): void => {
    console.log(color.color)
  }
  return (
    <div>
      <ButtonColorField data={colorList} handleClick={SelectColor} />
      <InputField />
      <HabitTerm />
    </div>
  )
}

export default Set
