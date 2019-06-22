const YearString: Array<string> = [];
const NowYear: number = new Date().getFullYear();
for (let i = 1985; i <= NowYear; i++) {
  YearString.push(`${i}`);
}
export default YearString;