import './App.scss';
import { Greeting } from './components/Greeting';
import { Wrapper } from './components/Wrapper';
import { Counter } from './components/Counter';
import { Area } from './components/Area';
import { Button } from './components/Button';
import { ControlPanel } from './components/ControlPanel';
import { Array } from './components/Array';

export const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Hello world!</h1>
      </header>
      <Wrapper>
        <Greeting name="jin"/>
      </Wrapper>
      <Counter />
      <Area />
      <Button name="hello"/>
      <ControlPanel name="jin" isLoggedIn={true}/>
      <ControlPanel isLoggedIn={false}/>
      <Array />
    </div>
  );
}