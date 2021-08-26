import { Request, Response, Router } from "express";
import NewsControllersClass from '../../controllers/news/index.controller'

const newsRouter = Router()
const NewsControllers = new NewsControllersClass()

newsRouter.get('/test', (req: Request, res: Response) => res.status(200).send('News routers'))

newsRouter.get('/', NewsControllers.getNews)
newsRouter.get('/:_id', NewsControllers.getNewsById)

newsRouter.post('/', NewsControllers.registerNews)

export default newsRouter