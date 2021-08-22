// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example
// s = '12:01:00PM'

// Return '12:01:00'

// Example
// s = '12:01:00AM'

// Return '00:01:00'

function timeConversion(s) {
  const timeArr = s.split(":");
  const hour = parseInt(timeArr[0]);
  const minute = timeArr[1];
  const daylight = timeArr[2].slice(2, 4);
  const second = timeArr[2].slice(0, 2);

  if (daylight === "PM") {
    return `${hour < 12 ? hour + 12 : hour}:${minute}:${second}`;
  }

  if (daylight === "AM") {
    return `${
      hour >= 12 ? `0${hour - 12}` : hour < 10 ? `0${hour}` : hour
    }:${minute}:${second}`;
  }
}

console.log(timeConversion("12:01:00PM"));
console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("1:05:45PM"));
console.log(timeConversion("01:05:45PM"));
console.log(timeConversion("11:05:45PM"));
console.log(timeConversion("5:01:00AM"));
console.log(timeConversion("10:40:03AM"));
console.log(timeConversion("12:40:22AM"));
