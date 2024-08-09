export const isValidInputlen = (input) => {
  return input.length > 0 && input.length < 3;
};

export const getRating = (avg_count) => {
  return (avg_count / 2).toFixed(1);
};

export const getStars = (avg_count) => {
  const rate = getRating(avg_count);
  const starCount = Math.floor(rate);
  const decimalVal = rate.toString().split(".")[1];
  const isHalfStar = decimalVal !== "0" ? true : false;
  return { starCount, isHalfStar, rate };
};

export const getYear = (date) => {
  return date.split("-")[0];
};

export const getMovieLang = (langList) => {
  const languages = langList.reduce((str, lang) => {
    const langName = lang.english_name;
    return str + langName + ", ";
  }, "");

  return languages.slice(0, -2);
};

export const debounce = (fn, delay) => {
  let timer;

  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
