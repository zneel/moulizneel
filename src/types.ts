export interface TestCase {
  given: string[] | number[] | null;
  expected: string | number | string[] | number[];
  folder: string;
  files: string[];
  allowedFunctions: string[];
  entrypoint: string;
  argv: string[];
  program: boolean;
}
