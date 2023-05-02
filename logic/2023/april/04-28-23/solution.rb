#!/bin/env ruby

def invert_phrase_simplest(phrase)
  phrase.reverse
end

def invert_phrase_loop(phrase)
  inverted_phrase = ""
  (1..phrase.length).each do |i|
    inverted_phrase += phrase[phrase.length - i]
  end
  inverted_phrase
end

def invert_phrase_swap(phrase)
  (1..phrase.length/2).each do |i|
    swap = phrase[i - 1]
    phrase[i - 1] = phrase[phrase.length - i]
    phrase[phrase.length - i] = swap
  end
  phrase
end

print "Digite uma frase: "
phrase = gets.chomp

puts "A frase \"#{phrase}\" invertida fica \"#{invert_phrase_simplest(phrase)}\"."
puts "A frase \"#{phrase}\" invertida fica \"#{invert_phrase_loop(phrase)}\"."
puts "A frase \"#{phrase}\" invertida fica \"#{invert_phrase_swap(phrase)}\"."
