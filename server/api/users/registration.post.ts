import { User } from "~~/server/models/user.model";
import mongoose from "mongoose";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    try {
      await mongoose.connect("mongodb://localhost:27017/Auth");

      const user = new User({
        email:body.email,
        name: body.name,
        password: body.password,
        balance: 1000

      });
      await user.save();
      return user;
        // const user = await User.findOne({email:body.email});
        // if (user){
        //   if(user.password==body.password){
        //     return user;
        //   }
        // }
      } catch (e) {
        console.error(e);
      }

  return null;
});
