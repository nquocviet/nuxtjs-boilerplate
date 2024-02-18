export const pluralize = (count: number, noun: string, suffix = "s") => {
  return `${count} ${noun}${count !== 1 ? suffix : ""}`;
};

export const getCurrentMonthYear = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  return formattedDate.split(" ").join(", ");
};
