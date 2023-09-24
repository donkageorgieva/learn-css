export const formatStringForCompare = (string: string) => {
  return string
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .trim()
    .toLowerCase();
};
