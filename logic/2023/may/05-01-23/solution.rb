#!/bin/env ruby

# @param {Array(Integer)} list
# @param {Integer} number
# @return {Boolean}
def has_number_simplest_1(list, number)
  list.include? number
end

# @param {Array(Integer)} list
# @param {Integer} number
# @return {Boolean}
def has_number_simplest_2(list, number)
  (list.count number) > 0
end

# @param {Array(Integer)} list
# @param {Integer} number
# @return {Boolean}
def has_number_loop(list, number)
  list.each do |value| 
    return true if value.eql? number
  end
  false
end

print "Digite uma lista de números separados por espaços: "
list = gets.chomp.split(" ").map(&:to_i)

print "Digite um número: "
number = gets.chomp.to_i

puts "A lista #{list} #{has_number_simplest_1(list, number) ? "" : "não "}tem o número #{number}."
puts "A lista #{list} #{has_number_simplest_2(list, number) ? "" : "não "}tem o número #{number}."
puts "A lista #{list} #{has_number_loop(list, number) ? "" : "não "}tem o número #{number}."
