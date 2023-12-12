import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ITask {
  id: number;
  text: string;
}

export interface ITaskState {
  tasks: ITask[];
}

const initialState = {
  tasks: [],
} as ITaskState;

export const fetchTasksAsync = createAsyncThunk(
  'tasks/fetchTasks',
  async () => {
    const response = await Promise.resolve([
      {
        id: Math.random(),
        text: Math.random().toString(),
      },
      {
        id: Math.random(),
        text: Math.random().toString(),
      },
      {
        id: Math.random(),
        text: Math.random().toString(),
      },
    ]);
    return response;
  }
);


export const TaskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksAsync.pending, (state) => {
      })
      .addCase(fetchTasksAsync.fulfilled, (state, action: PayloadAction<ITask[]>) => {
        action.payload.map(t => state.tasks.push(t));
      })
      .addCase(fetchTasksAsync.rejected, (state) => {
      });
    }
});

export const { addTask } = TaskSlice.actions;

export const selectTasks = (state: RootState) => { return state.task.tasks }
export default TaskSlice.reducer;