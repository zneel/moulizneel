import { execSync } from "child_process";
import { TestCase } from "../types";

const CC = "gcc";
const CFLAGS = "-Wall -Werror -Wextra";

const argGenerator = (args: string[]): string => {
  let str = "";
  if (args.every((arg) => /\w+/.test(arg))) {
    args.forEach((arg, index) => {
      str += `'${arg}'`;
      if (index < args.length - 1) str += ",";
    });
  }
  return str;
};

const mainGenerator = (functionName: string, args: string[]) => {
  const charArg = args.length === 1 && typeof args[0] === "string";
  const stringArg = args;
  const intArg = args.length;
  const fn =
    args.length > 0
      ? `${functionName}(${args.join(",")})`
      : `${functionName}()`;
  return `int main(void) { ${fn}; return 0; }`;
};

const checkForbiddenFunction = (
  allowedFunctions: string[],
  fileContent: string
) => {
  let hasForbiddenFunction = false;
  const functionMatcher = /(ft_)?([\w\d]+)(\(.*\))/g;
  const matches = fileContent.matchAll(functionMatcher);
  for (const match of matches) {
    hasForbiddenFunction = !match[1] && !allowedFunctions.includes(match[2]);
    if (hasForbiddenFunction) break;
  }

  return hasForbiddenFunction;
};

const getCompilationString = (
  files: string[],
  entrypoint: string,
  args: string[],
  program = false
) => {
  return program
    ? `${CC} ${CFLAGS} ${files.join(" ")} ${mainGenerator(
        entrypoint,
        args
      )} -o a.out`
    : `${CC} ${CFLAGS} ${files.join(" ")}-o a.out`;
};

const compile = (str: string) => execSync(str);
const execute = (path: string) => execSync(path);

const doTest = (test: TestCase, day: string, ex: string) => {
  const compilationString = getCompilationString(
    test.files,
    test.entrypoint,
    test.argv,
    test.program
  );
  const outDir = `/tmp/moulizneel/${day}/${ex}/a.out`;
  compile(compilationString);
  execute(outDir);
};

export { compile, checkForbiddenFunction, mainGenerator, doTest, argGenerator };
