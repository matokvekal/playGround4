import Todos from "./Components/Todos";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
function App() {
  
  return (
    <>
      <RecoilRoot>
      <header></header>
      <Todos />
      </RecoilRoot>
    </>
  );
}

export default App;
