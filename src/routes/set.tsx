import React, { FC } from 'react'
import ButtonColorField from '../components/ButtonColorField'
import HabitTerm from '../components/HabitTerm'
import { colorList } from '../data/response'
import { ColorType } from '../lib/type'

const Set: FC = () => {
  const SelectColor = (color: ColorType): void => {
    console.log(color.color)
  }
  return (
    <div className="text-red-600">
      Set
      <ButtonColorField data={colorList} handleClick={SelectColor} />
      <HabitTerm />
    </div>
  )
}

export default Set
