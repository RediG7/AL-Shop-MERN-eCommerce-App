import express from "express";
const router = express.Router();
import { addOrderItems, getOrderById, updateOrderToPaid } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addOrderItems);
//  "/:id should be at the bottom because if not / kinda unreachable"
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);

export default router;
