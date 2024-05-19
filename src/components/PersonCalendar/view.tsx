import { FC } from 'react';
import {Flex, FormField, Input} from '@fcc/ui';
import {Controller} from 'react-hook-form';
import { validationRules } from '../../constants';

interface Props {
  fieldPrefix?: string
}

export const PersonCalendarView: FC<Props> = ({ fieldPrefix = '' }) => {
  return (
    <Flex gap='s5'>
      <Controller rules={validationRules} name={`${fieldPrefix}workday`} render={({field, fieldState: {invalid}}) => (
        <FormField>
          <FormField.Label>Рабочие дни</FormField.Label>
          <FormField.Content>
            <Input {...field} invalid={invalid}></Input>
          </FormField.Content>
        </FormField>
      )}>
      </Controller>
      <Controller rules={validationRules} name={`${fieldPrefix}weekend`} render={({field, fieldState: {invalid}}) => (
        <FormField>
          <FormField.Label>Выходные</FormField.Label>
          <FormField.Content>
            <Input {...field} invalid={invalid}></Input>
          </FormField.Content>
        </FormField>
      )}>
      </Controller>
    </Flex>
  );
}