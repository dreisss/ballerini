#!/bin/env crystal

def greatest_simplest(numbers : Array(Int32)) : Int32
  numbers.max
end

def greatest_sort(numbers : Array(Int32)) : Int32
  numbers.sort.last
end

def greatest_classic(numbers : Array(Int32)) : Int32
  greatest : Int32 = 0
  
  numbers.each do |current|
    greatest = current > greatest ? current : greatest
  end
  
  greatest
end

print "Digite uma lista de números separados por espaços: "
numbers : Array(Int32) = gets.not_nil!.chomp.split(" ").map { |c| c.to_i32 }

puts "O maio número da lista é #{greatest_simplest(numbers)}."
puts "O maio número da lista é #{greatest_sort(numbers)}."
puts "O maio número da lista é #{greatest_classic(numbers)}."
