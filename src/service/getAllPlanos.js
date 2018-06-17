export const getAllPlanos = () => {
  return fetch('https://api-fit.herokuapp.com/api/v1/planos')
    .then(res => res.json())
}
