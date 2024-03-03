import Cookies from "js-cookie";

export const getJWTCookie = () => {
  const JWTCookie = Cookies.get("JWT");

  if (JWTCookie) {
    return JWTCookie;
  } else {
    return "Cookie not found.";
  }
};

export const buildApiUrl = (searchText, filters) => {
  const baseURL = "http://localhost:8000";
  const path = "/products/products/?";
  const searchTextCleaned = searchText.trim();
  const checkedFilters = [];
  if (searchTextCleaned.length > 0) {
    checkedFilters.push(`q=${encodeURIComponent(searchText)}`);
  }
  filters.forEach((filter) => {
    filter.data.forEach((option) => {
      if (option.isChecked) {
        const filterName = filter.name;
        let value;
        if (
          filterName.toLowerCase() === "ram" ||
          filterName.toLowerCase() === "storage"
        ) {
          if (option.name.includes("tb")) {
            value =
              Number(option.name.slice(0, option.name.indexOf("tb") - 1)) *
              1000;
          } else {
            value = option.name.slice(0, option.name.indexOf("gb") - 1);
          }
        } else {
          value = option.name;
        }
        checkedFilters.push(
          `${encodeURIComponent(filterName)}=${encodeURIComponent(value)}`
        );
      }
    });
  });
  const result = baseURL + path + checkedFilters.join("&");
  return result.toLowerCase();
};

export const capitalize = (str) => {
  const result = str
    .split(``)
    .map((char, i) => {
      if (i === 0 || str[i - 1] === ` ` || str[i - 1] === `-`) {
        return char.toUpperCase();
      } else {
        return char;
      }
    })
    .join(``);
  return result;
};

export const createProductTitle = (prod) => {
  const networkGen = prod.network_gen === 5 ? `5G` : `4G`;
  const result =
    prod.brand.toUpperCase() +
    ` ` +
    prod.model.toUpperCase() +
    `, ` +
    prod.ram +
    ` ` +
    `GB RAM, ` +
    prod.storage +
    `GB Memory, ` +
    networkGen +
    `, ` +
    capitalize(prod.color);
  return result;
};
