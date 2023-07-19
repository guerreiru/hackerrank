const timeConversion = (s) => {
  const containsPM = s.includes("PM");
  let [hour, minutes, seconds] = s.split(":");

  if (containsPM && hour != 12) {
    hour = Number(hour) + 12;
  }

  if (!containsPM && hour == 12) {
    hour = "00";
  }

  const convertedTime = [`${hour}`, minutes, seconds]
    .join(":")
    .replace(/AM|PM/, "");
  console.log(convertedTime);
  return convertedTime;
};

module.exports = { timeConversion };
