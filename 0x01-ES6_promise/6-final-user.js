import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(fileName, lastName), uploadPhoto(fileName)])
    .then((response) => (
      response.map((res) => ({
        status: res.status,
        value: res.status === 'fulfilled' ? res.value : String(res.reason),
      }))
    ));
}
