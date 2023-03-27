// ENDPOINT BACKEND

export const BACKEND_API = process.env.BACKEND_API || 'http://localhost:3001'

export const SEARCH_ITEMS = (query) => `/api/items?q=${query}`

export const GET_ITEM = (id) => `/api/items/${id}`
