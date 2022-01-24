export async function getTodosByCount<T>(
  request: RequestInfo
  ): Promise<T> {
    const response = await fetch(request);
    const body = await response.json();
    return body;
  }
  
  interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  
  const data = getTodosByCount<Todo[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );

  console.log(data);