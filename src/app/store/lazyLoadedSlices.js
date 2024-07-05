import { combineSlices } from '@reduxjs/toolkit';
import { fuseSettingsSlice } from '@fuse/core/FuseSettings/fuseSettingsSlice';
import { i18nSlice } from 'app/store/i18nSlice';
import apiService from './apiService';
import { userSlice } from '../auth/user/store/userSlice';
import folderReducer from "../main/file-manager/store/folderslice";

export const rootReducer = combineSlices(
  /**
   * Static slices
   */
  userSlice,
  fuseSettingsSlice,
  i18nSlice,
  { folder: folderReducer }, // Make sure folderReducer is correctly imported and defined
  /**
   * Dynamic slices
   */
  {
    [apiService.reducerPath]: apiService.reducer,
  }
).withLazyLoadedSlices();

