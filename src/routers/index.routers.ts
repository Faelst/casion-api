import { Router } from 'express'
import newsRouters  from './news/index.router'

const routers = Router()

routers.use('/news', newsRouters)

export default routers