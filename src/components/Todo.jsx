import { useRecoilValue } from "recoil"
import { todosAtomFamily } from "../atoms";

export const Todo = ({id}) => {
    const currentTodo = useRecoilValue(todosAtomFamily(id));
    return <>
        <h1>{currentTodo.title}</h1>
        <h2>{currentTodo.description}</h2>
    </>
}