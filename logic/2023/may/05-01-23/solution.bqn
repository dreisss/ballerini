#!/bin/env bqn

IsIn1 ← ∨´= # Verify if any of elements equals number
IsIn2 ← +´(⥊∊) # Use built-in function (and format output)
IsIn3 ← ⊑∊ # Use built-in function(return a table) and get the first element

numbers‿number ← ⟨1,2,3,4,5,6,7,8,9,10,10⟩‿10

•Show (number IsIn1 numbers)
•Show (number IsIn2 numbers)
•Show (number IsIn3 numbers)
