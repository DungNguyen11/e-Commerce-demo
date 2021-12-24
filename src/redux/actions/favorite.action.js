import {createAction } from '@reduxjs/toolkit'
import { FAVORITE_ACTION, REQUEST } from '../constants'

export const getFavoriteListAction = createAction(REQUEST(FAVORITE_ACTION.GET_FAVORITE_LIST))
export const postFavoriteAction = createAction(REQUEST(FAVORITE_ACTION.POST_FAVORITE))
export const removeFavoriteAction = createAction(REQUEST(FAVORITE_ACTION.REMOVE_FAVORITE))

