const gnbKeys = [
  "friends",
  "snowball",
  "home",
  "town",
  "message",
  "todays-heart",
];
export const getGnbOptions = (asPath = "") => {
  return gnbKeys.find((key) => asPath.includes(key));
};
