import express from "express";
import homeController from '../controller/homeController'

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage)
    router.get('/login', homeController.getLogin)
    router.post('/handle', homeController.getHandle)
    router.post('/delete', homeController.getDelete)
    router.get('/edit/:id', homeController.getEdit)
    router.post('/doEdit', homeController.getDoEdit)
    return app.use('/', router)
}

export default initWebRoute;