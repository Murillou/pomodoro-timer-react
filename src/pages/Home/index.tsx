import { useForm } from 'react-hook-form';
import { Play } from 'phosphor-react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { useState } from 'react';

import {
  Button,
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  TaskInput,
} from './style';

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  });

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
    };

    setCycles(state => [...state, newCycle]);
    setActiveCycleId(id);
    reset();
  }

  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId);

  const task = watch('task');
  const isSubmitDisabled = !task;

  return (
    <>
      <HomeContainer>
        <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
          <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput
              list="task-suggestions"
              placeholder="Dê um nome para o seu projeto"
              id="task"
              {...register('task')}
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
            />

            <span>minutos.</span>
          </FormContainer>

          <CountdownContainer>
            <span>0</span>
            <span>0</span>
            <Separator>:</Separator>
            <span>0</span>
            <span>0</span>
          </CountdownContainer>

          <Button disabled={isSubmitDisabled} type="submit">
            <Play size={24} /> Começar
          </Button>
        </form>
      </HomeContainer>
    </>
  );
}
