import { useFieldArray } from "react-hook-form"
import {  Form } from "../../types"
import { Button, Flex, Text } from "@fcc/ui"
import { PersonCalendarView } from "../PersonCalendar/view"
import { defaultPersonCalendar } from "../../constants"

export const CalendarsView = () => {
  const {fields, append} = useFieldArray<Form>({name: 'calendars'})

  const onAdd = () => append(defaultPersonCalendar)

  return (
    <Flex direction='column' gap='s3'>
      <Text size='xl' weight="bold" >Список графиков</Text>
      {fields.map((_, i) => (<PersonCalendarView key={i} fieldPrefix={`calendars.${i}.`} />))}
      <Button design="outline" onClick={onAdd}>Добавить график</Button>
    </Flex>
  )
}