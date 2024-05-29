function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const obj = {
        status: 200,
        body: 'Success',
      };
      resolve(obj);
    } else {
      const error = new Error('The fake API is not working currently');
      reject(error);
    }
  });
}

export default getFullResponseFromAPI;
