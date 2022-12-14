const express = require("express")
const movieRoutes = express.Router()

import {CreateMovieController} from "../controllers/createMovieController/CreateMovieController"
import { GetAllMovieController } from "../controllers/GetAllMovieController/GetAllMovieController"

const getAllMovieController = new GetAllMovieController()
const createMovieController = new CreateMovieController()

// list all available movies
movieRoutes .get("/list",getAllMovieController.GetAllMovie)
// create a new movie
movieRoutes .post("/",createMovieController.CreateMovie)

export {movieRoutes }