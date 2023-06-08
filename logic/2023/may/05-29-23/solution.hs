import Data.Set (toList, fromList)
import Data.List (sortBy)

frequency numbers n = [n, length $ filter (==n) numbers]

frequent :: Int -> [Int] -> Int
frequent k numbers = (sortBy frequency' $ unique (map (frequency numbers) numbers)) !! (k - 1) !! 0
  where frequency' x y = compare (last y) $ last x
    ; unique = toList .fromList
