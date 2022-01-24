import { BASE_API_URL, API_KEY } from ".";

export async function apiUserGet(username){
  try {
    const response = await fetch(`${BASE_API_URL}/trivia?username=${username}`)
    if (!response.ok){
      console.log(response.status)
    }
    const data = await response.json() 
    return data
  }
  catch(error)
  {
    return error.message
  }
}

export async function apiUserPost(username, highScore){ 
  try {
    const config = {
      method: "POST",
      headers: {
        "X-API-key": API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username,
          highScore
        }
      })
    }
    const response = await fetch(`${BASE_API_URL}/trivia`, config)
    console.log("response", response)
    const data = await response.json()
    console.log('data in api file', data)
    return data
  }
  catch(error){
    return error.message
  }
}

export async function apiUserPatch(userId, highScore){ 
  try {
    const config = {
      method: "PATCH",
      headers: {
        "X-API-key": API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
          highScore
      })
    }
    const response = await fetch(`${BASE_API_URL}/trivia/${userId}`, config)
    console.log("response", response)
    const data = await response.json()
    console.log('data in api file', data)
    return data
  }
  catch(error){
    return error.message
  }
}