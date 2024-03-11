const seededRandom = (seed) => {
  const rootModulo = 16807; //primitive root modulo
  const mersPrime = 2 ** 31 - 1; //Mersenne prime
  let s = seed % mersPrime;

  const generateRandom = () => {
    s = (s * rootModulo) % mersPrime;
    return s / mersPrime;
  };

  return generateRandom;
};

export const fetchAPI = (date) => {
  const result = [];
  const random =
    typeof date === "string"
      ? seededRandom(new Date(date).getDate())
      : seededRandom(date.getDate());

  for (let i = 16; i <= 22; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};

export const submitAPI = (formData) => {
  if (formData) {
    return true;
  } else {
    return false;
  }
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return { ...state, times: fetchAPI(action.date) };
    default:
      return state;
  }
};

export const initializeTimes = () => {
  const today = new Date();
  return { times: fetchAPI(today) };
};
