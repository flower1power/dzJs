/*
 * Написать объект ToDoList,
 * который хранит в себе задачи {'title': 'Помыть посуду', id: 1, priority: 1} и имеет методы:
 * - Добавить задачу
 * - Удалить задачу по id
 * - Обновить имя или приоритет по id
 * - Отсортировать задачи по приоритету
 */

const toDoList = {
  tasks: [],
  addTask(data) {
    let message = `Ошибка входящих параметров`;
    if (!data) {
      return message;
    }
    const lastId = this.tasks.sort((a, b) => a.id - b.id).at(-1)?.id ?? 0;
    data.id = lastId + 1;
    this.tasks.push({ ...data });
    message = `Задача с id: ${data.id} успешно добавлена`;

    return message;
  },
  removeTaskById(id) {
    let message = "Ошибка входящих параметров";
    if (!id) {
      return message;
    }
    const isExitsts = this.tasks.some((task) => task.id === id);
    if (!isExitsts) {
      message = `Задача с id: ${id} - не найдена`;
      return message;
    }
    this.tasks = this.tasks.filter((task) => task.id !== id);
    message = `Задача с id: ${id} - успешно удалена`;
    return message;
  },
  updateTaskById(id, data) {
    let message = `Ошибка входящих параметров`;
    if (!id) {
      return message;
    }
    const index = this.tasks.findIndex((task) => task.id === id);
    message = `Задача с id: ${id} -`;
    if (index === -1) {
      message = `${message} не найдена`;
      return message;
    }

    const messageArray = [];
    for (const [key, value] of Object.entries(data)) {
      if (value) {
        messageArray.push(`${key} = ${value}`);
      }
    }

    this.tasks[index] = { ...this.tasks[index], ...data };
    message = `${message} обновлена, ${messageArray.join(", ")}`;
    return message;
  },
  sortTasksById(descSort = false) {
    return [...this.tasks].sort((task1, task2) =>
      descSort ? task2.id - task1.id : task1.id - task2.id,
    );
  },
};

// toDoList.addTask({ title: "Name1", priority: 1 });
// toDoList.addTask({ title: "Name2", priority: 5 });
// toDoList.addTask({ title: "Name3", priority: 6 });
// toDoList.removeTaskById(2);
// console.log(toDoList.updateTaskById(null, { priority: 9 }));
// toDoList.updateTaskById(1, { newPriority: 6 });
// toDoList.updateTaskById(3, { priority: 9 });
// console.log(toDoList.sortTasksById(true));

// console.log(toDoList.tasks);
export default toDoList;
