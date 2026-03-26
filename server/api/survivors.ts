import { Router } from 'express'

import { ENDPOINTS } from '../constants/endpoints.ts'
import { isZodiacSign, isGenderSelectOption } from '../../shared/types.ts'
import {
  getAllSurvivors,
  getRandomSurvivors,
  getSurvivorsByCategory,
} from '../services/survivor.ts'

function queryString(value: unknown): string | undefined {
  return typeof value === 'string' ? value : undefined
}

const router = Router()

router.get(ENDPOINTS.SURVIVORS, (_req, res) => {
  res.json(getAllSurvivors())
})

router.get(ENDPOINTS.RANDOM, (_req, res) => {
  res.json(getRandomSurvivors())
})

router.get(`${ENDPOINTS.SURVIVORS}/filter`, (req, res) => {
  const sign = queryString(req.query.sign)
  const gender = queryString(req.query.gender)

  if (sign && !isZodiacSign(sign)) {
    res.status(400).json({ error: `Invalid zodiac sign: ${sign}` })
    return
  }

  if (gender && !isGenderSelectOption(gender)) {
    res.status(400).json({ error: `Invalid gender option: ${gender}` })
    return
  }

  res.json(getSurvivorsByCategory(sign, gender))
})

export default router
