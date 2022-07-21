export const formatDate = (date) => {
  if (!date) {
    return date;
  }

  return new Date(+date).toLocaleDateString();
};