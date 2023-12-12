import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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


export const TaskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload);
    }
  }
});

export const { addTask } = TaskSlice.actions;

export const selectTasks = (state: RootState) => { return state.task.tasks }
export default TaskSlice.reducer;