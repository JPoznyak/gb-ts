export function getTodosByCount(count: number) {
    for (let i = 1; i < count; i++) {
        return fetch('https://jsonplaceholder.typicode.com/todos/' + i)
        .then(response => response.json())
        .then(json => console.log(json))
    }
}

