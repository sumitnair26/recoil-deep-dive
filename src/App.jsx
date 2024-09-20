import { RecoilRoot } from "recoil"
import { Appbar } from "./components/Appbar"
import { Todo } from "./components/Todo"

function App() {
  return (
    <>
      <RecoilRoot>
        <Appbar />
        <hr />
        <Todo id={1} />
        <Todo id={2} />
        <Todo id={2} />
        <Todo id={2} />
      </RecoilRoot>
    </>
  )
}

export default App
