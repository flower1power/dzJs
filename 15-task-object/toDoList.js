/*
 * Написать объект ToDoList,
 * который хранит в себе задачи {'title': 'Помыть посуду', id: 1, priority: 1} и имеет методы:
 * - Добавить задачу
 * - Удалить задачу по id
 * - Обновить имя или приоритет по id
 * - Отсортировать задачи по приоритету
 */

const toDoList = {
  tasks: [
    { title: "Name", id: 1, priority: 1 },
    { title: "Name2", id: 2, priority: 1 },
  ],

  add: function (dataTask) {
    if (!dataTask) {
      return "Ошибка в переданных данных";
    }

    const generateId = () => {
      return this.tasks.length + 1;
    };

    dataTask.id = generateId();

    this.tasks.push({ ...dataTask });
  },

  del: function (id) {
    if (!id) {
      return "Ошибка в переданных данных";
    }

    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      return console.log(`Задачи с id: ${id} не существует`);
    }

    this.tasks.splice(taskIndex, 1);
  },

  update: function (id, dataTask) {
    if (!id || !dataTask) {
      return "Ошибка в переданных данных";
    }

    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      return console.log(`Задачи с id: ${id} не существует`);
    }

    Object.keys(dataTask).forEach((key) => {
      if (key !== "id") {
        task[key] = dataTask[key];
      }
    });
  },

  sort: function (params = "id", isAscending = true) {
    this.tasks.sort((a, b) =>
      isAscending ? a[params] - b[params] : b[params] - a[params]
    );
  },
};

// toDoList.add({ title: "Name3", priority: 5 });
// toDoList.del(2);
// toDoList.update(null, { priority: 9 });
// toDoList.update(1, { newPriority: 6 });
// toDoList.sort("priority", false);
// toDoList.add("Name4", 8);
// toDoList.sort("id");
// toDoList.sort();
// console.log(toDoList.tasks);
