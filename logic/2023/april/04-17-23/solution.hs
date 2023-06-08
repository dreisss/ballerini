is_palindrome :: String -> Bool
is_palindrome = (==) <$> id <*> reverse
