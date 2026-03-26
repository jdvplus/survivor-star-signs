import { Router } from 'express'

import { ENDPOINTS } from '../constants/endpoints.ts'
import {
  getAllSurvivors,
  getRandomSurvivors,
  getSurvivorsByCategory,
} from '../services/survivor.ts'

const router = Router()

router.get(ENDPOINTS.SURVIVORS, (_req, res) => {
  res.json(getAllSurvivors())
})

router.get(ENDPOINTS.RANDOM, (_req, res) => {
  res.json(getRandomSurvivors())
})

router.get(`${ENDPOINTS.SURVIVORS}/filter`, (req, res) => {
  const sign = req.query.sign as string | undefined
  const gender = req.query.gender as string | undefined
  res.json(getSurvivorsByCategory(sign, gender))
})

export default router
