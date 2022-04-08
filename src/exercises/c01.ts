import { TestCase } from "../types";

export const ex00: TestCase = {
  given: ["a", "b", "z", "1"],
  expected: ["a", "b", "z", "1"],
  folder: "ex00",
  allowedFunctions: [],
  files: [""],
  program: false,
};

export const ex01: TestCase = {
  given: null,
  expected: "abcdefghijklmnopqrstuvwxyz",
  folder: "ex01",
  allowedFunctions: [],
  files: [""],
  program: false,
};

export const ex02: TestCase = {
  given: null,
  expected: "abcdefghijklmnopqrstuvwxyz".split("").reverse().join(),
  folder: "ex02",
  allowedFunctions: [],
  files: [""],
  program: false,
};
