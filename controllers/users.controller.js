const { User } = require("../models");
const bcrypt = require("bcrypt");
exports.index = async function (req, res) {
  try {
    let users = await User.findAll();
    return res.status(200).json({
      message: "success",
      data: users,
    });
  } catch (e) {
    return res.status(500).send({
      error: true,
      data: null,
      message: e.message,
    });
  }
};

exports.store = async function (req, res, next) {
  try {
    let { fullname, email, password, imageUrl } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);
    const user = {
      fullname: fullname,
      email: email,
      password: hashPassword,
      imageUrl: imageUrl,
    };
    // check email
    await User.findOne({ where: { email: email } }).then(async (result) => {
      if (result) {
        return res.status(409).send({
          status: "failed",
          message: "Email already exist",
          data: null,
        });
      } else {
        {
          await User.create(user)
            .then((result) => {
              // trigger email event

              const {
                dataValues: { fullname, email, imageUrl, createdAt, updatedAt },
              } = result;
              res.status(201).send({
                status: "success",
                message: "User Created Successfully",
                data: {
                  fullname,
                  email,
                  imageUrl,
                  createdAt,
                  updatedAt,
                },
              });
            })
            .catch((e) => {
              res.status(500).send({
                status: "failed",
                message: e.message,
                data: null,
              });
            });
        }
      }
    });
  } catch (e) {
    return res.status(500).send({
      error: true,
      data: null,
      message: e.message,
    });
  }
};
