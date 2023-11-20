import { useEffect, useState } from "react";
import { parse, serialize } from "cookie";

export const getCookie = (name: string) => {
  const cookieString = `; ${document.cookie}`;
  const parts = cookieString.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  } else return "";
};

/**
 * 반드시 getServerSideProps에서 사용해주세요.
 * context는 getServerSideProps(context)로 받아 넘겨주세요.
 */
export const setCookie = (name, value, context) => {
  const cookie = serialize(name, value, {
    maxAge: 60 * 60 * 24 * 7 * 5, // 5 week (초 단위)
  });
  context.res.setHeader("Set-Cookie", cookie);
};

export const removeCookie = (name: string) => {
  document.cookie =
    name +
    `=; path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=${document.location.hostname};`;
};
