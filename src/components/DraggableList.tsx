import { useDrag } from '@use-gesture/react'
import React, { FC, useRef } from 'react'
import clamp from 'lodash.clamp'
import swap from 'lodash-move'
import { useSprings, animated } from '@react-spring/web'
import styles from '../styles.module.css'

const fn =
  (order: number[], active = false, originalIndex = 0, curIndex = 0, x = 0) =>
    (index: number) =>
      active && index === originalIndex
        ? {
          x: curIndex * 100 + x,
          scale: 1.1,
          zIndex: 1,
          shadow: 15,
          immediate: (key: string) => key === 'x' || key === 'zIndex',
        }
        : {
          x: order.indexOf(index) * 100,
          scale: 1,
          zIndex: 0,
          shadow: 1,
          immediate: false,
        }

interface DraggableListProps {
  items: string[]
}

const DraggableList: FC<DraggableListProps> = ({ items }) => {
  // logic
  const order = useRef(items.map((_, index) => index)) // Store indicies as a local ref, this represents the item order
  const [springs, api] = useSprings(items.length, fn(order.current)) // Create springs, each corresponds to an item, controlling its transform, scale, etc.
  const bind = useDrag(({ args: [originalIndex], active, movement: [x,] }) => {
    const curIndex = order.current.indexOf(originalIndex)
    const curRow = clamp(Math.round((curIndex * 100 + x) / 100), 0, items.length - 1)
    const newOrder = swap(order.current, curIndex, curRow)
    api.start(fn(newOrder, active, originalIndex, curIndex, x)) // Feed springs new style data, they'll animate the view without causing a single render
    if (!active) order.current = newOrder
  })

  // view
  return (
    <div className={styles.content} style={{ width: items.length * 100 }}>
      {springs.map(({ zIndex, shadow, x, scale }, i) => (
        <animated.div
          {...bind(i)}
          key={i}
          style={{
            zIndex,
            boxShadow: shadow.to((s) => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
            x,
            scale,
          }}>
          {items[i]}
        </animated.div>
      ))}
    </div>
  )
}

export default DraggableList
