import axios from 'axios';

const BASE_URL = 'https://movie-bookmark.herokuapp.com/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTdhZDM2ZTMxMzU0OWZkYmEzNmZlNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjcyNjMzNSwiZXhwIjoxNjQyOTg1NTM1fQ.tEhDqguzRhOKVBj1jJVyB887ZOq1V0cAL1DQVXqAWrE';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
