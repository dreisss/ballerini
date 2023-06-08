invert text new
  | null text = new
  | otherwise = invert (tail text) $ (head text):new

reverse' :: String -> String
reverse' text = invert text []
