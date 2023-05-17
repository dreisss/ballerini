#!/bin/env ruby

# @param {Array} list
# @return {Array}
def sort_simplest(list)
  list.sort
end

print "Digite uma lista de números separados por espaços: "
list = gets.chomp.split(" ").map(&:to_i)

puts "A lista #{list} ordenada: #{sort_simplest(list)}."
