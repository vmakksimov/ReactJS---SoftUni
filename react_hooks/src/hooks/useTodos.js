const baseUrl = 'http://localhost:3030/jsonstore/todos'

export const useTodos = () => {

    const removeTodo = async (todoId) => {
        const res = await fetch(`${baseUrl}/${todoId}`, {
            method: 'DELETE',
        })
        return await res.json()
    }

    return {
        removeTodo: removeTodo
    }
}