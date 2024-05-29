import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const promises = [uploadPhoto(), createUser()];

    const [photo, user] = await Promise.all(promises);

    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
}

export default asyncUploadUser;
