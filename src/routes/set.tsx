import React, { FC, useEffect, useState } from 'react'
import ButtonColorField from '../components/ButtonColorField'
import HabitTerm from '../components/HabitTerm'
import InputField from '../components/InputField'
import Title from '../components/Title'
import BackButton from '../components/BackButton'
import Cycle from '../components/Cycle'
import { colorList, radioList, iconList } from '../data/response'
import { ColorType, IconFieldType } from '../lib/type'
import ButtonIconField from '../components/ButtonIconField'
import { useRecoilState } from 'recoil'
import { habitListState } from '../state/dataState'
import Button from '@mui/material/Button'
import EastIcon from '@mui/icons-material/East'
import { initialTerm } from '../state/initialState'
import { useNavigate } from 'react-router-dom'

const Set: FC = () => {
  const navigate = useNavigate()

  const [habitList, setHabitList] = useRecoilState(habitListState)
  const [selectColor, setSelectColor] = useState<ColorType>(colorList[0])
  const [selectIcon, setSelectIcon] = useState<IconFieldType>(iconList[0])
  const [inputValue, setInputValue] = useState('')
  const [term, setTerm] = useState(initialTerm)

  const addHabit = (): void => {
    const newItem = {
      id: habitList.length,
      title: inputValue,
      icon: selectIcon,
      color: selectColor,
      term,
    }
    setHabitList([...habitList, newItem])

    navigate('/')
  }
  const handleSelectColor = (color: ColorType): void => {
    setSelectColor(color)
  }
  const radioHandler = (selectValue: string): void => {
    console.log(selectValue)
  }
  const handleSelectIcon = (icon: IconFieldType): void => {
    setSelectIcon(icon)
  }
  const handleInputChange = (value: string): void => {
    setInputValue(value)
  }

  const handleTerm = (data: string[]): void => {
    setTerm(data)
  }

  useEffect(() => {
    console.log('habitItem', habitList)
  }, [habitList])

  return (
    <div>
      <Title text="New Habit" />
      <BackButton />
      <div className="mt-6">
        <InputField onChange={handleInputChange} />
      </div>
      <div className="mt-6">
        <ButtonColorField data={colorList} handleClick={handleSelectColor} />
      </div>
      <div className="mt-6">
        <ButtonIconField data={iconList} handleClick={handleSelectIcon} color={selectColor} />
      </div>
      <div className="mt-6">
        <Cycle data={radioList} radioHandler={radioHandler} color={selectColor} />
      </div>
      <div className="mt-6">
        <HabitTerm handleChange={handleTerm} />
      </div>
      <div className="mt-6">
        <Button
          variant="contained"
          fullWidth={true}
          size="large"
          className="!py-3 !text-2xl !rounded-full !normal-case !bg-dh-navy !font-light"
          endIcon={<EastIcon className="!ml-5" />}
          onClick={addHabit}>
          Let’s Start
        </Button>
      </div>
    </div>
  )
}

export default Set
