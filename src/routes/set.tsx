import React, { FC } from 'react'
import ButtonColorField from '../components/ButtonColorField'
import HabitTerm from '../components/HabitTerm'

const Set: FC = () => {
  return (
    <div className="text-red-600">
      Set
      <ButtonColorField />
      <HabitTerm />
    </div>
  )
}

export default Set
