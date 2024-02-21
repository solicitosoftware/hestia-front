import { getCookie, hasCookie, setCookie } from "cookies-next";

export const getCookieProducts = (): { [id: string]: number } => {
  if (hasCookie("products")) {
    const cookieData = JSON.parse((getCookie("products") as string) ?? "{}");
    return cookieData;
  }
  return {};
};

export const setCookieProducts = (id: string) => {
  const cookieData = getCookieProducts();
  if (cookieData[id]) {
    cookieData[id] += 1;
  } else {
    cookieData[id] = 1;
  }
  setCookie("products", JSON.stringify(cookieData));
};
