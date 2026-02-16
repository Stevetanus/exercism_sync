//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
  const EarthSeconds = 31557600
  const MercurySeconds = EarthSeconds * 0.2408467
  const VenusSeconds = EarthSeconds * 0.61519726
  const MarsSeconds = EarthSeconds * 1.8808158
  const JupiterSeconds = EarthSeconds * 11.862615
  const SaturnSeconds = EarthSeconds * 29.447498
  const UranusSeconds = EarthSeconds * 84.016846
  const NeptuneSeconds = EarthSeconds * 164.79132
  switch (planet){
    case 'earth':
      return Number((seconds / EarthSeconds).toFixed(2))
    case 'mercury':
      return Number((seconds / MercurySeconds).toFixed(2))
    case 'venus':
      return Number((seconds / VenusSeconds).toFixed(2))
    case 'mars':
      return Number((seconds / MarsSeconds).toFixed(2))
    case 'jupiter':
      return Number((seconds / JupiterSeconds).toFixed(2))
    case 'saturn':
      return Number((seconds / SaturnSeconds).toFixed(2))
    case 'uranus':
      return Number((seconds / UranusSeconds).toFixed(2))
    case 'neptune':
      return Number((seconds / NeptuneSeconds).toFixed(2))
  }
};
