const mongoose = require("mongoose");
const { Schema } = mongoose;

const restaurantSchema = new Schema({
  name: { type: String, default: "" },
  category: { type: String, default: "" },
  capacity: { type: Number, default: 0 },
  isopen: { type: Boolean, default: false },
  menu: {
    type: { type: String, default: "" },
    priceRange: { type: String, default: "" }
  }
});

mongoose.model("restaurants", restaurantSchema);
