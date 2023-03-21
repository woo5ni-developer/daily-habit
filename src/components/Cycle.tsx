// import { border } from '@mui/system'
import React, { FC } from 'react'
import { RadioType } from '../lib/type'
import Label from '../components/Label'

interface Props {
  data: RadioType[]
}
const Cycle: FC<Props> = ({ data }) => {
  const RadioStyle = {}
  return (
    <div>
      <Label text="당신은  하루 중 언제 이 습관을 하는 게 좋은가요?" labelName="when" />
      {data.map((data) => (
        <div key={data.id} className="inline-flex relative m-[5px]">
          <input
            type="radio"
            id={'radio' + data.id}
            className="opacity-[0] absolute inset-0"
            name="when"
          />
          <label
            style={{ backgroundImage: `url(${data.path})` }}
            className="rounded-[10px] px-[12px] py-[8px] pl-[35px] bg-[#d9d9d9] bg-no-repeat bg-[left_12px_center]"
            htmlFor={'radio' + data.id}>
            {data.text}
          </label>
        </div>
      ))}
    </div>
  )
}

export default Cycle
