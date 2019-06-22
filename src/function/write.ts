import * as fs from 'fs';
import * as path from 'path';
import { IResult } from '../interface';

const write = (fileName: string, data: string): Promise<IResult> => {
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
    fs.writeFile(url, data, (error) => {
      if (error instanceof Error) {
        console.log(`\n write ${fileName} failed`);
        // resolve({
        //   OperationResult: false,
        //   OperationObject: data
        // });
      } else {
        console.log(`\n write ${fileName} succeed`);
        resolve({
          OperationResult: true,
          OperationObject: ''
        });
      }
    });
  })
}

export default write;