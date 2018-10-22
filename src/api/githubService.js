const apiUrl = 'https://api.github.com';

export const fetchGithubUserInfo = id => fetch(`${apiUrl}/users/${id}`).then(res => res.json());
