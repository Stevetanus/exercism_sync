// @ts-check

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  const set = new Set();
  for (let i = 0; i < playlist.length; i++){
    set.add(playlist[i])
  }
  return [...set]
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  const set = new Set();
  for (let i = 0; i < playlist.length; i++){
    set.add(playlist[i])
  }
  return set.has(track)
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  const set = new Set();
  for (let i = 0; i < playlist.length; i++){
    set.add(playlist[i])
  }
  if (!set.has(track)) set.add(track)
  return [...set]
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  const set = new Set();
  for (let i = 0; i < playlist.length; i++){
    set.add(playlist[i])
  }
  set.delete(track)
  return [...set]
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  const set = new Set()
  for (let i = 0; i < playlist.length; i++){
    set.add(playlist[i].split(' - ')[1])
  }
  return [...set]
}
