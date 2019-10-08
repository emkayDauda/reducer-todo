export const ON_ADD_TODO = "ON_ADD_TODO";
export const ON_MARK_COMPLETE = "ON_MARK_COMPLETE";

export const initialList = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  },
  {
    item: "Learn about functions",
    completed: false,
    id: 3892987589
  },
  {
    item: "Learn about state",
    completed: false,
    id: 3892987589
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
      return [];
    }
    default:
      return state;
  }
};
