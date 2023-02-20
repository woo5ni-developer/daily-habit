import React, { FC } from 'react'
import ButtonColorField from '../components/ButtonColorField'
import HabitTerm from '../components/HabitTerm'
import { colorList } from '../data/response'

const Set: FC = () => {
  return (
    <div className="text-red-600">
      Set
      <ButtonColorField data={colorList} />
      <HabitTerm />
    </div>
  )
}

export default Set
