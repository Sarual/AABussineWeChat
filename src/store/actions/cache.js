import { STORAGE_CACHE_DATA } from '../types/cache'
import { createAction } from 'redux-actions'

export const storageCacheData = createAction(STORAGE_CACHE_DATA, () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
})
