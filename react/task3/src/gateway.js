const baseUrl = 'https://api.github.com/users';

export const getFetchData = userId => {
  return fetch(`${baseUrl}/${userId}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  });
};
