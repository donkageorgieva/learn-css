export const formatStringForCompare = (str: string) => {
  return str
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .trim()
    .toLowerCase();
};
