import { Play } from 'phosphor-react';
import {
  Button,
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  TaskInput,
} from './style';

export function Home() {
  return (
    <>
      <HomeContainer>
        <form action="">
          <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput placeholder="Dê um nome para o seu projeto" id="task" />

            <label htmlFor="minutesAmount  ">durante</label>
            <MinutesAmountInput
              type="number"
              id="minutesAmount"
              placeholder="00"
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

          <Button disabled type="submit">
            <Play size={24} /> Começar
          </Button>
        </form>
      </HomeContainer>
    </>
  );
}
