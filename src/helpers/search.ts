export const parseSelected = (searchParams: URLSearchParams, name: string) => {
  const currentValue = searchParams.get(name);
  if (currentValue) {
    return currentValue.split(',');
  }
  return [];
};
