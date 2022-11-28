import { useEffect, useState } from "react";

export const getCookie = (name: string) => {
  const cookieString = `; ${document.cookie}`;
  const parts = cookieString.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  } else return "";
};

export const setCookie = (name, value, days = null) => {
  console.log("쿠키 셋팅");
  
  let expires = "";
  const domain = document.location.origin.includes(".spartacodingclub.kr")
    ? ".spartacodingclub.kr"
    : document.location.hostname;
  const sameSite = document.location.origin.includes(".spartacodingclub.kr")
    ? "; SameSite=None; Secure"
    : "";
  let date = new Date();
  date.setTime(
    days ? date.getTime() + days * 24 * 60 * 60 * 1000 : date.getTime()
  );
  expires = `; domain=${domain}; expires=${date.toUTCString()}${sameSite}`;
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};
