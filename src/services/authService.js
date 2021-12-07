// const baseUrl = "http://localhost:5000";
const register = (email, password, rePass) => {
  const requestOptions = {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ email, password, rePass }),
  };
  return fetch(`http://localhost:5000/auth/register`, requestOptions )
};

const authService = { register };
export default authService;
