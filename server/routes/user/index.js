const {
  getProfile,
  updateProfile,
  getAddress,
  addAddress,
  updateAddress,
  deleteAddress,
} = require("../../controllers/user");
const express = require("express");
const isAuthenticate = require("../../middleware/isAuthenticate");
const { upload } = require("../../middleware/media");
const router = express.Router();

router.get("/profile", isAuthenticate, getProfile);
router.put(
  "/profile",
  isAuthenticate,
  upload("image", 2000000).single("avatar"),
  updateProfile
);
router.get("/profile/address", isAuthenticate, getAddress);
router.post("/profile/address", isAuthenticate, addAddress);
router.put("/profile/address/:addressId", isAuthenticate, updateAddress);
router.delete("/profile/address/:addressId", isAuthenticate, deleteAddress);

module.exports = router;
