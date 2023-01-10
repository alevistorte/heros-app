import { heros } from "../data/heros";

export const getHerosByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publisher "${publisher}" not founded`);
  }

  return heros.filter((h) => h.publisher === publisher);
};
