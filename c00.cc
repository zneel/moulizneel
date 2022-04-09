#include <gtest/gtest.h>

#include "c00/ex00/ft_putchar.c"

TEST(C00_TEST, BasicAssertions)
{
  struct stat st;
  int bytesWritten = 0;

  // Redirect stdout
  freopen("redir.txt", "w", stdout);
  ft_putchar('c');
  ft_putchar('a');

  // assert checking
  stat("redir.txt", &st);
  bytesWritten = st.st_size;
  EXPECT_EQ(bytesWritten, 2);
}