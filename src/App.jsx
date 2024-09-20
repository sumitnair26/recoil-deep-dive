import { RecoilRoot } from "recoil"
import { Appbar } from "./components/Appbar"
import { Todo } from "./components/Todo"
import { TodoSelectorFamily } from "./components/TodoSelectorFamily"

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
        <hr />
        <TodoSelectorFamily id={4} />
      </RecoilRoot>
    </>
  )
}

export default App
