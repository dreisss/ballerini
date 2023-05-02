#!/bin/env bqn

Count1 ← +´=
Count2 ← +´(⥊⊒)
Count3 ← +´{𝕩⍷𝕨}

phrase ← "Frase de teste!"
character ← 'e'

•Show (phrase Count1 character)
•Show (phrase Count2 character)
•Show (phrase Count3 character)
