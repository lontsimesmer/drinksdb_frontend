const TOKEN_LOCATION = 'token';

export default function saveToken(token) {
  localStorage.setItem(TOKEN_LOCATION, token);
}

export default function readToken() {
  return localStorage.getItem(TOKEN_LOCATION);
}
