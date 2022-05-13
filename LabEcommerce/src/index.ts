import { app } from "./app";
import { createProduct } from "./endpoints/products/createProduct";
import { createPurchase } from "./endpoints/purchases/createPurchase";
import { createUsers} from "./endpoints/users/createUser";
import { getAllProducts } from "./endpoints/products/getAllProducts";
import { getAllUsers } from "./endpoints/users/getAllUsers";
import { getPurchasesUser } from "./endpoints/purchases/getPurchasesUser";

app.post("/users",createUsers)

app.get("/users",getAllUsers)

app.post("/products",createProduct)

app.get("/products",getAllProducts)

app.post("/purchases",createPurchase)

app.get("/users/:userId/purchases",getPurchasesUser)