import express from "express";
import path from "path";

import { loadApiEndpoints } from "./controllers/api";

// Create Express server
const app = express();

//Conect to database usar mongoDB o postgres

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


loadApiEndpoints(app);

export default app;
