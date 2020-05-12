const md5 = require('md5');

const loginModule = (req, res) => {
  const { user_name, pwd } = req.body;
  if (user_name && pwd) {
    res.send({
      data: {
        user_name,
        role: 'admin',
      },
      error_code: 0,
      message: 'login successful',
    });
  }

  return res.send({
    data: null,
    error_code: 1001,
    message: 'user or password is incorrect',
  });
}

module.exports = loginModule
