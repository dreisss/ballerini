count :: Char -> String -> Int
count char = length . filter (==char)
