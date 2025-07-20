const clientId = 'eaaf1339d7974272978c0dd0fe57bb2a';
const clientSecret = '5948752dc4734d24bf0541c6344d4f41';

async function getAccessToken() {
  const auth = btoa(`${clientId}:${clientSecret}`);
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${auth}`
    },
    body: 'grant_type=client_credentials'
  });
  
  const data = await response.json();
  return data.access_token;
}

// Panggil fungsi ini untuk mendapatkan token saat aplikasi dimulai
getAccessToken().then(token => console.log('Access Token:', token));
