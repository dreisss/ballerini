avg :: [Double] -> Double
avg = (/) <$> sum <*> realToFrac . length
