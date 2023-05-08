#!/bin/env ruby

def mean_a_simplest(list)
  list.sum / list.length.to_f
end

def mean_a_simples_2(list)
  list.reduce(:+) / list.length.to_f
end

def mean_g_simplest(list)
  list.reduce(:*) ** (1/list.length.to_f)
end

print "Digite uma lista de números separados por espaços: "
list = gets.chomp.split(" ").map { |n| n.to_i }

puts "A média aritmética da lista #{list} é #{mean_a_simplest(list)}."
puts "A média aritmética da lista #{list} é #{mean_a_simplest_2(list)}."
puts "A média geométrica da lista #{list} é #{mean_g_simplest(list)}."
