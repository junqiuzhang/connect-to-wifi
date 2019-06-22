import * as fs from 'fs';
import * as path from 'path';
import { IResult } from '../interface';

const read = (fileName: string): Promise<IResult> => {
  const url: string = path.resolve(`./src/dictionary/${fileName}`);
  // 创建可读流
  // const readerStream = fs.createReadStream(url);
  // // 设置编码为 utf8。
  // readerStream.setEncoding('UTF8');

  // return new Promise((resolve, reject) => {
  //   // 处理流事件 --> data, end, and error
  //   readerStream.on('data',(data) => {
  //     resolve({
  //       OperationResult: true,
  //       OperationObject: data
  //     })
  //   });
  //   // 处理流事件 --> data, end, and error
  //   readerStream.on('error', (err) => {
  //     resolve({
  //       OperationResult: false,
  //       OperationObject: err
  //     })
  //   });
  // })
  return new Promise((resolve, reject) => {
    fs.readFile(url, 'utf-8', (error, data) => {
      if (error instanceof Error || data.length === 0) {
        console.log(`\n read ${fileName} failed`);
        // resolve({
        //   OperationResult: false,
        //   OperationObject: data
        // });
      } else {
        console.log(`\n read ${fileName} succeed`);
        resolve({
          OperationResult: true,
          OperationObject: data
        });
      }
    });
  })
}

export default read;