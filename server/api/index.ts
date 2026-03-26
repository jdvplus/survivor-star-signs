import { Router } from 'express'

import { ENDPOINTS } from '../constants/endpoints.ts'
import { getHealthStatus } from '../services/health.ts'
import survivorsRouter from './survivors.ts'

const api = Router()

api.get(ENDPOINTS.HEALTH, (_req, res) => {
  res.json(getHealthStatus())
})

api.use(survivorsRouter)

export default api
