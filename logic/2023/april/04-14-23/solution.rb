#!/bin/env ruby

# @param {Array(Integer)} numbers
# @return {Integer}
def greatest_simplest(numbers)
  numbers.max
end

# @param {Array(Integer)} numbers
# @return {Integer}
def greatest_sort(numbers)
  numbers.sort.last
end

# @param {Array(Integer)} numbers
# @return {Integer}
def greatest_classic(numbers)
  greatest = 0
  
  numbers.each do |current|
    greatest = current > greatest ? current : greatest
  end
  
  greatest
end

print "Digite uma lista de números separados por espaços: "
numbers = gets.chomp.split(" ").map(&:to_i)

puts "O maio número da lista é #{greatest_simplest(numbers)}."
puts "O maio número da lista é #{greatest_sort(numbers)}."
puts "O maio número da lista é #{greatest_classic(numbers)}."
