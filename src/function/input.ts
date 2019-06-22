import * as readline from 'readline';

const Question: string = '请输入要破解的Wifi名:';

const input = (): Promise<string> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise((resolve, reject) => {
    rl.question(Question, (Network_ssid) => {
      resolve(Network_ssid);
    });
  });
}

export default input;
