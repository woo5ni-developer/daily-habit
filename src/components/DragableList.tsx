import { useDrag } from '@use-gesture/react'
import React, { FC, useRef } from 'react'
import clamp from 'lodash.clamp'
// import swap from 'lodash-move'

const DragableList: FC = () => {
  // logic
  // const order = useRef(items.map((_, index) => index)) // Store indicies as a local ref, this represents the item order
  // const [springs, api] = useSprings(items.length, fn(order.current)) // Create springs, each corresponds to an item, controlling its transform, scale, etc.
  // const bind = useDrag(({ args: [originalIndex], active, movement: [, y] }) => {
  //   const curIndex = order.current.indexOf(originalIndex)
  //   const curRow = clamp(Math.round((curIndex * 100 + y) / 100), 0, items.length - 1)
  //   const newOrder = swap(order.current, curIndex, curRow)
  //   api.start(fn(newOrder, active, originalIndex, curIndex, y)) // Feed springs new style data, they'll animate the view without causing a single render
  //   if (!active) order.current = newOrder
  // })

  // view
  return (
    <div></div>
    // <div className={styles.content} style={{ height: items.length * 100 }}>
    //   {springs.map(({ zIndex, shadow, y, scale }, i) => (
    //     <animated.div
    //       {...bind(i)}
    //       key={i}
    //       style={{
    //         zIndex,
    //         boxShadow: shadow.to(s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
    //         y,
    //         scale,
    //       }}
    //       children={items[i]}
    //     />
    //   ))}
    // </div>
  )
}

export default DragableList
