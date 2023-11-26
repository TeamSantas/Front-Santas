const gnbKeys = ["friends", "snowball", "home", "town", "message", "like"];
export const getGnbOptions = (asPath = "") => {
  return gnbKeys.find((key) => asPath.includes(key));
};
