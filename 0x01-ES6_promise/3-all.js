import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];

  Promise.all(promises)
    .then((response) => {
      const [photoResponse, userResponse] = response;
      console.log(`${response[0].body} ${response[1].firstName} ${response[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
export default handleProfileSignup;
