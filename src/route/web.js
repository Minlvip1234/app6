import express from "express";
import homeController from '../controller/homeController'

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage)
    router.get('/login', homeController.getLogin)
    router.post('/handle', homeController.getHandle)
    return app.use('/', router)
}

export default initWebRoute;