import prisma from "../DB/db.config.js";

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (userExist) {
      return res.json({ status: 400, msg: "User already exist" });
    }
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    res.json({ status: 200, msg: "User created successfully", data: user });
  } catch (error) {
    console.log(error);
    res.json({ msg: "Something went wrong" });
  }
};
