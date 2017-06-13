import User from '../../../models/googleDatastore/userModel';

/* Example use

*/
export async function editUser(user) {
  let response = null;

  try {
    const user_id = user._id;
    const entityData = User.sanitize(user);

    response = await User.update(user_id, entityData)
      .then((entity) => {
        return entity.plain();
      });

  } catch (err) {
    console.info('editUser err', err)
  }
  return response;
}

/* Example Response
{

}

*/
