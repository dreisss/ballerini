#!/bin/env ruby

# @param {String} phrase
# @return {Boolean}
def is_palidrome(phrase)
  phrase = phrase.downcase.delete " "
  phrase == phrase.reverse
end

# @param {String} phrase
# @return {Boolean}
def is_palidrome_loop(phrase)
  phrase = phrase.downcase.delete " "
  length = phrase.length
  
  phrase.chars.each_index do |i|
    return false if phrase[i].eql? phrase[length - i]
  end
  
  true
end

print "Digite uma frase: "
phrase = gets.chomp

puts "A frase \"#{phrase}\" #{is_palidrome(phrase) ? "" : "não "}é um palídromo."
puts "A frase \"#{phrase}\" #{is_palidrome_loop(phrase) ? "" : "não "}é um palídromo."
