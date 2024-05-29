function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      const obj = {
        status: 200,
        body: 'success',
      };
      return obj;
    })
    .catch(() => new Error());
}

export default handleResponseFromAPI;
