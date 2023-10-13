import Cookies from "js-cookie";

export const getJWTCookie = () => {
  const JWTCookie = Cookies.get("JWT");

  if (JWTCookie) {
    return JWTCookie;
  } else {
    return "Cookie not found.";
  }
};
