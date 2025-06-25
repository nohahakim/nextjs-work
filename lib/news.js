import { DUMMY_NEWS } from "@/dummy-news";

export function getAvailableNewsYears() {
  return [
    ...new Set(DUMMY_NEWS.map((item) => new Date(item.date).getFullYear())),
  ].sort();
}

export function getNewsForYear(year) {
  return DUMMY_NEWS.filter(
    (item) => new Date(item.date).getFullYear() === parseInt(year)
  );
}

export function getLatestNews() {
  return DUMMY_NEWS.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(
    0,
    3
  );
}
export function getAvailableNewsMonths(year) {
  return [
    ...new Set(
      DUMMY_NEWS.filter(
        (item) => new Date(item.date).getFullYear() === parseInt(year)
      ).map((item) => new Date(item.date).getMonth() + 1)
    ),
  ].sort();
}

export function getNewsForYearAndMonth(year, month) {
  return DUMMY_NEWS.filter(
    (item) =>
      new Date(item.date).getFullYear() === parseInt(year) &&
      new Date(item.date).getMonth() + 1 === parseInt(month)
  );
}
