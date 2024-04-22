import { Schema, model, models } from "mongoose";

const HotelSchema = new Schema(
  {
    place_id: {
      type: Schema.Types.ObjectId,
      required: [true, "place_id is required"],
    },
    name: {
      type: String,
      required: [true, "name is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    image: {
      type: String,
      required: [true, "image is required"],
    },
    rooms: {
      type: Array,
      required: [true, "room images are required"],
    },
  },
  { timestamps: true },
);

export default models.Hotel || model("Hotel", HotelSchema);
