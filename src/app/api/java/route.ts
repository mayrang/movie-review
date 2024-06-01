import { exec } from "child_process";
import path from "path";
import os from "os";
import { NextRequest, NextResponse } from "next/server";

type Data = {
  output?: string;
  error?: string;
};

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method === "POST") {
    const { input } = await req.json();
    console.log("input", input);

    let desktopPath = "";
    switch (os.platform()) {
      case "win32":
        desktopPath = path.join(os.homedir(), "Desktop");
        break;
      case "darwin":
        desktopPath = path.join(os.homedir(), "Desktop");
        break;
      case "linux":
        desktopPath = path.join(os.homedir(), "Desktop");
        break;
      default:
        return new Response("Unsupport", {
          status: 500,
        });
    }

    const javaFilePath = path.join(desktopPath);
    const className = "JavaProgram";
    console.log(`java -cp ${javaFilePath} ${className}`);

    const command = `java -cp  ${javaFilePath} ${className}`;

    try {
      const output = await new Promise<string>((resolve, reject) => {
        const process = exec(command, (error, stdout, stderr) => {
          if (error) {
            reject(stderr);
          } else {
            resolve(stdout);
          }
        });

        // 자바 프로그램에 입력 전달
        process.stdin?.write(input + "\n");
        process.stdin?.end();
      });

      return NextResponse.json({ output });
    } catch (error) {
      return NextResponse.json({ error: String(error) }, { status: 500 });
    }
  } else {
    return new Response("Method Not Allowed", {
      status: 405,
    });
  }
}
