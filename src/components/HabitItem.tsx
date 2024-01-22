import React, { FC } from 'react'
import { habitItemType } from '../lib/type'
import { IconContext, IconType } from 'react-icons'

interface HabitItemProps {
  habit: habitItemType
  iconItem: IconType | ''
}

const HabitItem: FC<HabitItemProps> = ({ habit, iconItem }) => {
  //logic
  const handleEdit = (): void => {
    console.log('habit', habit)
  }
  // view
  return (
    <li
      className="pt-4 pb-4 pl-5 pr-5 rounded-xl flex items-center sibling:mt-2"
      style={{ background: habit.color?.color ?? '' }}>
      <IconContext.Provider value={{ size: '30px', style: { padding: '3px' } }}>
        {React.createElement(iconItem)}
      </IconContext.Provider>
      <p className="pl-4 text-lg font-bold">{habit.title ?? ''}</p>

      <div className='ml-auto'>
        <button type='button' onClick={handleEdit}>edit</button>
        <button type='button'>delete</button>
      </div>
    </li>
  )
}

export default HabitItem
