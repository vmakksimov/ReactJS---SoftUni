import * as request from "./requester"

const baseUrl = 'http://localhost:3030/data/games';

export const getAll = () => request.get(baseUrl)

export const create = (gameData) => request.post(baseUrl, gameData);

export const getOne = (gameId) => request.get(`${baseUrl}/${gameId}`)

export const edit = (gameId, gameData) => request.put(`${baseUrl}/${gameId}`, gameData)

export const remove = (gameId) => request.del(`${baseUrl}/${gameId}`)

export const comment = (gameId, comment) => request.put(`http://localhost:3030/data/comments/${gameId}`, comment)
       
