import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    role:{
        type:String,
        enum:['USER','ADMIN'],
        default:'USER'
    }
  },
  { timestamps: true },
);

export default models.User || model("User", UserSchema);
