import { FormContainer, MinutesAmountInput, TaskInput } from './style';
import { CyclesContext } from '../../../../contexts/CyclexContext';
import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        id="task"
        {...register('task')}
        disabled={!!activeCycle}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1"></option>
        <option value="Projeto 2"></option>
        <option value="Projeto 3"></option>
        <option value="Projeto 4"></option>
      </datalist>

      <label htmlFor="minutesAmount  ">durante</label>
      <MinutesAmountInput
        {...register('minutesAmount', { valueAsNumber: true })}
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
      />

      <span>minutos.</span>
    </FormContainer>
  );
}
