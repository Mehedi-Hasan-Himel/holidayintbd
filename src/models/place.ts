import { Schema, model, models } from "mongoose";

const PlaceSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"]
    },
    international:{
        type: Boolean,
        required: [true, "international is required"]
    },
    image:{
        type: String,
        required: [true, "image is required"]
    },
  },
  { timestamps: true }
);

export default models.Place || model("Place", PlaceSchema);

