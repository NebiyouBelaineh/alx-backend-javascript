import { uploadPhoto, createUser } from './utils';

async function handleProfileSignup() {
  const results = await Promise.all([uploadPhoto(), createUser()]);
  console.log(
    `${results[0].body} ${results[1].firstName} ${results[1].lastName}`
  );
}
export default handleProfileSignup;
