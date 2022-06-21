export const REQUEST_API = 'REQUEST-API';
export const GET_PICTURE = 'GET-PICTURE';

export const requestAPI= () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export function fetchAPI() {

  return async(dispatch) => {
    try {
      dispatch(requestAPI())
      const url = 'https://dog.ceo/api/breeds/image/random';
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      dispatch(getPicture(data))
    } catch (error) {
      console.error(error);
    }
  }
}