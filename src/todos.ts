// export function getTodosByCount(count: number) {
//     for (let i = 1; i < count; i++) {
//         return fetch('https://jsonplaceholder.typicode.com/todos/' + i)
//         .then(response => response.json())
//         .then(json => console.log(json))
//     }
// }


// export async function getTodosByCount(count: number) : Promise<any> {
//     for (let i = 1; i < count; i++) {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/' + i);
//         const body = await response.json();
//         return body;
//   }
// }

export async function getTodosByCount(count: number) {
  for(let i = 1; i <= count; i++) {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/"+ i);
    const body = await response.json();
    console.log(body);
  }
}