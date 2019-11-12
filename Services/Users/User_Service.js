const { UsernameExists } = require('./User_DB');

async function ValidateUserExists(username) {
  let user = null;
  if (username) {
    user = await UsernameExists(username);
  }
  return user;
}

module.exports = {
  ValidateUserExists
};
