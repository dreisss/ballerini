#!/bin/env ruby

def count_chars_simplest(phrase, character)
  phrase.count character
end

def count_chars_loop(phrase, character)
  count = 0
  phrase.each_char { |c| count += (c.eql? character) ? 1 : 0 }
  count
end

print "Digite uma frase: "
phrase = gets.chomp

print "Digite um caractere: "
character = gets.chomp

puts "A frase \"#{phrase}\" tem #{count_chars_simplest(phrase, character)} caracteres \"#{character}\"."
puts "A frase \"#{phrase}\" tem #{count_chars_loop(phrase, character)} caracteres \"#{character}\"."
