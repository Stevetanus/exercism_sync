const orbitalRatio = {
  'earth': 1.0,
  'mercury': 0.2408467,
  'venus': 0.61519726,
  'mars': 1.8808158,
  'jupiter': 11.862615,
  'saturn': 29.447498,
  'uranus': 84.016846,
  'neptune': 164.79132
}

const EARTH_YEAR_SECONDS = 31_557_600

export const age = (forPlanet, seconds) => Math.round(seconds / EARTH_YEAR_SECONDS / orbitalRatio[forPlanet] * 100) / 100
