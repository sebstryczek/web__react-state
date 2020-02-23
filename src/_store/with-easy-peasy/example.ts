import { createStore, action, Actions, Action, State } from 'easy-peasy';

type TodosModel = {
  items: string[],
  add: Action<TodosModel, string>,
}
export type StoreModel = {
  todos: TodosModel,
  todos2: TodosModel2,
}

const todos: TodosModel = {
  items: ['Create store', 'Wrap application', 'Use store'],
  add: action((state, payload) => {
    state.items.push(payload)
  })
};

type TodosModel2 = {
  items: string[],
  add: Action<TodosModel2, string>,
}
const todos2: TodosModel2 = {
  items: ['Create store', 'Wrap application', 'Use store'],
  add: action((state, payload) => {
    state.items.push(payload)
  })
};
const state: StoreModel = {
  todos: todos,
  todos2: todos2,
}

const store = createStore(state);

export default store;
