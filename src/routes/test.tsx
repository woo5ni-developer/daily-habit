import React, { FC } from 'react'
import DraggableList from '../components/DraggableList'

const Test: FC = () => {
  return (
    <div className="flex fill center">
      <DraggableList items={'Lorem'.split(' ')} />
      <div>
        <button type='button'>edit</button>
      </div>
    </div>
  )
}

export default Test