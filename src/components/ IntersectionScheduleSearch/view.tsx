import { useState } from 'react';
import { Flex, Whitespace, CssGrid, FormField, Input, Button, Text } from '@fcc/ui'
import { useForm, FormProvider, Controller } from 'react-hook-form'
import { Form } from '../../types';
import { findFreeSlots } from '../../utils/findFreeSlot';
import { defaultValues, validationRules } from '../../constants';
import { CalendarsView } from '../Calendars';


export const  IntersectionScheduleSearchView = () => {
  const [result, setResult] = useState<string | null>(null);
  const formMethods = useForm<Form>({
    defaultValues,
    mode: 'all'
  });

  const handleCalculate = (data: Form) => {
    const preparedArray = data.calendars.map<[number, number]>(({workday, weekend}) => [+workday, +weekend])

    const slots = findFreeSlots(preparedArray, +data.period)

    if (slots.length) {
      setResult(`Доступные дни для встречи: ${slots.join(', ')}`);
    } else {
      setResult('Пересечений не существует');
    }
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(handleCalculate)}>
      <Whitespace m='s10'>
        <CssGrid templateColumns='364px auto' gap='s5'>
          <CssGrid.Item alignSelf='start' >
            <Flex direction='column' gap='s5'>
              <CalendarsView/>
              <Controller
                name="period"
                rules={validationRules}
                render={({field, fieldState: {invalid}}) => (
                  <FormField>
                    <FormField.Label>
                      Укажите период поиска
                    </FormField.Label>
                    <FormField.Content>
                      <Input {...field} invalid={invalid}/>
                    </FormField.Content>
                  </FormField>
                )}
              ></Controller>
              <Button type='submit' design='primary' disabled={!formMethods.formState.isDirty || !formMethods.formState.isValid}>Начать поиск</Button>
            </Flex>
          </CssGrid.Item>
          {result ? (
          <CssGrid.Item>
            <Whitespace mb='s3'>
              <Text as='h2' size='xl' weight='bold'>Результат</Text>
            </Whitespace>
            <Text size='m' >{result}</Text>
          </CssGrid.Item>
          ) : null}
        </CssGrid>
      </Whitespace>
      </form>
    </FormProvider>
  )

}