function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('Resolved');
      } else {
        reject();
      }
    }, 10);
  });
}
export default getResponseFromAPI;
