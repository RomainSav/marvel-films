export const stringToSlug = (...args: unknown[]): string => {
  let str = args
    .join("-")
    .replace(/\s+/g, "-")
    .normalize("NFD")
    .replace(/[^a-zA-Z0-9-]+/g, "")
    .toLowerCase();

  if (str.startsWith("-")) str = str.substring(1);

  return str;
};

export const slugToId = (slug: string): number | null => {
  const id = Number(slug.split("-")[0]);
  if (typeof id !== "number") return null;

  return id;
};