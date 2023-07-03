import Hello from './views/Hello';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello color="blue" name="Jin" />
    </Wrapper>
  );
}

export default App;