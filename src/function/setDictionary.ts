import write from './write';
import * as Dictionary from '../dictionary/index';

import { EDictionaryString } from '../constants';

const setDictionary = () => {
  let paramArr: Array<string> = process.argv.slice(2);
  let dataArr: Array<Array<string>> = paramArr.map((param: string): Array<string> => {
    return Dictionary.default[EDictionaryString[param]];
  });
  let data: string = '';
  let LenArr: Array<number> = dataArr.map((d: Array<string>): number => d.length);
  let numArr: Array<number> = [...LenArr];
  let finish: number = numArr.length + 1;
  while (finish > numArr.length) {
    let password: string = numArr.map((n: number, i): string => dataArr[i][n - 1]).join('');
    data = data.concat(`${password}\n`);
    let l: number = 0; // 借位
    numArr = numArr.map((n: number, i: number): number => {
      n += l; // 借位
      l = 0; // 清空借位
      if (i == 0) {
        n--; // 如果是个位则减一
      }
      if (n == 0) {
        n = LenArr[i]; // 如果减一后是-1则借位
        l = -1; // 借位
      }
      return n;
    });
    finish = numArr.reduce((pre: number, cur: number): number => pre + cur, 0);
  }
  let password: string = LenArr.map((n: number, i): string => dataArr[i][0]).join('');
  data = data.concat(`${password}\n`);
  write('myDictionary.txt', data);
}

setDictionary();
