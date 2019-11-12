const db = require('../../models');

/*
 * Function checks if username already exists in database.
 * returns true if username already taken, false otherwise.
 */

async function UsernameExists(username) {
  if (username === null || username === undefined)
    throw new Error('No Username was passed as an arugument');
  const user = await db.userbase.findOne({
    where: { username }
  });

  if (user) return user;

  return null;
}

module.exports = {
  UsernameExists
};
