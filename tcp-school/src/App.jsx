import './App.scss';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Greeting } from './components/Greeting';
import { Wrapper } from './components/Wrapper';
import { Counter } from './components/Counter';
import { Area } from './components/Area';
import { Button } from './components/Button';
import { ControlPanel } from './components/ControlPanel';
import { Array } from './components/Array';
import { StateHook } from './components/hooks/StateHook';
import { ReducerHook } from './components/hooks/ReducerHook';
import { ContextHook } from './components/hooks/ContextHook';
import { About } from './components/routes/About';
import { Home } from './components/routes/Home';
import { Menu } from './components/routes/Menu';
import { PostIndex } from './components/routes/post/PostIndex';

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
      <StateHook />
      <ReducerHook />
      <ContextHook />
      <h5>React Router</h5>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
      <PostIndex />
      <Menu />
      <Outlet />
    </div>
  );
}