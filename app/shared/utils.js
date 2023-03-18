export const capitalize = (text) => `${text.charAt(0).toUpperCase()}${text.slice(1)}`;

export const formatPlaceholder = (text) => {
    // split text based on capital letters
    const str = text.split(/(?=[A-Z])/).join(" ").toLowerCase();
    // Capitalize the first letter and return entire string
    return capitalize(str);
  };