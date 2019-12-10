export default function currentTime(): string {
  const now = new Date();
  return `${now
    .getHours()
    .toString()
    .padStart(2, '0')}:${now
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;
}
