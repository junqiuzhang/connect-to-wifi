import { exec, ChildProcess } from 'child_process';
import { IResult } from '../interface';

async function connect(ssid: string, password: string): Promise<IResult> {
  const Command: string = 'networksetup -setairportnetwork';
  const Interface: string = 'en0';
  const commandString: string = `${Command} ${Interface} ${ssid} ${password}`;
  const child_process: ChildProcess = await exec(commandString);
  const { stdout, stderr } = child_process;
  
  child_process.kill();

  let stdoutStr: string = '';
  let stderrStr: string = '';
  if (stdout !== null) {
    stdoutStr = stdout.toString();
  }
  if (stderr !== null) {
    stderrStr = stderr.toString();
  }
  if (stderrStr.length > 0 || stdoutStr.includes('Could not find network') || stdoutStr.includes('Failed to join network')) {
    console.log(`\n ${password} connect ${ssid} failed`);
    return new Promise(() => {});
  } else {
    console.log(`\n ${password} connect ${ssid} succeed`);
    return {
      OperationResult: true,
      OperationObject: `\n ${ssid}'s password is ${password}`
    };
  }
  // return new Promise((resolve, reject) => {
  //   const child_process: ChildProcess = exec(commandString, (error, stdout, stderr) => {
  //     if (error instanceof Error || stdout.includes('Could not find network') || stdout.includes('Failed to join network')) {
  //       console.log(`\n ${password} connect ${ssid} failed`);
  //       // resolve({
  //       //   OperationResult: false,
  //       //   OperationObject: `\n ${stderr}`
  //       // })
  //       child_process.kill();
  //     } else {
  //       console.log(`\n ${password} connect ${ssid} succeed`);
  //       resolve({
  //         OperationResult: true,
  //         OperationObject: `\n ${ssid}'s password is ${password}`
  //       })
  //       child_process.kill();
  //     }
  //   });
  // })
}

export default connect;