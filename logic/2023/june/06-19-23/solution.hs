import Data.Char (digitToInt, isDigit)

sum_digits :: String -> Int
sum_digits = sum . map digitToInt . filter isDigit
