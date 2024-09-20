import { useRecoilState, useRecoilValue } from "recoil"
import { todosSecAtomFamily } from "../atoms"

export const TodoSelectorFamily = ({id}) => {
   // const getCurrentTodo = useRecoilValue(todoSelecAtomFamily(id))
    const [getCurrentTodo, setTodo] = useRecoilState(todosSecAtomFamily(id));

    return <>
        <h1>{getCurrentTodo.title}</h1>
        <h2>{getCurrentTodo.description}</h2>
    </>
}