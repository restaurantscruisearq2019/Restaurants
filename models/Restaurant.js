const mongoose = require("mongoose");
const { Schema } = mongoose;

const restaurantSchema = new Schema({
  name: { type: String, default: "" },
  category: { type: String, default: "" },
  capacity: { type: Number, default: 0 },
  isopen: { type: Boolean, default: false },
  description: { type: String, default: "" },
  images: { type: [String], default: []},
  menu: {
    mType: { type: String, default: "" },
    priceRange: { type: String, default: "" },
    description: { type: String, default: "" }
  }
});

mongoose.model("restaurants", restaurantSchema);
