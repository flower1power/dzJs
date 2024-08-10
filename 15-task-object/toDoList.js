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
  isValidData(data) {
    if (!data) {
      console.log("Данные не переданы");
      return false;
    }
    if (typeof data !== "object") {
      console.log("Переданные данные не являются объектом");
      return false;
    }
    return true;
  },
  getTaskById(taskId) {
    const task = this.tasks?.find(({ id }) => id === taskId) ?? null;
    if (!task) {
      console.log(`Задача с id ${taskId} еще не добавлена в ваш список дел.`);
    }
    return task;
  },
  addTask(data) {
    const isValid = this.isValidData(data);

    if (!isValid) {
      return this;
    }
    if (!this.tasks) {
      this.tasks = [];
    }
    if (!this.lastId) {
      this.lastId = 0;
    }

    this.tasks.push({
      ...data,
      id: ++this.lastId,
    });

    return this;
  },
  removeTask: function (id) {
    const task = this.getTaskById(id);
    if (task) {
      console.log(`Задача с id ${id} успешно удалена.`);
      this.tasks = this.tasks.filter((el) => el.id !== id);
    }
    return this;
  },

  updateTask(id, newData) {
    const isValid = this.isValidData(newData);
    if (!isValid) {
      return this;
    }
    const task = this.getTaskById(id);

    if (task) {
      console.log(`Задача с id ${id} успешно обновлена.`);
      Object.assign(task, { ...newData });
    }
    return this;
  },

  sortTasks: function (desc = false, sortBy = "id") {
    const ALLOW_KEYS = [...new Set(this.tasks.map(Object.keys).flat())];

    if (!ALLOW_KEYS.includes(sortBy)) {
      console.log(
        `Нет такого ключа, доступные ключи: [${ALLOW_KEYS.join(", ")}]`,
      );
      return;
    }

    this.tasks.sort(({ [sortBy]: a }, { [sortBy]: b }) =>
      desc ? b - a : a - b,
    );
  },
};

// toDoList.addTask({ title: "Name1", priority: 1 });
// toDoList.addTask({ title: "Name2", priority: 5 });
// toDoList.addTask({ title: "Name3", priority: 6 });
// toDoList.removeTask(2);
// toDoList.updateTask(null, { priority: 9 });
// // toDoList.updateTask(1, { newPriority: 6 });
// toDoList.updateTask(1, { priority: 9 });
//
// toDoList.sortTasks(true, "priority");

console.log(toDoList.tasks);
export default toDoList;
