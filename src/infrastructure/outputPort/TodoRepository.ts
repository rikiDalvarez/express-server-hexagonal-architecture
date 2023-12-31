import { Todo } from "../../domain/Todo";

export interface TodoRepository {
  findAll(): Promise<Todo[]>;
  createTodo(todo: Todo): Promise<Todo>;
  deleteTodo(id: string): Promise<Todo>;
  updateTodo(id: string): Promise<Todo>;
}
