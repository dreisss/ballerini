#!/bin/env ruby

# @param {String} phrase
# @param {String} character
# @return {Integer}
def count_chars_simplest(phrase, character)
  phrase.count character
end

# @param {String} phrase
# @param {String} character
# @return {Integer}
def count_chars_loop(phrase, character)
  count = 0
  phrase.each_char { |c| count += (c.eql? character) ? 1 : 0 }
  count
end

# @param {String} phrase
# @param {String} character
# @return {Integer}
def count_chars_filter(phrase, character)
  phrase.chars.filter { |c| c.eql? character }.length
end

print "Digite uma frase: "
phrase = gets.chomp

print "Digite um caractere: "
character = gets.chomp

puts "A frase \"#{phrase}\" tem #{count_chars_simplest(phrase, character)} caracteres \"#{character}\"."
puts "A frase \"#{phrase}\" tem #{count_chars_loop(phrase, character)} caracteres \"#{character}\"."
puts "A frase \"#{phrase}\" tem #{count_chars_filter(phrase, character)} caracteres \"#{character}\"."
