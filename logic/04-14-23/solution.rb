#!/bin/env ruby

def greatest_simplest(numbers)
  numbers.max
end

def greatest_sort(numbers)
  numbers.sort.last
end

def greatest_classic(numbers)
  greatest = 0
  
  numbers.each do |current|
    greatest = current > greatest ? current : greatest
  end
  
  greatest
end

numbers = [8, 1, 4, 0, 3, 5, 2, 14, 33, 5, 7]

puts "O maio número da lista é #{greatest_simplest(numbers)}."
puts "O maio número da lista é #{greatest_sort(numbers)}."
puts "O maio número da lista é #{greatest_classic(numbers)}."
