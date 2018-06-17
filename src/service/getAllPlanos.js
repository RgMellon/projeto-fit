export const getAllPlanos = () => {
  return fetch('http://localhost:8000/api/v1/planos')
    .then(res => res.json())
}
