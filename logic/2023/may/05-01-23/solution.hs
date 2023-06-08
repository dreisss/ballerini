exist :: Int -> [Int] -> Bool
exist number = (>=1) . length . filter (==number)
