import { Command, Flags } from "@oclif/core";
import { deepEqual } from "assert";
import { exec } from "child_process";
import checks from "../exercises";

type Days =
  //   | 'shell00'
  //   | 'shell01'
  "c00";
//   | 'c01'
//   | 'c02'
//   | 'c03'
//   | 'c04'
//   | 'c05'
//   | 'c06'
//   | 'c07'
//   | 'c08'
//   | 'c09'
//   | 'c10'
//   | 'c11'
//   | 'c12'
//   | 'c13'
//   | 'rush00'
//   | 'rush01'
//   | 'rush02'
//   | 'bsq';

/**
 *
 */
export default class Check extends Command {
  static description = "Check a specific piscine day";

  static examples = [``];

  static flags = {
    norminette: Flags.boolean({
      char: "n",
      description: "check the norm",
      required: false,
      default: true,
    }),
  };

  static args = [
    {
      name: "day",
      description: "day to check",
      required: true,
    },
    {
      name: "repository",
      description: "git repository or folder",
      required: true,
    },
  ];

  /**
   *
   */
  async run(): Promise<void> {
    const { args, flags } = await this.parse<
      {
        norminette: boolean;
      },
      {
        [name: string]: Days;
      }
    >(Check);
    const day = checks[args.day] ?? null;
    if (!day) {
      this.log("Day not found");
    }

    for (const [ex, testCase] of Object.entries(day)) {
      this.log(`Running on day ${args.day}::${ex}`);
      exec(`gcc -Wall -Werror -Wextra ${testCase}`);
      deepEqual(testCase.given, testCase.expected);
    }

    if (flags.norminette) {
      exec(`norminette ${args.day}`);
    }
  }
}
