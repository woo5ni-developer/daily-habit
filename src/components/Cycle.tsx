// import { border } from '@mui/system'
import React, { FC, useState } from 'react'
import { RadioType } from '../lib/type'
import Label from '../components/Label'
import styled from 'styled-components'

interface CycleProps {
  data: RadioType[]
  radioHandler: any
  SelectColor: any
}

const Cycle: FC<CycleProps> = ({ data, radioHandler, SelectColor }) => {
  const RadioLabel = styled.label``
  const RadioInput = styled.input`
    &:checked + ${RadioLabel} {
      background-color: ${SelectColor.color};
    }
    &:focus + ${RadioLabel} {
      outline: 1px solid #ffffff;
    }
  `
  const [selectValue, setSelectValue] = useState('Morning')

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectValue(event.target.value)
    radioHandler(event.target.value)
  }
  return (
    <div>
      <Label text="당신은  하루 중 언제 이 습관을 하는 게 좋은가요?" labelName="term" />
      {data.map((data) => (
        <div key={data.id} className="inline-flex relative m-[5px] radio-button">
          <RadioInput
            type="radio"
            id={'radio' + data.id}
            className="opacity-[0] absolute inset-0"
            name="term"
            value={data.text}
            onChange={onChange}
          />
          <RadioLabel
            style={{
              backgroundImage: `url(${data.path})`,
              backgroundSize: data.bgWidth,
            }}
            className="rounded-[10px] px-[12px] py-[8px] pl-[35px] bg-no-repeat bg-[left_12px_center] bg-[#d9d9d9]"
            htmlFor={'radio' + data.id}>
            {data.text}
          </RadioLabel>
        </div>
      ))}
    </div>
  )
}

export default Cycle
