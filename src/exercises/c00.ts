import { TestCase } from "../types";

const ex00: TestCase = {
  given: ["a", "b", "z", "1"],
  expected: ["a", "b", "z", "1"],
  folder: "ex00",
  files: ["ft_putchar.c"],
  entrypoint: "ft_putchar",
  allowedFunctions: ["write"],
  argv: [],
  program: false,
};

const ex01: TestCase = {
  given: null,
  expected: "abcdefghijklmnopqrstuvwxyz",
  folder: "ex01",
  files: ["ft_print_alphabet.c"],
  entrypoint: "ft_print_alphabet",
  argv: [],
  allowedFunctions: ["write"],
  program: false,
};

const ex02: TestCase = {
  given: null,
  expected: "abcdefghijklmnopqrstuvwxyz".split("").reverse().join(),
  folder: "ex02",
  files: ["ft_print_reverse_alphabet.c"],
  entrypoint: "ft_print_reverse_alphabet",
  argv: [],
  allowedFunctions: ["write"],
  program: false,
};

export default {
  ex00,
  ex01,
  ex02,
};
