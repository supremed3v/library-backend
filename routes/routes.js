import express, { Router } from "express";
import { getAllbooks, getByCategory } from "../controller/booksController.js";
import {
  addBook,
  deleteAll,
  deleteBook,
  updateBook,
} from "../controller/adminController.js";
import {
  login,
  createUser,
  adminUser,
  getUserProfile,
} from "../controller/userController.js";
import { createOrder, getUserOrders } from "../controller/orderController.js";

const route = express.Router();

route.get("/all", getAllbooks);
route.get("/:category", getByCategory);
route.post("/add-new-book", addBook);
route.put("/:id", updateBook);
route.delete("/:id", deleteBook);
route.post("/new-order", createOrder);
route.post("/delete-all", deleteAll);
route.post("/signup", createUser);
route.post("/login", login);
route.get("/user-order", getUserOrders);
route.post("/admin-signup", adminUser);
route.get("/user-profile/:id", getUserProfile);

export default route;