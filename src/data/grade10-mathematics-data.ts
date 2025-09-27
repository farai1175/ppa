export interface Lesson {
  id: string
  title: string
  description: string
  duration: number
  content: {
    introduction: string
    keyPoints: string[]
    examples: string[]
    practice: string[]
  }
}

export interface Topic {
  id: string
  title: string
  description: string
  lessons: Lesson[]
  totalDuration: number
}

export const grade10MathematicsTopics: Topic[] = [
  {
    id: 'number-systems',
    title: 'Number Systems',
    description: 'Real numbers, rational and irrational numbers, surds, and rounding',
    totalDuration: 60,
    lessons: [
      {
        id: 'real-numbers',
        title: 'Real Numbers: Rational and Irrational',
        description: 'Understanding that real numbers can be rational or irrational',
        duration: 20,
        content: {
          introduction: 'Real numbers include all the numbers that can be found on the number line. They are divided into two main categories: rational numbers (which can be expressed as fractions) and irrational numbers (which cannot be expressed as simple fractions).',
          keyPoints: [
            'Real numbers: all numbers on the number line',
            'Rational numbers: can be expressed as p/q where p and q are integers, q ≠ 0',
            'Irrational numbers: cannot be expressed as simple fractions',
            'Rational numbers include: integers, fractions, terminating decimals, repeating decimals',
            'Irrational numbers include: surds, π, e, and non-repeating non-terminating decimals',
            'Every real number is either rational or irrational'
          ],
          examples: [
            'Example 1: Rational numbers\n3/4 = 0.75 (terminating decimal)\n2/3 = 0.666... (repeating decimal)\n5 = 5/1 (integer)',
            'Example 2: Irrational numbers\n√2 ≈ 1.414213... (non-terminating, non-repeating)\nπ ≈ 3.141592... (non-terminating, non-repeating)\n√3 ≈ 1.732050... (non-terminating, non-repeating)',
            'Example 3: Classifying numbers\nClassify: 0.25, √16, √7, π, 2/9\n0.25 = 1/4 (rational)\n√16 = 4 (rational)\n√7 (irrational)\nπ (irrational)\n2/9 = 0.222... (rational)'
          ],
          practice: [
            'Classify the following as rational or irrational: √25, √10, 3/7, π, 0.333..., √2',
            'Give three examples of rational numbers and three examples of irrational numbers',
            'Explain why √9 is rational but √11 is irrational'
          ]
        }
      },
      {
        id: 'surds-between-integers',
        title: 'Surds Between Integers',
        description: 'Establishing between which two integers a given simple surd lies',
        duration: 20,
        content: {
          introduction: 'Surds are irrational numbers that are expressed using root symbols. We can determine between which two consecutive integers a surd lies by finding perfect squares on either side of the number under the root.',
          keyPoints: [
            'Surds: irrational roots, like √2, √3, √5',
            'To find between which integers √n lies: find perfect squares closest to n',
            'If a² < n < b², then a < √n < b',
            'This works for square roots, cube roots, and other roots',
            'Use estimation and perfect squares/cubes as reference points',
            'Can verify by squaring/cubing the integers'
          ],
          examples: [
            'Example 1: √10\nPerfect squares: 3² = 9, 4² = 16\n9 < 10 < 16\nTherefore: 3 < √10 < 4\nCheck: 3² = 9, 4² = 16, √10 ≈ 3.16',
            'Example 2: √50\nPerfect squares: 7² = 49, 8² = 64\n49 < 50 < 64\nTherefore: 7 < √50 < 8\nCheck: 7² = 49, 8² = 64, √50 ≈ 7.07',
            'Example 3: ³√20\nPerfect cubes: 2³ = 8, 3³ = 27\n8 < 20 < 27\nTherefore: 2 < ³√20 < 3\nCheck: 2³ = 8, 3³ = 27, ³√20 ≈ 2.71'
          ],
          practice: [
            'Between which two integers does √15 lie?',
            'Find between which two consecutive integers ³√30 lies',
            'Determine between which integers √90 lies and verify your answer'
          ]
        }
      },
      {
        id: 'rounding-numbers',
        title: 'Rounding Real Numbers',
        description: 'Rounding real numbers to an appropriate degree of accuracy',
        duration: 20,
        content: {
          introduction: 'Rounding is the process of reducing the number of significant digits in a number while keeping its value close to the original. This is important for practical applications and when working with measurements.',
          keyPoints: [
            'Rounding to a specific number of decimal places',
            'Rounding to a specific number of significant figures',
            'Rules for rounding: look at the digit after the required precision',
            'If digit ≥ 5, round up; if digit < 5, round down',
            'Significant figures: all non-zero digits, zeros between non-zero digits, trailing zeros after decimal',
            'Appropriate degree of accuracy depends on context and measurement precision'
          ],
          examples: [
            'Example 1: Decimal places\n3.14159 to 2 decimal places = 3.14\n3.14159 to 3 decimal places = 3.142\n2.71828 to 4 decimal places = 2.7183',
            'Example 2: Significant figures\n123.456 to 3 significant figures = 123\n0.004567 to 2 significant figures = 0.0046\n789.01 to 4 significant figures = 789.0',
            'Example 3: Practical applications\nLength: 12.347 cm (measured to nearest mm) → 12.3 cm (1 decimal place)\nMass: 2.4567 kg → 2.46 kg (2 decimal places)\nTime: 45.678 seconds → 46 seconds (nearest whole number)'
          ],
          practice: [
            'Round 3.1415926535 to 3 decimal places',
            'Round 0.0023456 to 2 significant figures',
            'Round 123.456789 to 4 significant figures',
            'A measurement is 15.678 cm. Round to appropriate accuracy if measured with a ruler marked in mm'
          ]
        }
      }
    ]
  },
  {
    id: 'algebraic-expressions',
    title: 'Algebraic Expressions',
    description: 'Multiplication, factorization, and simplification of algebraic expressions',
    totalDuration: 100,
    lessons: [
      {
        id: 'multiplication-revision',
        title: 'Revision: Multiplication of Algebraic Expressions',
        description: 'Revise multiplication of monomial by binomial/trinomial and binomial by binomial',
        duration: 25,
        content: {
          introduction: 'Algebraic multiplication involves applying the distributive property to multiply terms. This revision covers multiplying monomials by binomials and trinomials, as well as multiplying binomials by binomials.',
          keyPoints: [
            'Distributive property: a(b + c) = ab + ac',
            'Monomial × binomial: multiply monomial by each term in binomial',
            'Monomial × trinomial: multiply monomial by each term in trinomial',
            'Binomial × binomial: use FOIL method (First, Outer, Inner, Last)',
            'FOIL: (a + b)(c + d) = ac + ad + bc + bd',
            'Always collect like terms after multiplication'
          ],
          examples: [
            'Example 1: Monomial × binomial\n3x(2x + 5) = 3x × 2x + 3x × 5 = 6x² + 15x\n2y(3y² - 4y + 1) = 2y × 3y² + 2y × (-4y) + 2y × 1 = 6y³ - 8y² + 2y',
            'Example 2: Monomial × trinomial\n4x(2x² - 3x + 5) = 4x × 2x² + 4x × (-3x) + 4x × 5 = 8x³ - 12x² + 20x\n-2a(3a² + 4a - 1) = -2a × 3a² + (-2a) × 4a + (-2a) × (-1) = -6a³ - 8a² + 2a',
            'Example 3: Binomial × binomial (FOIL)\n(x + 2)(x + 3) = x×x + x×3 + 2×x + 2×3 = x² + 3x + 2x + 6 = x² + 5x + 6\n(2x - 1)(3x + 4) = 2x×3x + 2x×4 + (-1)×3x + (-1)×4 = 6x² + 8x - 3x - 4 = 6x² + 5x - 4'
          ],
          practice: [
            'Multiply: 5x(3x - 2)',
            'Multiply: 2y(4y² - 3y + 7)',
            'Multiply: (x + 4)(x - 3)',
            'Multiply: (3x - 2)(2x + 5)'
          ]
        }
      },
      {
        id: 'binomial-trinomial',
        title: 'Multiplication of a Binomial by a Trinomial',
        description: 'Multiplying binomial expressions by trinomial expressions',
        duration: 25,
        content: {
          introduction: 'When multiplying a binomial by a trinomial, we use the extended distributive property. Each term in the binomial must be multiplied by each term in the trinomial, and then like terms are collected.',
          keyPoints: [
            'Binomial × trinomial: (a + b)(c + d + e) = ac + ad + ae + bc + bd + be',
            'Each term in binomial multiplies each term in trinomial',
            'Systematic approach prevents missing terms',
            'Collect like terms after multiplication',
            'Result is usually a trinomial or polynomial',
            'Check: number of terms before = 2 + 3 = 5, after collecting like terms ≤ 5'
          ],
          examples: [
            'Example 1: (x + 2)(x² + 3x + 4)\n= x(x² + 3x + 4) + 2(x² + 3x + 4)\n= x³ + 3x² + 4x + 2x² + 6x + 8\n= x³ + 5x² + 10x + 8',
            'Example 2: (2x - 1)(3x² - 4x + 5)\n= 2x(3x² - 4x + 5) + (-1)(3x² - 4x + 5)\n= 6x³ - 8x² + 10x - 3x² + 4x - 5\n= 6x³ - 11x² + 14x - 5',
            'Example 3: (x + 3)(x² - 5x + 2)\n= x(x² - 5x + 2) + 3(x² - 5x + 2)\n= x³ - 5x² + 2x + 3x² - 15x + 6\n= x³ - 2x² - 13x + 6'
          ],
          practice: [
            'Multiply: (x + 1)(x² + 2x + 3)',
            'Multiply: (2x - 3)(x² + 4x - 1)',
            'Multiply: (x - 2)(3x² - x + 4)',
            'Multiply: (3x + 2)(2x² - 5x + 3)'
          ]
        }
      },
      {
        id: 'factorization-revision',
        title: 'Revision: Factorization',
        description: 'Revise factorization types from Grade 9: difference of squares, trinomials, grouping',
        duration: 25,
        content: {
          introduction: 'Factorization is the process of breaking down an expression into a product of simpler expressions. This revision covers the factorization types learned in Grade 9: difference of squares, trinomials, and grouping in pairs.',
          keyPoints: [
            'Difference of squares: a² - b² = (a - b)(a + b)',
            'Trinomials: ax² + bx + c, find two numbers that multiply to ac and add to b',
            'Grouping in pairs: group terms to find common factors',
            'Always check for common factors first',
            'Factor completely: no further factorization possible',
            'Check by expanding the factors'
          ],
          examples: [
            'Example 1: Difference of squares\nx² - 9 = x² - 3² = (x - 3)(x + 3)\n4x² - 25 = (2x)² - 5² = (2x - 5)(2x + 5)\n9y² - 16z² = (3y)² - (4z)² = (3y - 4z)(3y + 4z)',
            'Example 2: Trinomials\nx² + 5x + 6 = (x + 2)(x + 3)  [2×3=6, 2+3=5]\nx² - 7x + 12 = (x - 3)(x - 4)  [(-3)×(-4)=12, -3+(-4)=-7]\n2x² + 7x + 3 = (2x + 1)(x + 3)  [2×3=6, 1×3=3, 6+3=9→ wait, try: 1×3=3, 2×3=6, 1+6=7]',
            'Example 3: Grouping in pairs\nax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y)\n2x² + 4x + 3x + 6 = 2x(x + 2) + 3(x + 2) = (2x + 3)(x + 2)\nxy - 2x + 3y - 6 = x(y - 2) + 3(y - 2) = (x + 3)(y - 2)'
          ],
          practice: [
            'Factorize: x² - 16',
            'Factorize: x² + 8x + 15',
            'Factorize: 3x² + 10x + 3',
            'Factorize by grouping: 2xy + 4x + 3y + 6'
          ]
        }
      },
      {
        id: 'sum-difference-cubes',
        title: 'Sum and Difference of Two Cubes',
        description: 'Factorization of sum and difference of two cubes',
        duration: 25,
        content: {
          introduction: 'The sum and difference of two cubes are special factorization patterns. These formulas allow us to factor expressions of the form a³ + b³ and a³ - b³ into products of binomials and trinomials.',
          keyPoints: [
            'Sum of cubes: a³ + b³ = (a + b)(a² - ab + b²)',
            'Difference of cubes: a³ - b³ = (a - b)(a² + ab + b²)',
            'Remember the signs: SOAP - Same, Opposite, Always Positive',
            'For sum: (a + b)(a² - ab + b²)',
            'For difference: (a - b)(a² + ab + b²)',
            'Check by expanding the factors'
          ],
          examples: [
            'Example 1: Sum of cubes\nx³ + 8 = x³ + 2³ = (x + 2)(x² - x×2 + 2²) = (x + 2)(x² - 2x + 4)\n27y³ + 1 = (3y)³ + 1³ = (3y + 1)((3y)² - 3y×1 + 1²) = (3y + 1)(9y² - 3y + 1)',
            'Example 2: Difference of cubes\nx³ - 27 = x³ - 3³ = (x - 3)(x² + x×3 + 3²) = (x - 3)(x² + 3x + 9)\n8y³ - 125 = (2y)³ - 5³ = (2y - 5)((2y)² + 2y×5 + 5²) = (2y - 5)(4y² + 10y + 25)',
            'Example 3: More complex examples\n64x³ + 1 = (4x)³ + 1³ = (4x + 1)(16x² - 4x + 1)\n125x³ - 8y³ = (5x)³ - (2y)³ = (5x - 2y)(25x² + 10xy + 4y²)'
          ],
          practice: [
            'Factorize: x³ + 27',
            'Factorize: 8x³ - 1',
            'Factorize: 27y³ + 64',
            'Factorize: 125x³ - 8y³'
          ]
        }
      }
    ]
  },
  {
    id: 'algebraic-fractions',
    title: 'Algebraic Fractions',
    description: 'Simplifying, adding, and subtracting algebraic fractions using factorization',
    totalDuration: 50,
    lessons: [
      {
        id: 'simplifying-algebraic-fractions',
        title: 'Simplifying Algebraic Fractions',
        description: 'Simplifying algebraic fractions using factorization with denominators of cubes',
        duration: 50,
        content: {
          introduction: 'Algebraic fractions are fractions where the numerator and/or denominator contain algebraic expressions. To simplify them, we factorize both numerator and denominator, then cancel common factors.',
          keyPoints: [
            'Factorize numerator and denominator completely',
            'Cancel common factors (not terms)',
            'Sum and difference of cubes: a³ ± b³ = (a ± b)(a² ∓ ab + b²)',
            'Denominators may involve cubes (limited to sum and difference of cubes)',
            'Cannot divide by zero: denominator ≠ 0',
            'Simplified form has no common factors'
          ],
          examples: [
            'Example 1: Basic simplification\n(x² - 4)/(x² - x - 6) = (x - 2)(x + 2)/(x - 3)(x + 2) = (x - 2)/(x - 3), x ≠ -2',
            'Example 2: With cubes\n(x³ - 8)/(x² - 4) = (x - 2)(x² + 2x + 4)/[(x - 2)(x + 2)] = (x² + 2x + 4)/(x + 2), x ≠ 2',
            'Example 3: Complex fractions\n(x³ + 27)/(x³ + 3x² + 2x - 12)\n= (x + 3)(x² - 3x + 9)/[(x + 3)(x² - 2)]\n= (x² - 3x + 9)/(x² - 2), x ≠ -3',
            'Example 4: Addition of fractions\n1/(x + 2) + 3/(x² - 4) = 1/(x + 2) + 3/[(x - 2)(x + 2)]\n= (x - 2)/[(x - 2)(x + 2)] + 3/[(x - 2)(x + 2)]\n= (x - 2 + 3)/[(x - 2)(x + 2)] = (x + 1)/[(x - 2)(x + 2)]'
          ],
          practice: [
            'Simplify: (x² - 9)/(x² + 2x - 15)',
            'Simplify: (x³ + 64)/(x² + 4x)',
            'Simplify: (x³ - 1)/(x² - 1)',
            'Add: 2/(x - 3) + 1/(x² - 9)'
          ]
        }
      }
    ]
  },
  {
    id: 'exponents',
    title: 'Exponents',
    description: 'Laws of exponents and their applications',
    totalDuration: 80,
    lessons: [
      {
        id: 'exponent-laws-revision',
        title: 'Revision: Laws of Exponents',
        description: 'Revise laws of exponents learnt in Grade 9',
        duration: 40,
        content: {
          introduction: 'Exponents represent repeated multiplication. The laws of exponents provide rules for simplifying expressions with exponents. This revision covers the laws learned in Grade 9 and extends them to rational exponents.',
          keyPoints: [
            'Multiplication: xᵐ × xⁿ = xᵐ⁺ⁿ',
            'Division: xᵐ ÷ xⁿ = xᵐ⁻ⁿ',
            'Power of power: (xᵐ)ⁿ = xᵐⁿ',
            'Power of product: (xy)ᵐ = xᵐyᵐ',
            'By definition: x⁻ⁿ = 1/xⁿ, x ≠ 0',
            'By definition: x⁰ = 1, x ≠ 0',
            'These rules hold for m, n ∈ ℚ (rational numbers)'
          ],
          examples: [
            'Example 1: Multiplication\nx³ × x⁴ = x³⁺⁴ = x⁷\n2² × 2³ = 2²⁺³ = 2⁵ = 32\na½ × a¼ = a½⁺¼ = a¾',
            'Example 2: Division\nx⁵ ÷ x² = x⁵⁻² = x³\ny⁷ ÷ y⁴ = y⁷⁻⁴ = y³\n2⁸ ÷ 2⁵ = 2⁸⁻⁵ = 2³ = 8',
            'Example 3: Power of power\n(x²)³ = x²×³ = x⁶\n(3²)⁴ = 3²×⁴ = 3⁸ = 6561\n(a½)² = a½×² = a¹ = a',
            'Example 4: Negative exponents\nx⁻³ = 1/x³\n2⁻² = 1/2² = 1/4\ny⁻¹ = 1/y',
            'Example 5: Zero exponent\n5⁰ = 1\nx⁰ = 1, x ≠ 0\n(2a + 3b)⁰ = 1, if 2a + 3b ≠ 0'
          ],
          practice: [
            'Simplify: x⁴ × x⁷',
            'Simplify: a⁹ ÷ a⁵',
            'Simplify: (y³)⁴',
            'Simplify: 2⁻³',
            'Simplify: (3x)⁰'
          ]
        }
      },
      {
        id: 'exponent-equations',
        title: 'Exponential Equations',
        description: 'Using laws of exponents to simplify expressions and solve equations',
        duration: 40,
        content: {
          introduction: 'Exponential equations involve variables in the exponent. We can solve these equations by applying the laws of exponents and making the bases equal, then equating the exponents.',
          keyPoints: [
            'Make bases equal when possible',
            'If aᵐ = aⁿ, then m = n (for a > 0, a ≠ 1)',
            'Apply exponent laws to simplify expressions',
            'Rules hold for m, n ∈ ℚ (rational numbers)',
            'May need to factorize or use other algebraic techniques',
            'Check solutions in original equation'
          ],
          examples: [
            'Example 1: Simple equations\n2ˣ⁺¹ = 8\n2ˣ⁺¹ = 2³\nx + 1 = 3\nx = 2',
            'Example 2: With different bases\n3ˣ⁻² = 1/9\n3ˣ⁻² = 3⁻²\nx - 2 = -2\nx = 0',
            'Example 3: More complex\n4ˣ⁺¹ = 8ˣ⁻¹\n(2²)ˣ⁺¹ = (2³)ˣ⁻¹\n2²ˣ⁺² = 2³ˣ⁻³\n2x + 2 = 3x - 3\nx = 5',
            'Example 4: With rational exponents\nx²/³ = 4\n(x²/³)³/² = 4³/²\nx = (2²)³/² = 2³ = 8',
            'Example 5: Simplifying expressions\n(2x³y⁻²)² ÷ (4x⁻¹y) = 4x⁶y⁻⁴ ÷ (4x⁻¹y) = x⁷y⁻⁵ = x⁷/y⁵'
          ],
          practice: [
            'Solve: 3ˣ⁺² = 27',
            'Solve: 2²ˣ⁻¹ = 32',
            'Solve: 9ˣ⁺¹ = 27ˣ⁻¹',
            'Simplify: (3a²b⁻¹)³ ÷ (9a⁻²b²)'
          ]
        }
      }
    ]
  },
  {
    id: 'equations-inequalities',
    title: 'Equations and Inequalities',
    description: 'Linear equations, quadratic equations, simultaneous equations, and inequalities',
    totalDuration: 120,
    lessons: [
      {
        id: 'linear-equations',
        title: 'Linear Equations',
        description: 'Revision and solution of linear equations',
        duration: 20,
        content: {
          introduction: 'Linear equations are equations where the highest power of the variable is 1. They can be solved by isolating the variable through inverse operations.',
          keyPoints: [
            'Linear equation: ax + b = 0, where a ≠ 0',
            'Solve by isolating the variable',
            'Use inverse operations: add/subtract, multiply/divide',
            'Apply same operation to both sides',
            'Check solution by substitution',
            'Can have one solution, no solution, or infinite solutions'
          ],
          examples: [
            'Example 1: Basic linear equation\n3x + 5 = 14\n3x = 14 - 5\n3x = 9\nx = 3',
            'Example 2: With fractions\n(2x + 1)/3 = 5\n2x + 1 = 15\n2x = 14\nx = 7',
            'Example 3: With variables on both sides\n4x - 7 = 2x + 5\n4x - 2x = 5 + 7\n2x = 12\nx = 6',
            'Example 4: With brackets\n3(x - 2) + 4 = 16\n3x - 6 + 4 = 16\n3x - 2 = 16\n3x = 18\nx = 6'
          ],
          practice: [
            'Solve: 5x - 3 = 12',
            'Solve: 2(x + 3) = 14',
            'Solve: 3x - 7 = 2x + 1',
            'Solve: (4x - 1)/2 = 7'
          ]
        }
      },
      {
        id: 'quadratic-equations',
        title: 'Quadratic Equations',
        description: 'Solving quadratic equations by factorization',
        duration: 25,
        content: {
          introduction: 'Quadratic equations are equations of the form ax² + bx + c = 0 where a ≠ 0. In Grade 10, we solve quadratic equations by factorization.',
          keyPoints: [
            'Standard form: ax² + bx + c = 0, a ≠ 0',
            'Solve by factorization: find two numbers that multiply to ac and add to b',
            'Set each factor equal to zero',
            'Check solutions in original equation',
            'Quadratic equations can have 0, 1, or 2 real solutions',
            'Write solutions as x = ... or in set notation'
          ],
          examples: [
            'Example 1: Simple quadratic\nx² - 5x + 6 = 0\n(x - 2)(x - 3) = 0\nx - 2 = 0 or x - 3 = 0\nx = 2 or x = 3',
            'Example 2: With a ≠ 1\n2x² + 7x + 3 = 0\nFind two numbers: multiply to 2×3=6, add to 7 → 6 and 1\n2x² + 6x + x + 3 = 0\n2x(x + 3) + 1(x + 3) = 0\n(2x + 1)(x + 3) = 0\nx = -1/2 or x = -3',
            'Example 3: Difference of squares\nx² - 9 = 0\n(x - 3)(x + 3) = 0\nx = 3 or x = -3',
            'Example 4: Perfect square\nx² + 6x + 9 = 0\n(x + 3)² = 0\nx = -3 (repeated root)'
          ],
          practice: [
            'Solve: x² - 7x + 12 = 0',
            'Solve: 3x² + 10x + 3 = 0',
            'Solve: x² - 16 = 0',
            'Solve: 2x² - 8x = 0'
          ]
        }
      },
      {
        id: 'simultaneous-equations',
        title: 'Simultaneous Linear Equations',
        description: 'Solving simultaneous linear equations in two unknowns',
        duration: 25,
        content: {
          introduction: 'Simultaneous linear equations involve two or more equations with two or more variables. We solve systems of two linear equations in two variables using substitution or elimination methods.',
          keyPoints: [
            'Two equations, two variables: ax + by = c, dx + ey = f',
            'Substitution method: solve one equation for one variable, substitute into other',
            'Elimination method: add/subtract equations to eliminate one variable',
            'Solution is the point (x, y) that satisfies both equations',
            'Can have one solution, no solution, or infinite solutions',
            'Check solution in both original equations'
          ],
          examples: [
            'Example 1: Substitution method\nx + y = 7\n2x - y = 8\nFrom first equation: x = 7 - y\nSubstitute into second: 2(7 - y) - y = 8\n14 - 2y - y = 8\n14 - 3y = 8\n-3y = -6\ny = 2\nThen x = 7 - 2 = 5\nSolution: (5, 2)',
            'Example 2: Elimination method\n3x + 2y = 13\n2x - 2y = 4\nAdd equations: 5x = 17\nx = 17/5 = 3.4\nSubstitute: 3(3.4) + 2y = 13\n10.2 + 2y = 13\n2y = 2.8\ny = 1.4\nSolution: (3.4, 1.4)',
            'Example 3: With fractions\nx/2 + y/3 = 4\n2x - y/2 = 7\nMultiply first by 6: 3x + 2y = 24\nMultiply second by 2: 4x - y = 14\nFrom second: y = 4x - 14\nSubstitute: 3x + 2(4x - 14) = 24\n3x + 8x - 28 = 24\n11x = 52\nx = 52/11\ny = 4(52/11) - 14 = 208/11 - 154/11 = 54/11'
          ],
          practice: [
            'Solve: x + y = 10, 2x - y = 5',
            'Solve: 3x + 2y = 12, x - y = 1',
            'Solve: 2x + 3y = 13, 3x - 2y = 0',
            'Solve: x/3 + y/2 = 4, 2x - y/3 = 5'
          ]
        }
      },
      {
        id: 'word-problems',
        title: 'Word Problems',
        description: 'Solving word problems involving linear, quadratic, or simultaneous equations',
        duration: 25,
        content: {
          introduction: 'Word problems require translating real-world situations into mathematical equations. The key is to identify the unknown quantities, define variables, and set up equations based on the given information.',
          keyPoints: [
            'Read the problem carefully and identify what is asked',
            'Define variables for unknown quantities',
            'Set up equations based on given relationships',
            'Solve the equations using appropriate methods',
            'Check if solution makes sense in context',
            'Answer the question in words with appropriate units'
          ],
          examples: [
            'Example 1: Linear word problem\nThe sum of two numbers is 25. One number is 7 more than the other. Find the numbers.\nLet smaller number = x, larger = x + 7\nx + (x + 7) = 25\n2x + 7 = 25\n2x = 18\nx = 9\nNumbers are 9 and 16',
            'Example 2: Quadratic word problem\nA rectangle has area 48 cm². The length is 4 cm more than the width. Find dimensions.\nLet width = x, length = x + 4\nArea: x(x + 4) = 48\nx² + 4x - 48 = 0\n(x + 8)(x - 6) = 0\nx = -8 (invalid) or x = 6\nWidth = 6 cm, length = 10 cm',
            'Example 3: Simultaneous equations\nTwo items cost R120 together. First item costs R20 more than second. Find costs.\nLet first item = x, second = y\nx + y = 120\nx = y + 20\nSubstitute: (y + 20) + y = 120\n2y + 20 = 120\n2y = 100\ny = 50, x = 70\nCosts are R70 and R50'
          ],
          practice: [
            'The sum of three consecutive numbers is 48. Find the numbers',
            'A rectangular field has perimeter 40 m and area 96 m². Find dimensions',
            'Two numbers add to 30 and their product is 216. Find the numbers',
            'A shop sells pens and pencils. 3 pens and 2 pencils cost R28. 2 pens and 3 pencils cost R22. Find cost of each'
          ]
        }
      },
      {
        id: 'literal-equations',
        title: 'Literal Equations',
        description: 'Solving literal equations (changing the subject of a formula)',
        duration: 25,
        content: {
          introduction: 'Literal equations are equations with multiple variables. We solve them by making one variable the subject (isolating it on one side of the equation). This is also called changing the subject of a formula.',
          keyPoints: [
            'Isolate the desired variable using inverse operations',
            'Treat other variables as constants',
            'Apply same operations to both sides',
            'May need to factorize or use other techniques',
            'Common in science and engineering formulas',
            'Check by substituting values'
          ],
          examples: [
            'Example 1: Simple literal equation\nMake x the subject: y = 2x + 3\ny - 3 = 2x\nx = (y - 3)/2',
            'Example 2: With multiple variables\nMake a the subject: v = u + at\nv - u = at\na = (v - u)/t',
            'Example 3: More complex\nMake r the subject: A = πr²\nr² = A/π\nr = √(A/π)',
            'Example 4: With fractions\nMake h the subject: V = (1/3)πr²h\n3V = πr²h\nh = 3V/(πr²)',
            'Example 5: With brackets\nMake x the subject: y = 2(x - 3)\ny = 2x - 6\ny + 6 = 2x\nx = (y + 6)/2'
          ],
          practice: [
            'Make x the subject: y = 3x - 5',
            'Make t the subject: s = ut + (1/2)at²',
            'Make r the subject: C = 2πr',
            'Make h the subject: A = (1/2)bh',
            'Make x the subject: y = 4(x + 2)'
          ]
        }
      },
      {
        id: 'linear-inequalities',
        title: 'Linear Inequalities',
        description: 'Solving linear inequalities and showing solution graphically',
        duration: 25,
        content: {
          introduction: 'Linear inequalities are similar to linear equations but use inequality symbols (<, >, ≤, ≥). The solution is a range of values rather than a single value.',
          keyPoints: [
            'Solve like equations but with inequality symbols',
            'Multiplying/dividing by negative number reverses inequality',
            'Show solution on number line',
            'Interval notation: (a, b), [a, b], (a, b], [a, b)',
            'Solution is often an infinite set',
            'Check with test points'
          ],
          examples: [
            'Example 1: Basic inequality\n2x - 3 < 7\n2x < 10\nx < 5\nNumber line: open circle at 5, shade left\nInterval: (-∞, 5)',
            'Example 2: With negative coefficient\n-3x + 6 ≥ 12\n-3x ≥ 6\nx ≤ -2 (inequality reversed)\nNumber line: closed circle at -2, shade left\nInterval: (-∞, -2]',
            'Example 3: Compound inequality\n-2 < 3x - 1 ≤ 8\nAdd 1: -1 < 3x ≤ 9\nDivide by 3: -1/3 < x ≤ 3\nNumber line: open at -1/3, closed at 3, shade between\nInterval: (-1/3, 3]',
            'Example 4: With absolute value\n|x - 2| < 3\n-3 < x - 2 < 3\n-1 < x < 5\nNumber line: open circles at -1 and 5, shade between\nInterval: (-1, 5)'
          ],
          practice: [
            'Solve and show graphically: 3x + 5 > 11',
            'Solve and show graphically: -2x - 4 ≤ 8',
            'Solve and show graphically: 1 ≤ 2x - 3 < 7',
            'Solve and show graphically: |x + 1| ≤ 3'
          ]
        }
      }
    ]
  },
  {
    id: 'trigonometry',
    title: 'Trigonometry',
    description: 'Trigonometric ratios, definitions, and equations',
    totalDuration: 100,
    lessons: [
      {
        id: 'pythagoras-revision',
        title: 'Revision: Pythagoras Theorem',
        description: 'Revise the Pythagoras Theorem',
        duration: 20,
        content: {
          introduction: 'The Pythagorean theorem states that in a right-angled triangle, the square of the hypotenuse equals the sum of the squares of the other two sides. This fundamental theorem is essential for trigonometry.',
          keyPoints: [
            'Pythagorean theorem: a² + b² = c²',
            'c is the hypotenuse (longest side, opposite right angle)',
            'a and b are the other two sides (legs)',
            'Only applies to right-angled triangles',
            'Can find any side if other two are known',
            'Used to verify if a triangle is right-angled'
          ],
          examples: [
            'Example 1: Find hypotenuse\nTriangle with sides 3 and 4\nc² = 3² + 4² = 9 + 16 = 25\nc = √25 = 5',
            'Example 2: Find one side\nHypotenuse = 13, one side = 5\n13² = 5² + b²\n169 = 25 + b²\nb² = 144\nb = 12',
            'Example 3: Verify right triangle\nSides: 8, 15, 17\nCheck: 8² + 15² = 64 + 225 = 289\n17² = 289\nYes, it is a right triangle',
            'Example 4: Application\nLadder 5m long leans against wall. Base is 3m from wall.\nHow high up the wall?\n5² = 3² + h²\n25 = 9 + h²\nh² = 16\nh = 4m'
          ],
          practice: [
            'Find the hypotenuse of a triangle with sides 6 and 8',
            'A right triangle has hypotenuse 10 and one side 6. Find the other side',
            'Is a triangle with sides 7, 24, 25 a right triangle?',
            'A kite string is 50m long. The kite is 30m above ground. How far is the person from the point directly below the kite?'
          ]
        }
      },
      {
        id: 'trig-ratios-definition',
        title: 'Trigonometric Ratios Definition',
        description: 'Define sinθ, cosθ, and tanθ using right-angled triangles',
        duration: 20,
        content: {
          introduction: 'Trigonometric ratios relate the angles of a right-angled triangle to the lengths of its sides. The three basic ratios are sine (sin), cosine (cos), and tangent (tan).',
          keyPoints: [
            'sinθ = opposite/hypotenuse',
            'cosθ = adjacent/hypotenuse',
            'tanθ = opposite/adjacent',
            'SOHCAHTOA: Sin(Opp/Hyp), Cos(Adj/Hyp), Tan(Opp/Adj)',
            'Hypotenuse is always opposite the right angle',
            'Opposite and adjacent are relative to the angle θ'
          ],
          examples: [
            'Example 1: Basic ratios\nTriangle with angle θ, opposite = 3, adjacent = 4, hypotenuse = 5\nsinθ = 3/5 = 0.6\ncosθ = 4/5 = 0.8\ntanθ = 3/4 = 0.75',
            'Example 2: Find missing side\nGiven θ = 30°, hypotenuse = 10\nsin30° = opposite/10\n0.5 = opposite/10\nopposite = 5',
            'Example 3: Find angle\nGiven opposite = 8, adjacent = 6\ntanθ = 8/6 = 4/3\nθ = tan⁻¹(4/3) ≈ 53.13°',
            'Example 4: Multiple angles\nSame triangle, different angles\nFor angle A: sinA = a/c, cosA = b/c, tanA = a/b\nFor angle B: sinB = b/c, cosB = a/c, tanB = b/a\nNote: sinA = cosB and cosA = sinB (complementary angles)'
          ],
          practice: [
            'In a right triangle with sides 5, 12, 13, find sinθ, cosθ, tanθ for the smaller acute angle',
            'Given cosθ = 0.6 and hypotenuse = 10, find the opposite side',
            'Given tanθ = 3/4 and adjacent = 8, find the hypotenuse',
            'Find angle θ if sinθ = 0.8'
          ]
        }
      },
      {
        id: 'trig-extended-definitions',
        title: 'Extended Definitions of Trig Ratios',
        description: 'Extend definitions of sinθ, cosθ, and tanθ for 0° ≤ θ ≤ 360°',
        duration: 20,
        content: {
          introduction: 'Trigonometric ratios can be extended beyond the first quadrant (0° to 90°) using the Cartesian coordinate system. The signs of the ratios depend on which quadrant the angle is in.',
          keyPoints: [
            'Use Cartesian plane: x-axis, y-axis, origin',
            'For any angle θ, draw radius r from origin',
            'sinθ = y/r, cosθ = x/r, tanθ = y/x',
            'r is always positive (distance from origin)',
            'Signs depend on quadrant:\nQ1 (0-90°): all positive\nQ2 (90-180°): sin positive\nQ3 (180-270°): tan positive\nQ4 (270-360°): cos positive',
            'Reference angles: acute angle to x-axis'
          ],
          examples: [
            'Example 1: Second quadrant\nθ = 120°, point (-1, √3)\nr = √[(-1)² + (√3)²] = √(1 + 3) = 2\nsin120° = √3/2, cos120° = -1/2, tan120° = -√3',
            'Example 2: Third quadrant\nθ = 210°, point (-√3, -1)\nr = √[(-√3)² + (-1)²] = √(3 + 1) = 2\nsin210° = -1/2, cos210° = -√3/2, tan210° = 1/√3',
            'Example 3: Fourth quadrant\nθ = 300°, point (1, -√3)\nr = √[1² + (-√3)²] = √(1 + 3) = 2\nsin300° = -√3/2, cos300° = 1/2, tan300° = -√3',
            'Example 4: Using reference angles\nθ = 150° (Q2), reference angle = 30°\nsin150° = sin30° = 1/2\ncos150° = -cos30° = -√3/2\ntan150° = -tan30° = -1/√3'
          ],
          practice: [
            'Find sin, cos, and tan of 135°',
            'Find sin, cos, and tan of 240°',
            'Find sin, cos, and tan of 315°',
            'If cosθ = -0.6 and θ is in Q2, find sinθ and tanθ'
          ]
        }
      },
      {
        id: 'reciprocal-ratios',
        title: 'Reciprocal Trigonometric Ratios',
        description: 'Define cosecθ, secθ, and cotθ using right-angled triangles',
        duration: 20,
        content: {
          introduction: 'The reciprocal trigonometric ratios are defined as the reciprocals of the basic trigonometric ratios. These are cosecant (cosec), secant (sec), and cotangent (cot).',
          keyPoints: [
            'cosecθ = 1/sinθ = hypotenuse/opposite',
            'secθ = 1/cosθ = hypotenuse/adjacent',
            'cotθ = 1/tanθ = adjacent/opposite',
            'These ratios are examined in Grade 10 only',
            'Same sign rules as basic ratios in each quadrant',
            'Useful in solving certain types of problems'
          ],
          examples: [
            'Example 1: Basic reciprocal ratios\nGiven sinθ = 3/5, cosθ = 4/5, tanθ = 3/4\ncosecθ = 5/3, secθ = 5/4, cotθ = 4/3',
            'Example 2: Using definitions\nTriangle: opposite = 5, adjacent = 12, hypotenuse = 13\ncosecθ = 13/5, secθ = 13/12, cotθ = 12/5',
            'Example 3: Extended angles\nθ = 210°, sin210° = -1/2, cos210° = -√3/2\ncosec210° = 1/(-1/2) = -2\nsec210° = 1/(-√3/2) = -2/√3\ncot210° = 1/tan210° = 1/(1/√3) = √3',
            'Example 4: Relationship between ratios\nShow that: 1 + tan²θ = sec²θ\n1 + (sin²θ/cos²θ) = 1/cos²θ\n(cos²θ/cos²θ) + (sin²θ/cos²θ) = 1/cos²θ\n(cos²θ + sin²θ)/cos²θ = 1/cos²θ\n1/cos²θ = 1/cos²θ ✓'
          ],
          practice: [
            'Given sinθ = 5/13, find cosecθ, secθ, and cotθ',
            'In a triangle with sides 8, 15, 17, find all six trig ratios',
            'Find cosec, sec, and cot of 120°',
            'Show that: cot²θ + 1 = cosec²θ'
          ]
        }
      },
      {
        id: 'trig-numerical-values',
        title: 'Numerical Values of Trig Ratios',
        description: 'Use diagrams to determine numerical values of ratios for angles from 0° to 360°',
        duration: 20,
        content: {
          introduction: 'We can determine the exact values of trigonometric ratios for special angles using geometric diagrams. These exact values are important for solving problems without calculators.',
          keyPoints: [
            'Special angles: 0°, 30°, 45°, 60°, 90°, 180°, 270°, 360°',
            'Use 30-60-90 and 45-45-90 triangles',
            '30-60-90: sides 1, √3, 2',
            '45-45-90: sides 1, 1, √2',
            'Unit circle: radius = 1, coordinates give cos and sin',
            'Remember signs in each quadrant'
          ],
          examples: [
            'Example 1: 30-60-90 triangle\nFor 30°: opposite = 1, adjacent = √3, hypotenuse = 2\nsin30° = 1/2, cos30° = √3/2, tan30° = 1/√3\nFor 60°: opposite = √3, adjacent = 1, hypotenuse = 2\nsin60° = √3/2, cos60° = 1/2, tan60° = √3',
            'Example 2: 45-45-90 triangle\nFor 45°: opposite = 1, adjacent = 1, hypotenuse = √2\nsin45° = 1/√2 = √2/2, cos45° = 1/√2 = √2/2, tan45° = 1',
            'Example 3: Using unit circle\n0°: (1, 0) → sin0° = 0, cos0° = 1, tan0° = 0\n90°: (0, 1) → sin90° = 1, cos90° = 0, tan90° undefined\n180°: (-1, 0) → sin180° = 0, cos180° = -1, tan180° = 0\n270°: (0, -1) → sin270° = -1, cos270° = 0, tan270° undefined',
            'Example 4: Summary table\n| θ | sinθ | cosθ | tanθ |\n| 0° | 0 | 1 | 0 |\n| 30° | 1/2 | √3/2 | 1/√3 |\n| 45° | √2/2 | √2/2 | 1 |\n| 60° | √3/2 | 1/2 | √3 |\n| 90° | 1 | 0 | undefined |'
          ],
          practice: [
            'Find exact values of sin, cos, and tan for 120°',
            'Find exact values of sin, cos, and tan for 225°',
            'Find exact values of sin, cos, and tan for 300°',
            'Create a table of exact values for 0°, 30°, 45°, 60°, 90°'
          ]
        }
      },
      {
        id: 'special-angles',
        title: 'Special Angle Values',
        description: 'Derive values of trig ratios for special cases without calculator',
        duration: 20,
        content: {
          introduction: 'The special angles in trigonometry are 0°, 30°, 45°, 60°, and 90°. We can derive the exact values of trigonometric ratios for these angles using geometric properties without calculators.',
          keyPoints: [
            'Use equilateral triangle for 30° and 60°',
            'Use isosceles right triangle for 45°',
            'Remember the patterns and relationships',
            'Values repeat with periodicity',
            'Use reference angles for other quadrants',
            'These values are fundamental for solving trig equations'
          ],
          examples: [
            'Example 1: 30° and 60° from equilateral triangle\nEquilateral triangle with side 2, height = √3\nSplit into two 30-60-90 triangles\nFor 30°: sin30° = 1/2, cos30° = √3/2, tan30° = 1/√3\nFor 60°: sin60° = √3/2, cos60° = 1/2, tan60° = √3',
            'Example 2: 45° from square\nSquare with side 1, diagonal = √2\nSplit into two 45-45-90 triangles\nFor 45°: sin45° = 1/√2 = √2/2, cos45° = 1/√2 = √2/2, tan45° = 1',
            'Example 3: Using symmetry\nsin(180° - θ) = sinθ\ncos(180° - θ) = -cosθ\ntan(180° - θ) = -tanθ\nTherefore: sin150° = sin30° = 1/2\ncos150° = -cos30° = -√3/2\ntan150° = -tan30° = -1/√3',
            'Example 4: Complete special angle table\n| θ | 0° | 30° | 45° | 60° | 90° |\n| sinθ | 0 | 1/2 | √2/2 | √3/2 | 1 |\n| cosθ | 1 | √3/2 | √2/2 | 1/2 | 0 |\n| tanθ | 0 | 1/√3 | 1 | √3 | undefined |'
          ],
          practice: [
            'Derive sin, cos, and tan values for 120° without calculator',
            'Derive sin, cos, and tan values for 210° without calculator',
            'Derive sin, cos, and tan values for 315° without calculator',
            'Explain why tan90° is undefined'
          ]
        }
      },
      {
        id: 'trig-equations',
        title: 'Simple Trigonometric Equations',
        description: 'Solve simple trigonometric equations for angles between 0° and 90°',
        duration: 20,
        content: {
          introduction: 'Trigonometric equations involve trigonometric functions of unknown angles. We solve these equations by finding angles that satisfy the equation within the given range.',
          keyPoints: [
            'Solve for θ in 0° ≤ θ ≤ 90°',
            'Use inverse trig functions: sin⁻¹, cos⁻¹, tan⁻¹',
            'Isolate the trig function first',
            'Check if solution is in range',
            'May need to use special angle values',
            'Verify solution by substitution'
          ],
          examples: [
            'Example 1: Basic sin equation\nsinθ = 0.5\nθ = sin⁻¹(0.5) = 30°',
            'Example 2: Basic cos equation\ncosθ = √3/2\nθ = cos⁻¹(√3/2) = 30°',
            'Example 3: Basic tan equation\ntanθ = 1\nθ = tan⁻¹(1) = 45°',
            'Example 4: With coefficients\n2sinθ = 1\nsinθ = 0.5\nθ = 30°',
            'Example 5: Multiple steps\n3cosθ - 1 = 0\n3cosθ = 1\ncosθ = 1/3\nθ = cos⁻¹(1/3) ≈ 70.53°',
            'Example 6: Using special values\nsinθ = √2/2\nθ = sin⁻¹(√2/2) = 45°'
          ],
          practice: [
            'Solve: sinθ = √3/2',
            'Solve: cosθ = 0.5',
            'Solve: tanθ = √3',
            'Solve: 2sinθ = √3',
            'Solve: 3cosθ - 2 = 0'
          ]
        }
      }
    ]
  }
]