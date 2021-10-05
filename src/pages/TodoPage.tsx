import React from "react";
import todo from "../store/TodoStore";
import {observer} from "mobx-react-lite";


const TodoPage = observer(() => {
    return (
        <div>
            <button onClick={() => todo.fetchTodos()}>Fetch todo</button>
            <table>
                {todo.todos.map(t =>
                    <tr className="todo" key={t.id}>
                        <td>
                            <input type="checkbox" checked={t.completed} onChange={() => todo.completeTodo(t.id)}/>
                        </td>
                        <td>
                            {t.title}
                        </td>
                        <td>
                            <button onClick={() => todo.removeTodo(t.id)}>X</button>
                        </td>
                    </tr>
                )}
            </table>
        </div>
    );
})
export default TodoPage;