import toDoList from "../15-task-object/toDoList.js";

/*
 * Возьмите объект из предыдущего домашнего задания и последовательно
 * примените все методы его на новый объект
 */

const newTask = {
  tasks: [
    {
      id: 1,
      title: "test",
      description: "test description",
      priority: 1,
    },
  ],
};

const addNewTask = toDoList.addTask.bind(newTask);
addNewTask({ title: "Name2", priority: 5, description: "test" });
addNewTask({ title: "Name3", priority: 5, description: "test" });
const delNewTask = toDoList.removeTaskById.bind(newTask);
delNewTask(2);
const updateNewTask = toDoList.updateTaskById.bind(newTask);
updateNewTask(3, { priority: 9 });
const sortNewTask = toDoList.sortTasksById.bind(newTask);
console.log(sortNewTask(true));
console.log(newTask);
