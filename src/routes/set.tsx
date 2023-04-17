import React, { FC } from 'react'
import ButtonColorField from '../components/ButtonColorField'
import HabitTerm from '../components/HabitTerm'
import InputField from '../components/InputField'
import { colorList } from '../data/response'

const Set: FC = () => {
  return (
    <div>
      <InputField />
      <ButtonColorField data={colorList} />
      <HabitTerm />
    </div>
  )
}

export default Set
