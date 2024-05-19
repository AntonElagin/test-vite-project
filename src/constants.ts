import { Form, PersonCalendar } from "./types"

export const defaultPersonCalendar: PersonCalendar = {
  workday: '',
  weekend: '',
} 
export const defaultValues: Form = {
  calendars: [defaultPersonCalendar, defaultPersonCalendar],
  period: ''
}

export const validationRules = {
  required: true,
  min: 1,
  pattern: /\d+/
}