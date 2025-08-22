// @ts-check

// locally defined, stored in a property on the function, thus static across calls (initialized only once)

export function isValidCommand(command) {
  if (!isValidCommand.regex) isValidCommand.regex = /^Chatbot/i;
  return isValidCommand.regex.test(command);
}

// locally defined with the new RegExp() syntax

export function removeEmoji(message) {
  const regex = new RegExp('emoji[1-9]+', 'g');
  return message.replace(regex, '');
}

// globally defined with the /regex/ syntax

const isPhoneNumberRegex = /\(\+[0-9]{2}\) [0-9]{3}-[0-9]{3}-[0-9]{3}/
export function checkPhoneNumber(number) {
  const isPhoneNumber = isPhoneNumberRegex.test(number)
  return isPhoneNumber ? "Thanks! You can now download me to your phone." : `Oops, it seems like I can't reach out to ${number}`;
}

// locally defined with the /regex/ syntax

export function getURL(userInput) {
  const regex = /[a-z]+\.[a-z]+/g
  return userInput.match(regex);
}

// The test inputs' first character has already capitalized.

export function niceToMeetYou(fullName) {
  let str = "Nice to meet you, First name Last name"
  const regexFirst = /first name/i
  const regexLast = /last name/i
  let name = fullName.split(', ');
  
  upperName(name); // this line is unnecessary due to the test, but necessary for the instruction.
  
  return str.replace(regexFirst, name[1]).replace(regexLast, name[0])
}

// if the first character isn't capitalized

function upperName (name) {
  const upperArray = []
  name.forEach((e) => upperArray.push(e.charAt(0).toUpperCase() + e.substr(1)));
  return upperArray
}