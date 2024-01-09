const getStandardName = (name: string | undefined | null): string => {
  if (!name) {
    return "Notes";
  }

  return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
};

export default getStandardName;
