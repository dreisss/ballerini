import Data.List (delete)

sort'' numbers new
  | null numbers = new
  | otherwise = sort'' (delete max numbers) $ max:new
    where max = maximum numbers

sort' :: [Int] -> [Int]
sort' numbers = sort'' numbers []
