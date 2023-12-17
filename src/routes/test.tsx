import React, { FC } from 'react'
import DraggableList from '../components/DraggableList'

const Test: FC = () => {
  return (
    <div className="flex fill center">
      <DraggableList items={'Lorem ipsum dolor sit'.split(' ')} />
    </div>
  )
}

export default Test