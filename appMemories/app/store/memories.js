import axios from 'axios';

// ACTION TYPES
const ALL_MEMORIES = 'ALL_MEMORIES';
const ADD_MEMORY = 'ADD_MEMORY';
const REMOVE_MEMORY = 'REMOVE_MEMORY';
const UPDATE_MEMORY = 'UPDATE_MEMORY';

//ACTION CREATORS
const all = memories => ({ type: ALL_MEMORIES, memories});
const add = memory => ({ type: ADD_MEMORY, memory });
const remove = id => ({ type: REMOVE_MEMORY, id });
const update = memory => ({ type: UPDATE_MEMORY, memory });

// REDUCERS
export default function reducer (memories = [], action) {
  switch (action.type) {
    case ALL_MEMORIES:
      return action.memories;

    case ADD_MEMORY:
      return [action.memory, ...memories];

    case REMOVE_MEMORY:
      return memories.filter(memory => memory.id !== action.id);

    case UPDATE_MEMORY:
      return memories.map(memory => ( action.id === memory.id ? action.memory : memory
  ));

    default:
      return memories;
  }
}

// THUNK CREATERS
export const fetchMemories = () => dispatch => {
  axios.get('http://localhost:8080/api/memories')
  .then(res => dispatch(all(res.data)));
};

export const addMemory = (memory) => dispatch => {
  axios.post('http://localhost:8080/api/memories', memory)
  .then(res => dispatch(add(res.data)))
  .catch(err => console.error(`Creating memory: ${memory} unsuccessful`, err));
};

export const removeMemory = id => dispatch => {
  axios.delete(`http://localhost:8080/api/memories/${id}`)
  .then(() => dispatch(remove(id)))
  .catch(err => console.error(`Removing memory: ${id} unsuccessful`, err));
};

export const updateMemory = (id, memory) => dispatch => {
  axios.put(`http://localhost:8080/api/memories/${id}`, memory)
  .then(res => dispatch(update(res.data)))
  .catch(err => console.error(`Updating memory: ${memory} unsuccessful`, err));
};
