const mongoose = require("mongoose");
mongoose.set('debug', true);

const tenantSchema = new mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  
  token: { type: String },
  role: {
    type: String
  },
  apId: {type:mongoose.Schema.Types.ObjectId, ref:"apartment"},
  userId:{
    type:mongoose.Schema.Types.ObjectId, ref:"user"
}
});

module.exports = mongoose.model("tenants", tenantSchema,"tenants");
