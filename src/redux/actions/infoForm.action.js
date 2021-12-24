import {createAction } from '@reduxjs/toolkit'
import { INFO_FORM_ACTION, REQUEST } from '../constants'

export const getInfoFormListAction = createAction(REQUEST(INFO_FORM_ACTION.GET_INFO_FORM_LIST))
export const getInfoFormItemAction = createAction(REQUEST(INFO_FORM_ACTION.GET_INFO_FORM_ITEM))
export const setInfoFormAction = createAction(REQUEST(INFO_FORM_ACTION.SET_INFO_FORM))
export const deleteInfoFormAction = createAction(REQUEST(INFO_FORM_ACTION.DELETE_INFO_FORM))
export const updateInfoFormAction = createAction(REQUEST(INFO_FORM_ACTION.UPDATE_INFO_FORM))