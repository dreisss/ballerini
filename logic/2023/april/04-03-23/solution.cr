#!/bin/env crystal

def count_chars_simplest(phrase : String, character : Char) : Int32
  phrase.count character
end

def count_chars_loop(phrase : String, character : Char) : Int32
  count : Int32 = 0
  phrase.each_char { |c| count += (c == character) ? 1 : 0 }
  count
end

print "Digite uma frase: "
phrase : String = gets.not_nil!

print "Digite um caractere: "
character : Char = gets.not_nil!.chomp.char_at 0

puts "A frase \"#{phrase}\" tem #{count_chars_simplest(phrase, character)} caracteres \"#{character}\"."
puts "A frase \"#{phrase}\" tem #{count_chars_loop(phrase, character)} caracteres \"#{character}\"."
