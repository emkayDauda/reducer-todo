export const ON_ADD_TODO = "ON_ADD_TODO";
export const ON_CLEAR_COMPLETED = "ON_CLEAR_COMPLETED";
export const ON_MARK_COMPLETE = "ON_MARK_COMPLETE";

export const initialList = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 38929875894
  },
  {
    item: "Learn about functions",
    completed: false,
    id: 38929875892
  },
  {
    item: "Learn about state",
    completed: false,
    id: 38929875898
  },
  {
    item: "Learn about context",
    completed: false,
    id: 3892987589
  }
];

export const reducer = (state, action) => {
  switch (action.type) {
    case ON_ADD_TODO: {
        const newTodo = {
            item: action.payload.value,
            completed: false,
            id: Date.now()
        }
      return [...state, newTodo] 
    }
    case ON_MARK_COMPLETE: {
        const obj = state.find(todo => todo.id === action.payload.id)
        obj.completed = true;
      return [
          ...state.filter(todo => todo.id !== action.payload.id),
          obj
      ];
    }
    case ON_CLEAR_COMPLETED: {
        return [
            ...state.filter(todo => !todo.completed)
        ]
    }
    default:
      return state;
  }
};
