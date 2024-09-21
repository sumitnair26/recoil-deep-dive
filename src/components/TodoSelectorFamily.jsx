import { useRecoilState, useRecoilStateLoadable, useRecoilValue } from "recoil"
import { todosSecAtomFamily } from "../atoms"

export const TodoSelectorFamily = ({id}) => {
   // const getCurrentTodo = useRecoilValue(todoSelecAtomFamily(id))
    const [getCurrentTodo, setTodo] = useRecoilStateLoadable(todosSecAtomFamily(id));
    if (getCurrentTodo.state === "loading") {
        return <div>
            Loading..... 
        </div>
    } else if(getCurrentTodo.state === "hasValue") {
        return <>
            <h1>{getCurrentTodo.contents.title}</h1>
            <h2>{getCurrentTodo.contents.description}</h2>
        </>
    }
}