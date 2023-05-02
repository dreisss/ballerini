#!/bin/env crystal

def is_palidrome(phrase : String) : Bool
  phrase = phrase.downcase.delete " "
  phrase == phrase.reverse
end

print "Digite uma frase: "
phrase : String = gets.not_nil!.chomp

puts "A frase \"#{phrase}\" #{is_palidrome(phrase) ? "" : "não "}é um palídromo."
