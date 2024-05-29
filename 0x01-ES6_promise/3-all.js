import { uploadPhoto, createUser } from './utils';

async function handleProfileSignup() {
  const results = await Promise.all([uploadPhoto(), createUser()]);
  if (results.length < 2) {
    console.log('Signup system offline');
  } else {
    console.log(
      `${results[0].body} ${results[1].firstName} ${results[1].lastName}`
    );
  }
}
export default handleProfileSignup;
