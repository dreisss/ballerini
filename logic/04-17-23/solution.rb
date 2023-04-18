#!/bin/env ruby

"".delete(" ")

def is_palidrome(phrase)
  phrase = phrase.downcase.delete " "
  phrase.eql? phrase.reverse
end

phrase = "Roma Me Tem Amor"

puts "A frase \"#{phrase}\" #{is_palidrome(phrase) ? "" : "não "}é um palídromo."
