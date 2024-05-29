import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];

  Promise.all(promises)
    .then((response) => {
      const results = [];
      // destructure responses and save to photoResponse and userResponse
      const [photoResponse, userResponse] = response;
      results.push(photoResponse.body);
      results.push(userResponse.firstName);
      results.push(userResponse.lastName);

      console.log(results.join(' '));
      // console.log(response);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
export default handleProfileSignup;
