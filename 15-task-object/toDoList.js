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

  add: function (title, priority) {
    const generateId = () => {
      return this.tasks.length + 1;
    };

    this.tasks.push({ title, id: generateId(), priority });
  },

  del: function (id) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      return console.log(`Задачи с id: ${id} не существует`);
    }

    this.tasks.splice(taskIndex, 1);
  },

  // использую обьект для того чтобы можно было выбирать определенный элемент без привязки к обязательности
  update: function (id, { newTitle, newPriority }) {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      return console.log(`Задачи с id: ${id} не существует`);
    }

    if (newTitle) {
      task.title = newTitle;
    }
    if (newPriority) {
      task.priority = newPriority;
    }
  },

  sort: function (params = "id", isAscending = true) {
    this.tasks.sort((a, b) =>
      isAscending ? a[params] - b[params] : b[params] - a[params]
    );
  },
};

toDoList.add("Name3", 5);
// toDoList.del(2);
toDoList.update(3, { newPriority: 9 });
toDoList.update(1, { newPriority: 6 });
toDoList.sort("priority", false);
toDoList.add("Name4", 8);
toDoList.sort("id");
toDoList.sort();
