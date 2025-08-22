// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  const regex = /^Chatbot/i;
  return regex.test(command);
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption throught the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  const regex = new RegExp('emoji[1-9]+', 'g');
  return message.replace(regex, '');
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  const regex = /(\(\+[0-9]{2}\)) [0-9]{3}-[0-9]{3}-[0-9]{3}/g
  const isPhoneNumber = regex.test(number)
  return isPhoneNumber ? "Thanks! You can now download me to your phone." : `Oops, it seems like I can't reach out to ${number}`;
}

/**
 * Given a certain response from the user, help the chatbot get only the URL
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  const regex = /[a-z]+\.[a-z]+/g
  return userInput.match(regex);
}

/**
 * Greet the user using its full name data from the profile
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  let str = "Nice to meet you, Last name First name"
  const regexLast = /last name/i
  const regexFirst = /first name/i
  let name = fullName.split(', ')
  console.log(name)
  let result = str.replace(regexLast, name[1])
  result = result.replace(regexFirst, name[0])
  return result
}
