import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/rockets';
const FETCH_ROCKETS = 'spaceX/rockets/FETCH_ROCKETS';
const LIST_ROCKETS = 'spaceX/rockets/LIST_ROCKETS';

export const list = (rockets) => ({ type: LIST_ROCKETS, rockets });

const get = async () => {
  const response = await fetch(url);
  const rockets = await response.json();
  return rockets;
};

export const fetchRockets = createAsyncThunk(
  FETCH_ROCKETS,
  async (args, thunkAPI) => {
    try {
      let rockets;
      switch (args.method) {
        case 'GET':
          rockets = await get();
          thunkAPI.dispatch(list(rockets));
          return rockets;
        default:
          return null;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error, args.method);
    }
  },
);

export default function reducer(state = [], action) {
  switch (action.type) {
    case LIST_ROCKETS:
      return action.rockets;
    default:
      return state;
  }
}
