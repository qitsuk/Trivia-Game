import { BASE_API_URL, API_KEY } from ".";

export async function apiUserSignin(username){
    fetch(`${BASE_API_URL}/trivia`, {
        method: 'POST',
        headers: {
            'X-API-Key': API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            username: username, 
            highScore: 0 
        })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not create new user')
      }
      return response.json()
    })
    .then(newUser => {
      // newUser is the new user with an id
    })
    .catch(error => {
    })
}