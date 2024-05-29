import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(fileName, lastName), uploadPhoto(fileName)];

  return Promise.allSettled(promises)
    .then((response) => (
      response.map((res) => ({
        status: res.status,
        value: res.status === 'fulfilled' ? res.value : String(res.reason),
      }))
    ));
}
