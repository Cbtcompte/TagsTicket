import { createSlice } from '@reduxjs/toolkit'
import * as reducers from './reducer';
import { TagType } from '@/helpers/types';

const tags : TagType[] = [];

export const tagSlice = createSlice({
  name: 'tags',
  initialState : {tags : tags},
  reducers: reducers,
  reducerPath: "tags"
})