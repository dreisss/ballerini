#!/bin/env bqn

Count1 ← +´= # Compares character with each phrase character and accumulates when equal
Count2 ← +´·⥊⊒ # Built-in count function (formatting output)
Count3 ← +´{𝕩⍷𝕨} # Find any occurrence in the phrase and accumulates
Count4 ← ≠·/= # Filters characters that match and get this filter list length
Count5 ← ⊑⊒ # Use built-in function and get value

phrase‿character ← "Frase de teste!"‿'e'

•Show (phrase Count1 character)
•Show (phrase Count2 character)
•Show (phrase Count3 character)
•Show (phrase Count4 character)
•Show (phrase Count5 character)
