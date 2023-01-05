export function formatDate(date: number): string {
  const time = new Date(date);
  return `${time.toLocaleDateString('ru-Ru')} ${time.getUTCHours()}:${normalizeDigit(time.getUTCMinutes())}`
}

function normalizeDigit(num: number): string {
  return (num > 9) ? num.toString() : `0${num}`
}

export function getTimeFrom2Minute(num: number): string {
  const mm = normalizeDigit(Math.floor(num / 60));
  const sec = normalizeDigit(num % 60);
  return `${mm} : ${sec}`;
}

export function getTurn(startTime: number) {
  return Math.floor((Date.now() - new Date(startTime).getTime()) / (2 * 60 * 1000));
}

export function getInitialTime(startTime: number) {
  return 120 - Math.floor(((Date.now() - new Date(startTime).getTime()) % (2 * 60 * 1000)) / 1000);
}