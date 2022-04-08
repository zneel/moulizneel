import assert from "assert";
import {
  argGenerator,
  checkForbiddenFunction,
  mainGenerator,
} from "../src/helpers/compiler";

describe("Compiler", () => {
  describe("checkForbiddenFunction", () => {
    it("should detect forbidden functions", () => {
      const cFile = `
              /* ************************************************************************** */
              /*                                                                            */
              /*                                                        :::      ::::::::   */
              /*   ft_putchar.c                                       :+:      :+:    :+:   */
              /*                                                    +:+ +:+         +:+     */
              /*   By: ebouvier <ebouvier@student.42.fr>          +#+  +:+       +#+        */
              /*                                                +#+#+#+#+#+   +#+           */
              /*   Created: 2022/03/30 20:16:19 by ebouvier          #+#    #+#             */
              /*   Updated: 2022/03/30 22:44:44 by ebouvier         ###   ########.fr       */
              /*                                                                            */
              /* ************************************************************************** */
              
              #include <unistd.h>
              
              void	ft_putchar(char c)
              {
                  write(1, &c, 1);
                  printf("");
              }
              `;
      const result = checkForbiddenFunction(["write"], cFile);
      assert.equal(result, true);
    });

    it("should pass since there's no forbidden functions", () => {
      const cFile = `
              /* ************************************************************************** */
              /*                                                                            */
              /*                                                        :::      ::::::::   */
              /*   ft_putchar.c                                       :+:      :+:    :+:   */
              /*                                                    +:+ +:+         +:+     */
              /*   By: ebouvier <ebouvier@student.42.fr>          +#+  +:+       +#+        */
              /*                                                +#+#+#+#+#+   +#+           */
              /*   Created: 2022/03/30 20:16:19 by ebouvier          #+#    #+#             */
              /*   Updated: 2022/03/30 22:44:44 by ebouvier         ###   ########.fr       */
              /*                                                                            */
              /* ************************************************************************** */
              
              #include <unistd.h>
              
              void	ft_putchar(char c)
              {
                  write(1, &c, 1);
              }
              `;
      const result = checkForbiddenFunction(["write"], cFile);
      assert.equal(result, false);
    });
    // describe("mainGenerator", () => {
    //   it("should generate a main with ft_putchar function", () => {
    //     const functionName = "ft_putchar";
    //     const main = mainGenerator(functionName, ["a"]);
    //     assert.equal(main, `int main(void) { ft_putchar('a'); return 0; }`);
    //   });
    // });
  });
  describe("argGenerator", () => {
    it("should generate correct argument for char", () => {
      const char = argGenerator(["c"]);
      assert.equal(char, "'c'");
    });
    it("should generate correct argument for chars", () => {
      const char = argGenerator(["c", "d", "e"]);
      assert.equal(char, "'c','d','e'");
    });
  });
});
