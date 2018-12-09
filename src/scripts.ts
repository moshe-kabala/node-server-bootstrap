import * as bl from "./module1/bl";
import { isUndefined } from "util";

export namespace Scripts {
  export async function run(args) {
    // implement your script here b
    if (args["install"]) {
      await doScript(async () => {
        process.title = "system-manager-install";
        console.log("install  system management");
        // await bl.someAction()
      });
    }
    if (args["create_mock"]) {
      await doScript(async () => {
        process.title = "system-manager-create-mock";
        console.log("create-mocks started ... ");
        // get the params from the script
        const amount = parseInt(args["create_mock"], 10) || 100;
        // turn to some bl action to do the script job
        // await bl.someAction()
        console.log("done creating mocks");
      });
    }
  }

  export async function doScript(action, isExit = true) {
    let exitCode = 0;
    try {
      await action();
    } catch (err) {
      console.error(err);

      if (!isUndefined(err.errorCode)) {
        exitCode = err.errorCode;
      } else {
        exitCode = 1;
      }
    }
    if (isExit || exitCode !== 0) {
      process.exit(exitCode);
    }
  }
}
