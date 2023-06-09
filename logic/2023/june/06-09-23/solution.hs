digits_only :: String -> Bool
digits_only = all is_digit
  where is_digit char
          | char >= '9' = False
          | char <= '0' = False
          | otherwise = True
