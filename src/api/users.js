import { BASE_API_URL, API_KEY } from ".";

export async function apiUserGet(username){
  try {
    const response = await fetch(`${BASE_API_URL}/trivia?username=${username}`)
    if (!response.ok){
      console.log(response.status)
    }
    const data = await response.json() 
    return data //only getting "data" now unlike in movies video 004 because data becomes "undefined" when including error message
  }
  catch(error)
  {
    return error.message
  }
}