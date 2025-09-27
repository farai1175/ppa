export interface Grade12MathematicsLesson {
  id: string;
  title: string;
  description: string;
  duration: number; // in minutes
  content: {
    introduction: string;
    keyPoints: string[];
    examples: string[];
    practice: string[];
  };
  exercises?: string[];
}

export interface Grade12MathematicsTopic {
  id: string;
  title: string;
  description: string;
  duration: number; // in minutes
  lessons: Grade12MathematicsLesson[];
}

export interface Grade12MathematicsData {
  grade: string;
  subject: string;
  description: string;
  totalDuration: number; // in minutes
  topics: Grade12MathematicsTopic[];
}

export const grade12MathematicsData: Grade12MathematicsData = {
  grade: "Grade 12",
  subject: "Mathematics",
  description: "Comprehensive Grade 12 Mathematics course following CAPS curriculum, covering number patterns, functions, trigonometry, geometry, calculus, statistics, and probability.",
  totalDuration: 1440, // 24 hours
  topics: [
    {
      id: "number-patterns-sequences",
      title: "Number Patterns, Sequences & Series",
      description: "Master arithmetic and geometric sequences, sigma notation, and sum formulae.",
      duration: 180,
      lessons: [
        {
          id: "quadratic-patterns-revision",
          title: "Quadratic Patterns Revision",
          description: "Revise quadratic number patterns and their properties.",
          duration: 30,
          content: {
            introduction: "Review quadratic number patterns and their characteristics. Understand how to identify, extend, and find general terms for quadratic sequences.",
            keyPoints: [
              "Identifying quadratic patterns through constant second differences",
              "Finding the general term of quadratic sequences",
              "Applications of quadratic patterns in real-world contexts",
              "Solving problems involving quadratic sequences",
              "Relationship between quadratic functions and sequences"
            ],
            examples: [
              "Find the general term: 3, 8, 15, 24, 35...\nSecond differences: 2, 2, 2, 2 (constant)\nGeneral term: Tn = n² + 2n + 2",
              "Find term 10: 2, 5, 10, 17, 26...\nPattern: Tn = n² + 1\nT10 = 10² + 1 = 101"
            ],
            practice: [
              "Find the general term of the sequence: 1, 4, 9, 16, 25...",
              "Determine the 50th term of: 5, 10, 17, 26, 37...",
              "Find the next three terms: 4, 7, 12, 19, 28...",
              "A quadratic sequence has T2 = 8, T4 = 20, T6 = 36. Find the general term."
            ]
          },
          exercises: [
            "Find the general term: 1, 4, 9, 16, 25...",
            "Determine the 50th term of: 5, 10, 17, 26, 37...",
            "Find the next three terms: 4, 7, 12, 19, 28...",
            "A quadratic sequence has T2 = 8, T4 = 20, T6 = 36. Find the general term."
          ]
        },
        {
          id: "arithmetic-sequences",
          title: "Arithmetic Sequences and Series",
          description: "Study arithmetic sequences, sigma notation, and arithmetic sum formulae.",
          duration: 50,
          content: {
            introduction: "Master arithmetic sequences and series, including sigma notation and the derivation and application of sum formulae.",
            keyPoints: [
              "Definition and properties of arithmetic sequences",
              "Common difference and general term: Tn = a + (n-1)d",
              "Sigma notation and its applications",
              "Sum of arithmetic series: Sn = n/2[2a + (n-1)d]",
              "Alternative sum formula: Sn = n/2(a + l)",
              "Applications of arithmetic sequences in real life"
            ],
            examples: [
              "Find the sum of first 20 terms: 3, 7, 11, 15...\na = 3, d = 4, n = 20\nS20 = 20/2[2(3) + (20-1)4] = 10[6 + 76] = 820",
              "Sigma notation: ∑(k=1 to 10) (2k + 1) = 3 + 5 + 7 + ... + 21 = 120"
            ],
            practice: [
              "Find the sum of the first 25 terms of: 5, 9, 13, 17...",
              "Evaluate: ∑(k=1 to 15) (3k - 2)",
              "An arithmetic series has a = 7, d = 3, n = 30. Find Sn",
              "Find n if S_n = 240 for the series: 8, 12, 16, 20..."
            ]
          },
          exercises: [
            "Find the sum of the first 25 terms of: 5, 9, 13, 17...",
            "Evaluate: ∑(k=1 to 15) (3k - 2)",
            "An arithmetic series has a = 7, d = 3, n = 30. Find Sn",
            "Find n if S_n = 240 for the series: 8, 12, 16, 20..."
          ]
        },
        {
          id: "geometric-sequences",
          title: "Geometric Sequences and Series",
          description: "Study geometric sequences and derive and apply geometric sum formulae.",
          duration: 50,
          content: {
            introduction: "Explore geometric sequences and series, including the derivation and application of sum formulae for finite and infinite geometric series.",
            keyPoints: [
              "Definition and properties of geometric sequences",
              "Common ratio and general term: Tn = ar^(n-1)",
              "Sum of finite geometric series: Sn = a(r^n - 1)/(r - 1), r ≠ 1",
              "Sum of infinite geometric series: S∞ = a/(1 - r), -1 < r < 1, r ≠ 1",
              "Convergence of infinite geometric series",
              "Applications of geometric sequences in finance and science"
            ],
            examples: [
              "Find sum of first 8 terms: 3, 6, 12, 24...\na = 3, r = 2, n = 8\nS8 = 3(2^8 - 1)/(2 - 1) = 3(255) = 765",
              "Infinite series: 8 + 4 + 2 + 1 + ...\na = 8, r = 1/2\nS∞ = 8/(1 - 1/2) = 16"
            ],
            practice: [
              "Find the sum of the first 10 terms of: 2, 6, 18, 54...",
              "Find the sum to infinity: 9 + 3 + 1 + 1/3 + ...",
              "A geometric series has a = 5, r = 2, n = 12. Find Sn",
              "Find the sum of the first 6 terms of: 100, 50, 25, 12.5..."
            ]
          },
          exercises: [
            "Find the sum of the first 10 terms of: 2, 6, 18, 54...",
            "Find the sum to infinity: 9 + 3 + 1 + 1/3 + ...",
            "A geometric series has a = 5, r = 2, n = 12. Find Sn",
            "Find the sum of the first 6 terms of: 100, 50, 25, 12.5..."
          ]
        },
        {
          id: "mixed-sequences-applications",
          title: "Mixed Sequences and Applications",
          description: "Solve complex problems involving arithmetic and geometric sequences.",
          duration: 50,
          content: {
            introduction: "Apply knowledge of arithmetic and geometric sequences to solve complex real-world problems and mixed sequence scenarios.",
            keyPoints: [
              "Distinguishing between arithmetic and geometric sequences",
              "Solving problems with mixed sequence types",
              "Applications in finance, population growth, and physics",
              "Recursive sequences and their solutions",
              "Advanced problem-solving techniques",
              "Real-world modeling with sequences"
            ],
            examples: [
              "A ball bounces to 80% of previous height. If dropped from 10m, total distance = 10 + 2(10×0.8) + 2(10×0.8²) + ... = 10 + 16 + 12.8 + ... = 10 + 16/(1 - 0.8) = 10 + 80 = 90m",
              "Salary increases: R15000 + R1500 + R1650 + ... (arithmetic then geometric)"
            ],
            practice: [
              "A car depreciates by 15% annually. Value after 5 years if original price R200000",
              "Population doubles every 25 years. Current population 50000. Find in 100 years",
              "A loan of R50000 at 8% compound interest. Amount after 10 years",
              "A sequence is defined by Tn+1 = 2Tn + 3, T1 = 1. Find T10"
            ]
          },
          exercises: [
            "A car depreciates by 15% annually. Value after 5 years if original price R200000",
            "Population doubles every 25 years. Current population 50000. Find in 100 years",
            "A loan of R50000 at 8% compound interest. Amount after 10 years",
            "A sequence is defined by Tn+1 = 2Tn + 3, T1 = 1. Find T10"
          ]
        }
      ]
    },
    {
      id: "functions-revision-formal",
      title: "Functions: Revision & Formal Definition",
      description: "Revise all functions studied in earlier grades and understand the formal definition of a function.",
      duration: 240,
      lessons: [
        {
          id: "functions-sketching-revision",
          title: "Functions Sketching Revision",
          description: "Revise sketching of all functions studied in earlier grades.",
          duration: 60,
          content: {
            introduction: "Comprehensive revision of sketching all function types including linear, quadratic, cubic, hyperbolic, exponential, and trigonometric functions.",
            keyPoints: [
              "Linear functions: y = mx + c and their characteristics",
              "Quadratic functions: y = ax² + bx + c and parabola properties",
              "Cubic functions: y = ax³ + bx² + cx + d and their behavior",
              "Hyperbolic functions: y = a/x + q and asymptotes",
              "Exponential functions: y = a·b^x + q and growth/decay",
              "Trigonometric functions: sin, cos, tan and their periodicity"
            ],
            examples: [
              "Sketch y = x² - 4x + 3\nVertex at (2, -1), x-intercepts at x = 1, x = 3, y-intercept at y = 3",
              "Sketch y = 2/x + 1\nVertical asymptote x = 0, horizontal asymptote y = 1"
            ],
            practice: [
              "Sketch y = -2x² + 8x - 6 showing all key features",
              "Sketch y = 1/(x-2) + 3 showing asymptotes and intercepts",
              "Sketch y = 3·2^x - 6 showing intercepts and asymptote",
              "Sketch y = sin(x + 30°) for x ∈ [0°, 360°]"
            ]
          },
          exercises: [
            "Sketch y = -2x² + 8x - 6 showing all key features",
            "Sketch y = 1/(x-2) + 3 showing asymptotes and intercepts",
            "Sketch y = 3·2^x - 6 showing intercepts and asymptote",
            "Sketch y = sin(x + 30°) for x ∈ [0°, 360°]"
          ]
        },
        {
          id: "functions-equations-determination",
          title: "Determining Equations of Functions",
          description: "Learn to determine the equations of ALL functions from given information.",
          duration: 60,
          content: {
            introduction: "Master the techniques for determining the equations of various functions using given points, graphs, or other characteristics.",
            keyPoints: [
              "Finding linear equations from points or slope",
              "Determining quadratic equations from vertex, intercepts, or points",
              "Finding cubic equations from given points and behavior",
              "Determining hyperbolic equations from asymptotes and points",
              "Finding exponential equations from given data points",
              "Determining trigonometric equations from graphs or characteristics"
            ],
            examples: [
              "Find quadratic equation with vertex (2, -3) and passing through (4, 5)\nUsing vertex form: y = a(x-2)² - 3\n5 = a(4-2)² - 3 → 5 = 4a - 3 → a = 2\nEquation: y = 2(x-2)² - 3 = 2x² - 8x + 5",
              "Find exponential equation through (0, 2) and (2, 8)\ny = a·b^x\n2 = a·b^0 → a = 2\n8 = 2·b^2 → b² = 4 → b = 2\nEquation: y = 2·2^x"
            ],
            practice: [
              "Find the equation of the line through (3, 5) and (7, 13)",
              "Find the quadratic equation with x-intercepts at x = -1 and x = 3, and y-intercept at y = 6",
              "Find the cubic equation with roots at x = -2, x = 1, x = 3 and passing through (0, 6)",
              "Find the exponential equation passing through (1, 4) and (3, 36)"
            ]
          },
          exercises: [
            "Find the equation of the line through (3, 5) and (7, 13)",
            "Find the quadratic equation with x-intercepts at x = -1 and x = 3, and y-intercept at y = 6",
            "Find the cubic equation with roots at x = -2, x = 1, x = 3 and passing through (0, 6)",
            "Find the exponential equation passing through (1, 4) and (3, 36)"
          ]
        },
        {
          id: "functions-interpretation",
          title: "Interpretation of Sketched Functions",
          description: "Learn to interpret sketched functions including lengths, intersections, gradient, domain, range, and more.",
          duration: 60,
          content: {
            introduction: "Develop skills in interpreting various aspects of sketched functions, including geometric properties, rates of change, and functional behavior.",
            keyPoints: [
              "Determining horizontal and vertical lengths from graphs",
              "Finding points of intersection between functions",
              "Calculating average gradient between points",
              "Identifying domain and range from graphs",
              "Locating asymptotes and axes of symmetry",
              "Finding turning points, minima, and maxima",
              "Understanding graphical transformations",
              "Solving inequalities using graphical methods",
              "Determining nature of roots graphically"
            ],
            examples: [
              "For y = x² - 4x + 3 and y = 2x - 1:\nIntersection: x² - 4x + 3 = 2x - 1 → x² - 6x + 4 = 0\nx = 3 ± √5, Points: (3+√5, 5+2√5) and (3-√5, 5-2√5)",
              "Average gradient of y = x² between x = 1 and x = 3:\n(3² - 1²)/(3 - 1) = (9 - 1)/2 = 4"
            ],
            practice: [
              "Find the points of intersection of y = x² - 2x - 3 and y = x + 1",
              "Calculate the average gradient of y = 2^x between x = 0 and x = 2",
              "Determine the domain and range of y = √(x - 2)",
              "Find the turning point and axis of symmetry of y = -3x² + 12x - 7"
            ]
          },
          exercises: [
            "Find the points of intersection of y = x² - 2x - 3 and y = x + 1",
            "Calculate the average gradient of y = 2^x between x = 0 and x = 2",
            "Determine the domain and range of y = √(x - 2)",
            "Find the turning point and axis of symmetry of y = -3x² + 12x - 7"
          ]
        },
        {
          id: "function-formal-definition",
          title: "Formal Definition of a Function",
          description: "Understand the formal definition of a function and function notation.",
          duration: 60,
          content: {
            introduction: "Learn the formal mathematical definition of a function, including concepts of domain, range, mapping, and function notation.",
            keyPoints: [
              "Formal definition: A function assigns each input exactly one output",
              "Domain: Set of all possible input values",
              "Range: Set of all possible output values",
              "Function notation: f(x) and its interpretation",
              "Vertical line test for functions",
              "One-to-one and many-to-one functions",
              "Mapping diagrams and function representation",
              "Restricting domains to create functions"
            ],
            examples: [
              "Determine if y² = x is a function:\nFor x = 4, y = ±2 → Two outputs for one input\nNot a function",
              "Find domain and range of f(x) = √(x - 3):\nDomain: x ≥ 3, Range: y ≥ 0"
            ],
            practice: [
              "Determine which relations are functions: y = x², x = y², y = |x|, x² + y² = 25",
              "Find the domain and range of f(x) = 1/(x + 2)",
              "Given f(x) = 2x - 3, find f(4), f(a), f(x + h)",
              "Use the vertical line test to determine if a given graph represents a function"
            ]
          },
          exercises: [
            "Determine which relations are functions: y = x², x = y², y = |x|, x² + y² = 25",
            "Find the domain and range of f(x) = 1/(x + 2)",
            "Given f(x) = 2x - 3, find f(4), f(a), f(x + h)",
            "Use the vertical line test to determine if a given graph represents a function"
          ]
        }
      ]
    },
    {
      id: "functions-inverse-exponential-logarithmic",
      title: "Functions: Inverse, Exponential & Logarithmic",
      description: "Study inverse functions, exponential and logarithmic functions, and their properties.",
      duration: 240,
      lessons: [
        {
          id: "inverse-functions-concept",
          title: "Inverse Functions Concept",
          description: "Understand the concept of inverse functions and domain restrictions.",
          duration: 60,
          content: {
            introduction: "Explore the concept of inverse functions, including when domain restrictions are needed to ensure the inverse is also a function.",
            keyPoints: [
              "Concept of inverse functions: f and f⁻¹",
              "Horizontal line test for one-to-one functions",
              "Domain restrictions to create one-to-one functions",
              "Finding inverse functions algebraically",
              "Relationship between domain and range of f and f⁻¹",
              "Graphical relationship between functions and their inverses",
              "Composition of functions: f(f⁻¹(x)) = x and f⁻¹(f(x)) = x"
            ],
            examples: [
              "Find inverse of f(x) = 2x + 3:\ny = 2x + 3 → x = 2y + 3 → x - 3 = 2y → y = (x - 3)/2\nf⁻¹(x) = (x - 3)/2",
              "f(x) = x² needs domain restriction:\nFor x ≥ 0, f⁻¹(x) = √x\nFor x ≤ 0, f⁻¹(x) = -√x"
            ],
            practice: [
              "Find the inverse of f(x) = 3x - 5",
              "Find the inverse of f(x) = x³ + 2",
              "Determine the domain restriction needed for f(x) = x² - 4x + 3 to have an inverse",
              "Find f⁻¹(x) for f(x) = √(x + 1) and state domain and range"
            ]
          },
          exercises: [
            "Find the inverse of f(x) = 3x - 5",
            "Find the inverse of f(x) = x³ + 2",
            "Determine the domain restriction needed for f(x) = x² - 4x + 3 to have an inverse",
            "Find f⁻¹(x) for f(x) = √(x + 1) and state domain and range"
          ]
        },
        {
          id: "inverse-linear-quadratic",
          title: "Inverses of Linear and Quadratic Functions",
          description: "Determine and sketch graphs of inverses of linear and quadratic functions.",
          duration: 60,
          content: {
            introduction: "Master the process of finding and sketching inverse functions for linear and quadratic functions, analyzing their key characteristics.",
            keyPoints: [
              "Finding inverses of linear functions: y = ax + q",
              "Finding inverses of quadratic functions: y = ax²",
              "Domain and range of inverse functions",
              "Intercepts with axes for inverse functions",
              "Turning points, minima, and maxima of inverse functions",
              "Asymptotes (horizontal and vertical) in inverse functions",
              "Shape and symmetry of inverse functions",
              "Average gradient (rate of change) of inverse functions",
              "Intervals where inverse functions increase/decrease"
            ],
            examples: [
              "Inverse of y = 2x + 1:\ny = 2x + 1 → x = 2y + 1 → y = (x - 1)/2\nDomain: all real x, Range: all real y\nNo asymptotes, always increasing",
              "Inverse of y = x² (x ≥ 0):\ny = x² → x = y² → y = √x\nDomain: x ≥ 0, Range: y ≥ 0\nVertical asymptote: none, Horizontal asymptote: none"
            ],
            practice: [
              "Find and sketch the inverse of y = -3x + 6",
              "Find and sketch the inverse of y = x² - 4 (x ≥ 0)",
              "For f(x) = 2x² - 8x + 6 (x ≥ 2), find f⁻¹(x) and sketch both",
              "Determine the average gradient of f⁻¹(x) = √(x - 1) between x = 2 and x = 5"
            ]
          },
          exercises: [
            "Find and sketch the inverse of y = -3x + 6",
            "Find and sketch the inverse of y = x² - 4 (x ≥ 0)",
            "For f(x) = 2x² - 8x + 6 (x ≥ 2), find f⁻¹(x) and sketch both",
            "Determine the average gradient of f⁻¹(x) = √(x - 1) between x = 2 and x = 5"
          ]
        },
        {
          id: "exponential-functions-revision",
          title: "Exponential Functions Revision",
          description: "Revise exponential functions, laws, and graphs.",
          duration: 60,
          content: {
            introduction: "Comprehensive revision of exponential functions including their laws, graphs, and applications in various contexts.",
            keyPoints: [
              "Exponential function: y = b^x where b > 0 and b ≠ 1",
              "Exponential laws and their applications",
              "Graphs of exponential functions for b > 1 and 0 < b < 1",
              "Domain and range of exponential functions",
              "Asymptotes and intercepts of exponential graphs",
              "Transformations of exponential functions",
              "Applications in growth and decay problems",
              "Exponential equations and their solutions"
            ],
            examples: [
              "Graph y = 2^x and y = (1/2)^x:\nBoth pass through (0, 1)\ny = 2^x: increasing, asymptote y = 0\ny = (1/2)^x: decreasing, asymptote y = 0",
              "Apply laws: 2^3 × 2^4 = 2^7 = 128\n(3^2)^4 = 3^8 = 6561\n8^2/8^5 = 8^(-3) = 1/512"
            ],
            practice: [
              "Sketch y = 3^x and y = (1/3)^x on the same axes",
              "Simplify: 2^5 × 2^3 ÷ 2^4",
              "Solve: 3^x = 81",
              "A population grows exponentially: P(t) = 1000 × 1.05^t. Find population after 10 years"
            ]
          },
          exercises: [
            "Sketch y = 3^x and y = (1/3)^x on the same axes",
            "Simplify: 2^5 × 2^3 ÷ 2^4",
            "Solve: 3^x = 81",
            "A population grows exponentially: P(t) = 1000 × 1.05^t. Find population after 10 years"
          ]
        },
        {
          id: "logarithmic-functions",
          title: "Logarithmic Functions",
          description: "Understand logarithmic functions, their definition, graphs, and properties.",
          duration: 60,
          content: {
            introduction: "Master logarithmic functions including their definition, relationship to exponential functions, graphs, and key properties.",
            keyPoints: [
              "Definition of logarithm: y = log_b(x) ⇔ x = b^y where b > 0 and b ≠ 1",
              "Relationship between exponential and logarithmic functions",
              "Graphs of y = log_b(x) for 0 < b < 1 and b > 1",
              "Domain and range of logarithmic functions",
              "Asymptotes and intercepts of logarithmic graphs",
              "Laws of logarithms and their applications",
              "Natural logarithms and common logarithms",
              "Solving logarithmic equations"
            ],
            examples: [
              "Convert between forms: log₂(8) = 3 ⇔ 2³ = 8\nlog₁₀(100) = 2 ⇔ 10² = 100",
              "Graph y = log₂(x):\nDomain: x > 0, Range: all real y\nVertical asymptote: x = 0\nPasses through (1, 0) and (2, 1)",
              "Apply laws: log(2) + log(3) = log(6)\n2log(5) = log(25)\nlog(100) - log(10) = log(10) = 1"
            ],
            practice: [
              "Convert to exponential form: log₃(27) = 3",
              "Sketch y = log₁₀(x) showing key features",
              "Simplify: log(40) - log(4) + log(100)",
              "Solve: log₂(x) + log₂(x - 2) = 3"
            ]
          },
          exercises: [
            "Convert to exponential form: log₃(27) = 3",
            "Sketch y = log₁₀(x) showing key features",
            "Simplify: log(40) - log(4) + log(100)",
            "Solve: log₂(x) + log₂(x - 2) = 3"
          ]
        }
      ]
    },
    {
      id: "trigonometry-compound-double",
      title: "Trigonometry: Compound & Double Angles",
      description: "Master compound angle identities, double angle formulas, and their applications.",
      duration: 200,
      lessons: [
        {
          id: "trigonometry-revision",
          title: "Trigonometry Revision",
          description: "Revise trigonometric concepts from earlier grades including reduction formulae, special angles, identities, and general solutions.",
          duration: 50,
          content: {
            introduction: "Comprehensive revision of fundamental trigonometric concepts including reduction formulae, special angles, basic identities, and general solutions to trigonometric equations.",
            keyPoints: [
              "Reduction formulae for angles: 90° ± θ, 180° ± θ, 360° ± θ, -θ",
              "Special angle values: 0°, 30°, 45°, 60°, 90°",
              "Basic trigonometric identities: sin²θ + cos²θ = 1, tanθ = sinθ/cosθ",
              "General solutions for trigonometric equations",
              "Trigonometric ratios in all four quadrants",
              "Periodicity of trigonometric functions",
              "Co-function identities"
            ],
            examples: [
              "Reduction formulae: sin(180° - θ) = sinθ, cos(180° - θ) = -cosθ\nsin(90° + θ) = cosθ, cos(90° + θ) = -sinθ",
              "Special angles: sin 30° = 1/2, cos 45° = √2/2, tan 60° = √3",
              "General solution: sin θ = 0.5 → θ = 30° + k·360° or θ = 150° + k·360°, k ∈ ℤ"
            ],
            practice: [
              "Simplify: sin(180° + θ) + cos(270° - θ)",
              "Find the exact value: cos 75°",
              "Solve: 2cos θ - 1 = 0 for θ ∈ [0°, 360°]",
              "Prove: sin²θ + cos²θ = 1"
            ]
          },
          exercises: [
            "Simplify: sin(180° + θ) + cos(270° - θ)",
            "Find the exact value: cos 75°",
            "Solve: 2cos θ - 1 = 0 for θ ∈ [0°, 360°]",
            "Prove: sin²θ + cos²θ = 1"
          ]
        },
        {
          id: "compound-angle-identities",
          title: "Compound Angle Identities",
          description: "Derive and apply compound angle identities for sine and cosine.",
          duration: 50,
          content: {
            introduction: "Master the derivation and application of compound angle identities for sine and cosine functions.",
            keyPoints: [
              "Compound angle formula for sine: sin(α ± β) = sinα cosβ ± cosα sinβ",
              "Compound angle formula for cosine: cos(α ± β) = cosα cosβ ∓ sinα sinβ",
              "Derivation of compound angle identities using geometric methods",
              "Applications in simplifying trigonometric expressions",
              "Solving trigonometric equations using compound angles",
              "Finding exact values of trigonometric functions for compound angles"
            ],
            examples: [
              "Find sin 75° using compound angles:\nsin 75° = sin(45° + 30°) = sin45°cos30° + cos45°sin30°\n= (√2/2)(√3/2) + (√2/2)(1/2) = √2/2(√3/2 + 1/2) = √2(√3 + 1)/4",
              "Simplify: sin(2x)cos(x) - cos(2x)sin(x) = sin(2x - x) = sin(x)"
            ],
            practice: [
              "Find the exact value of cos 15° using compound angles",
              "Simplify: cos(A + B) + cos(A - B)",
              "Prove: sin(α + β)sin(α - β) = sin²α - sin²β",
              "Solve: sin(2x)cos(x) - cos(2x)sin(x) = 1/2 for x ∈ [0°, 180°]"
            ]
          },
          exercises: [
            "Find the exact value of cos 15° using compound angles",
            "Simplify: cos(A + B) + cos(A - B)",
            "Prove: sin(α + β)sin(α - β) = sin²α - sin²β",
            "Solve: sin(2x)cos(x) - cos(2x)sin(x) = 1/2 for x ∈ [0°, 180°]"
          ]
        },
        {
          id: "double-angle-formulas",
          title: "Double Angle Formulas",
          description: "Derive and apply double angle formulas for sine, cosine, and tangent.",
          duration: 50,
          content: {
            introduction: "Explore double angle formulas and their applications in simplifying expressions and solving trigonometric equations.",
            keyPoints: [
              "Double angle formula for sine: sin 2α = 2 sin α cos α",
              "Double angle formulas for cosine: cos 2α = cos²α - sin²α = 2cos²α - 1 = 1 - 2sin²α",
              "Double angle formula for tangent: tan 2α = 2tan α / (1 - tan²α)",
              "Derivation of double angle formulas from compound angle identities",
              "Applications in simplifying complex trigonometric expressions",
              "Solving equations involving double angles",
              "Power-reducing identities derived from double angle formulas"
            ],
            examples: [
              "Find exact value of sin 120°:\nsin 120° = sin(2 × 60°) = 2 sin 60° cos 60° = 2(√3/2)(1/2) = √3/2",
              "Simplify: cos²θ - sin²θ = cos 2θ",
              "Express sin²θ in terms of cos 2θ: sin²θ = (1 - cos 2θ)/2"
            ],
            practice: [
              "Find the exact value of cos 120° using double angle formulas",
              "Simplify: 2sin²θ - 1",
              "Prove: (sin 2θ)/(1 + cos 2θ) = tan θ",
              "Solve: cos 2θ = sin θ for θ ∈ [0°, 360°]"
            ]
          },
          exercises: [
            "Find the exact value of cos 120° using double angle formulas",
            "Simplify: 2sin²θ - 1",
            "Prove: (sin 2θ)/(1 + cos 2θ) = tan θ",
            "Solve: cos 2θ = sin θ for θ ∈ [0°, 360°]"
          ]
        },
        {
          id: "trigonometry-applications-2d-3d",
          title: "Trigonometry in Two and Three Dimensions",
          description: "Revise sine, cosine, and area rules and solve problems in two and three dimensions.",
          duration: 50,
          content: {
            introduction: "Apply trigonometric rules to solve problems in both two-dimensional and three-dimensional contexts.",
            keyPoints: [
              "Revision of sine rule: a/sin A = b/sin B = c/sin C",
              "Revision of cosine rule: c² = a² + b² - 2ab cos C",
              "Revision of area rule: Area = ½ab sin C",
              "Applications in two-dimensional problems",
              "Solving three-dimensional problems using trigonometry",
              "Height and distance problems in 3D",
              "Angle between lines and planes in 3D space",
              "Real-world applications of 3D trigonometry"
            ],
            examples: [
              "2D Problem: In ΔABC, a = 8, b = 10, ∠C = 60°. Find c.\nc² = 8² + 10² - 2(8)(10)cos 60° = 64 + 100 - 80(0.5) = 124\nc = √124 = 2√31",
              "3D Problem: Find height of tower. Angle of elevation 30° at 50m distance.\nh = 50 tan 30° = 50/√3 = 50√3/3 ≈ 28.87m"
            ],
            practice: [
              "In ΔABC, a = 7, b = 9, ∠C = 45°. Find side c",
              "Find the area of ΔABC with sides 5, 6, 7",
              "A ladder 10m long leans against wall at 70° to ground. How high up wall?",
              "From point A, angle of elevation to top of tower is 40°. From point B 30m closer, angle is 55°. Find tower height"
            ]
          },
          exercises: [
            "In ΔABC, a = 7, b = 9, ∠C = 45°. Find side c",
            "Find the area of ΔABC with sides 5, 6, 7",
            "A ladder 10m long leans against wall at 70° to ground. How high up wall?",
            "From point A, angle of elevation to top of tower is 40°. From point B 30m closer, angle is 55°. Find tower height"
          ]
        }
      ]
    },
    {
      id: "trigonometry-functions-applications",
      title: "Trigonometry: Functions & Applications",
      description: "Study trigonometric functions and solve problems using compound and double angles.",
      duration: 100,
      lessons: [
        {
          id: "trigonometric-functions-revision",
          title: "Trigonometric Functions Revision",
          description: "Revise trigonometric functions studied in earlier grades.",
          duration: 50,
          content: {
            introduction: "Comprehensive revision of trigonometric functions including their graphs, properties, transformations, and applications.",
            keyPoints: [
              "Graphs of y = sin θ, y = cos θ, and y = tan θ",
              "Amplitude, period, and phase shift of trigonometric functions",
              "Domain and range of trigonometric functions",
              "Transformations: y = a sin(bθ + c) + d",
              "Inverse trigonometric functions and their properties",
              "Applications in modeling periodic phenomena",
              "Solving trigonometric equations graphically",
              "Harmonic motion and wave applications"
            ],
            examples: [
              "Graph y = 2 sin(2x + 30°) + 1:\nAmplitude = 2, Period = 180°, Phase shift = -15°, Vertical shift = 1",
              "Find domain and range: y = 3 cos θ + 2\nDomain: all real θ, Range: [-1, 5]"
            ],
            practice: [
              "Sketch y = 3 sin(θ - 45°) for θ ∈ [0°, 360°]",
              "Find the amplitude, period, and phase shift of y = -2 cos(3θ + 60°)",
              "Solve 2 sin θ = 1 graphically for θ ∈ [0°, 360°]",
              "A Ferris wheel with radius 20m completes one rotation every 2 minutes. Height as function of time"
            ]
          },
          exercises: [
            "Sketch y = 3 sin(θ - 45°) for θ ∈ [0°, 360°]",
            "Find the amplitude, period, and phase shift of y = -2 cos(3θ + 60°)",
            "Solve 2 sin θ = 1 graphically for θ ∈ [0°, 360°]",
            "A Ferris wheel with radius 20m completes one rotation every 2 minutes. Height as function of time"
          ]
        },
        {
          id: "trigonometry-compound-double-applications",
          title: "Applications with Compound and Double Angles",
          description: "Solve problems involving trigonometric functions using compound and double angles.",
          duration: 50,
          content: {
            introduction: "Apply compound and double angle identities to solve complex problems involving trigonometric functions and equations.",
            keyPoints: [
              "Solving trigonometric equations using compound angles",
              "Applications of double angle formulas in function analysis",
              "Simplifying trigonometric expressions using identities",
              "Modeling real-world problems with advanced trigonometry",
              "Harmonic analysis using compound angles",
              "Applications in physics and engineering",
              "Optimization problems using trigonometric functions",
              "Advanced problem-solving techniques"
            ],
            examples: [
              "Solve: sin 2θ + cos θ = 0\n2 sin θ cos θ + cos θ = 0\ncos θ(2 sin θ + 1) = 0\ncos θ = 0 or sin θ = -1/2\nθ = 90° + k·180° or θ = 210° + k·360° or θ = 330° + k·360°",
              "Modeling: A spring's displacement: d(t) = 5 cos(2πt + π/4)\nFind when velocity = 0 (maximum displacement)"
            ],
            practice: [
              "Solve: sin 2θ = cos θ for θ ∈ [0°, 360°]",
              "Simplify: sin 3θ using compound angle formulas",
              "Find maximum value of: 3 sin θ + 4 cos θ",
              "A projectile's height: h(t) = 20t - 5t². Express using trigonometric functions"
            ]
          },
          exercises: [
            "Solve: sin 2θ = cos θ for θ ∈ [0°, 360°]",
            "Simplify: sin 3θ using compound angle formulas",
            "Find maximum value of: 3 sin θ + 4 cos θ",
            "A projectile's height: h(t) = 20t - 5t². Express using trigonometric functions"
          ]
        }
      ]
    },
    {
      id: "euclidean-geometry-revision-proportionality",
      title: "Euclidean Geometry: Revision & Proportionality",
      description: "Revise Grade 11 geometry theorems and study proportionality and similarity.",
      duration: 200,
      lessons: [
        {
          id: "euclidean-geometry-revision-1",
          title: "Euclidean Geometry Revision Part 1",
          description: "Revise examinable theorems from Grade 11 and solve numeric and non-numeric riders.",
          duration: 100,
          content: {
            introduction: "Comprehensive revision of Grade 11 Euclidean geometry theorems including circle theorems, triangle properties, and their applications in solving geometric riders.",
            keyPoints: [
              "Revision of Grade 11 circle theorems",
              "Line from center perpendicular to chord bisects chord",
              "Angle at center is twice angle at circumference",
              "Angles in same segment are equal",
              "Opposite angles of cyclic quadrilateral are supplementary",
              "Tangent perpendicular to radius",
              "Two tangents from external point are equal",
              "Angle between tangent and chord equals angle in alternate segment",
              "Applications in solving geometric riders"
            ],
            examples: [
              "Circle Theorem Application:\nIn circle with center O, AB is chord. OM ⊥ AB.\nProve AM = MB.\nProof: ΔOAM ≅ ΔOBM (RHS) → AM = MB",
              "Cyclic Quadrilateral:\nABCD is cyclic quadrilateral. ∠A = 80°, ∠B = 70°.\nFind ∠C and ∠D.\n∠C = 180° - 80° = 100°, ∠D = 180° - 70° = 110°"
            ],
            practice: [
              "Prove that the angle subtended by an arc at the center is twice the angle subtended at the circumference",
              "In circle with center O, chord AB = 16cm, distance from center to chord is 6cm. Find radius",
              "ABCD is cyclic quadrilateral with ∠A = 2x + 10°, ∠B = 3x - 20°, ∠C = x + 50°. Find all angles",
              "Two tangents from point P touch circle at A and B. If PA = 8cm, find PB and prove ∠APB = 2∠OAB"
            ]
          },
          exercises: [
            "Prove that the angle subtended by an arc at the center is twice the angle subtended at the circumference",
            "In circle with center O, chord AB = 16cm, distance from center to chord is 6cm. Find radius",
            "ABCD is cyclic quadrilateral with ∠A = 2x + 10°, ∠B = 3x - 20°, ∠C = x + 50°. Find all angles",
            "Two tangents from point P touch circle at A and B. If PA = 8cm, find PB and prove ∠APB = 2∠OAB"
          ]
        },
        {
          id: "euclidean-geometry-revision-2",
          title: "Euclidean Geometry Revision Part 2",
          description: "Continue revision of Grade 11 theorems with focus on complex riders and applications.",
          duration: 100,
          content: {
            introduction: "Advanced revision of Grade 11 geometry theorems with emphasis on complex riders, converses, corollaries, and axioms.",
            keyPoints: [
              "Converses of circle theorems",
              "Corollaries derived from main theorems",
              "Application of axioms in geometric proofs",
              "Complex riders involving multiple theorems",
              "Coordinate geometry applications in Euclidean geometry",
              "Advanced problem-solving strategies",
              "Proof by contradiction in geometry",
              "Applications in real-world contexts"
            ],
            examples: [
              "Converse Application:\nIf line from center of circle bisects chord, then it's perpendicular to chord.\nGiven: O is center, M is midpoint of AB.\nProve: OM ⊥ AB.\nProof: OA = OB (radii), AM = MB (given), OM common.\nΔOAM ≅ ΔOBM (SSS) → ∠OMA = ∠OMB = 90°",
              "Complex Rider:\nTwo circles intersect at A and B. PA and PB are tangents to first circle, QA and QB to second. Prove PA = QA."
            ],
            practice: [
              "Prove the converse: if angles in same segment are equal, then points lie on same circle",
              "In ΔABC, D is midpoint of AB, E is midpoint of AC. Prove DE ∥ BC and DE = ½BC (Midpoint Theorem)",
              "Two circles touch externally at P. AB is common tangent. Prove AP ⊥ BP",
              "In cyclic quadrilateral ABCD, diagonals AC and BD intersect at E. Prove AE×EC = BE×ED"
            ]
          },
          exercises: [
            "Prove the converse: if angles in same segment are equal, then points lie on same circle",
            "In ΔABC, D is midpoint of AB, E is midpoint of AC. Prove DE ∥ BC and DE = ½BC (Midpoint Theorem)",
            "Two circles touch externally at P. AB is common tangent. Prove AP ⊥ BP",
            "In cyclic quadrilateral ABCD, diagonals AC and BD intersect at E. Prove AE×EC = BE×ED"
          ]
        },
        {
          id: "proportionality-similarity",
          title: "Proportionality and Similarity",
          description: "Study proportionality, similarity of triangles, and prove related theorems.",
          duration: 100,
          content: {
            introduction: "Master the concepts of proportionality and similarity in geometry, including the necessary and sufficient conditions for polygons to be similar.",
            keyPoints: [
              "Conditions for polygons to be similar",
              "Line parallel to one side of triangle divides other two sides proportionally",
              "Midpoint Theorem as special case of converse proportionality theorem",
              "Equiangular triangles are similar",
              "Triangles with sides in proportion are similar",
              "Pythagorean Theorem proved by similar triangles",
              "Applications of similarity in problem solving",
              "Ratio and proportion in geometric contexts"
            ],
            examples: [
              "Proportionality Theorem:\nIn ΔABC, DE ∥ BC, D on AB, E on AC.\nProve AD/DB = AE/EC.\nProof: ΔADE ∼ ΔABC (AA) → AD/AB = AE/AC → AD/DB = AE/EC",
              "Pythagorean Theorem by Similar Triangles:\nIn ΔABC, right-angled at C. Draw altitude CD.\nΔACD ∼ ΔABC ∼ ΔCBD → AC² = AD×AB, BC² = BD×AB\nAdding: AC² + BC² = AB(AD + BD) = AB²"
            ],
            practice: [
              "In ΔABC, DE ∥ BC, AD = 4, DB = 6, AE = 6. Find EC",
              "Prove that if a line divides two sides of a triangle proportionally, then it is parallel to the third side",
              "Prove that equiangular triangles are similar",
              "Use similar triangles to prove: in right triangle, altitude to hypotenuse creates similar triangles"
            ]
          },
          exercises: [
            "In ΔABC, DE ∥ BC, AD = 4, DB = 6, AE = 6. Find EC",
            "Prove that if a line divides two sides of a triangle proportionally, then it is parallel to the third side",
            "Prove that equiangular triangles are similar",
            "Use similar triangles to prove: in right triangle, altitude to hypotenuse creates similar triangles"
          ]
        }
      ]
    },
    {
      id: "analytical-geometry-circles",
      title: "Analytical Geometry: Circles",
      description: "Study analytical geometry revision and circle equations, tangents, and intersections.",
      duration: 200,
      lessons: [
        {
          id: "analytical-geometry-revision",
          title: "Analytical Geometry Revision",
          description: "Revise midpoint, gradient, distance, and equations of lines.",
          duration: 80,
          content: {
            introduction: "Comprehensive revision of analytical geometry concepts including midpoint, gradient, distance, and equations of lines.",
            keyPoints: [
              "Midpoint formula: M = ((x₁+x₂)/2, (y₁+y₂)/2)",
              "Gradient formula: m = (y₂-y₁)/(x₂-x₁)",
              "Distance formula: d = √[(x₂-x₁)² + (y₂-y₁)²]",
              "Equation of line through two points",
              "Equation of line through one point parallel or perpendicular to given line",
              "Inclination of line: m = tan θ, where 0° ≤ θ ≤ 180°",
              "Applications in coordinate geometry",
              "Parallel and perpendicular line relationships"
            ],
            examples: [
              "Find equation through (2, 3) and (5, 7):\nGradient m = (7-3)/(5-2) = 4/3\nEquation: y - 3 = (4/3)(x - 2) → 3y - 9 = 4x - 8 → 4x - 3y + 1 = 0",
              "Line through (1, 4) perpendicular to y = 2x + 3:\nGiven gradient = 2, perpendicular gradient = -1/2\nEquation: y - 4 = (-1/2)(x - 1) → 2y - 8 = -x + 1 → x + 2y - 9 = 0"
            ],
            practice: [
              "Find midpoint of A(-3, 5) and B(7, -1)",
              "Find gradient of line through (2, -4) and (6, 8)",
              "Find distance between (1, 2) and (7, 10)",
              "Find equation of line through (3, -2) parallel to 2x - 3y + 6 = 0"
            ]
          },
          exercises: [
            "Find midpoint of A(-3, 5) and B(7, -1)",
            "Find gradient of line through (2, -4) and (6, 8)",
            "Find distance between (1, 2) and (7, 10)",
            "Find equation of line through (3, -2) parallel to 2x - 3y + 6 = 0"
          ]
        },
        {
          id: "circle-equations-properties",
          title: "Circle Equations and Properties",
          description: "Study circle equations, tangents, and determine intersections and positions.",
          duration: 120,
          content: {
            introduction: "Master the equation of a circle and solve problems involving tangents, intersections, and relative positions of points and lines.",
            keyPoints: [
              "Equation of circle: (x - a)² + (y - b)² = r² with center (a, b) and radius r",
              "Determining equation of tangent to a given circle",
              "Conditions for circles to intersect internally, externally, or not intersect",
              "Determining if a point lies inside, outside, or on a circle",
              "Classifying lines as exterior, secant, or tangential to a circle",
              "Applications of circle properties in problem solving",
              "Coordinate geometry proofs involving circles"
            ],
            examples: [
              "Circle Equation:\nCenter (3, -2), radius 5\nEquation: (x - 3)² + (y + 2)² = 25",
              "Point Position:\nDetermine if (4, 1) lies inside, outside, or on circle x² + y² = 25\n4² + 1² = 17 < 25 → Point lies inside circle",
              "Tangent Equation:\nFind tangent to circle x² + y² = 25 at point (3, 4)\nGradient of radius = 4/3, gradient of tangent = -3/4\nEquation: y - 4 = (-3/4)(x - 3)"
            ],
            practice: [
              "Find equation of circle with center (-2, 5) and radius √13",
              "Determine if point (1, -3) lies inside, outside, or on circle (x-2)² + (y+1)² = 16",
              "Find equation of tangent to circle x² + y² = 36 at point (0, 6)",
              "Determine if circles (x-1)² + y² = 9 and (x-5)² + y² = 16 intersect, and if so, find intersection points"
            ]
          },
          exercises: [
            "Find equation of circle with center (-2, 5) and radius √13",
            "Determine if point (1, -3) lies inside, outside, or on circle (x-2)² + (y+1)² = 16",
            "Find equation of tangent to circle x² + y² = 36 at point (0, 6)",
            "Determine if circles (x-1)² + y² = 9 and (x-5)² + y² = 16 intersect, and if so, find intersection points"
          ]
        }
      ]
    },
    {
      id: "differential-calculus",
      title: "Differential Calculus",
      description: "Master limits, derivatives, differentiation rules, and applications of calculus.",
      duration: 300,
      lessons: [
        {
          id: "polynomials-factor-theorem",
          title: "Polynomials and Factor Theorem",
          description: "Factorise third-degree polynomials and apply Remainder and Factor Theorems.",
          duration: 60,
          content: {
            introduction: "Master polynomial factorization and apply the Remainder and Factor Theorems to solve problems involving cubic polynomials.",
            keyPoints: [
              "Factorization of third-degree polynomials",
              "Remainder Theorem: When P(x) is divided by (x - a), remainder is P(a)",
              "Factor Theorem: If P(a) = 0, then (x - a) is a factor of P(x)",
              "Finding roots of polynomial equations",
              "Synthetic division for polynomial division",
              "Applications in solving polynomial equations",
              "Relationship between roots and coefficients"
            ],
            examples: [
              "Factor Theorem Application:\nShow that (x - 2) is a factor of P(x) = x³ - 4x² + x + 6\nP(2) = 8 - 16 + 2 + 6 = 0 → (x - 2) is a factor\nDivide: x³ - 4x² + x + 6 = (x - 2)(x² - 2x - 3) = (x - 2)(x - 3)(x + 1)",
              "Remainder Theorem:\nFind remainder when 2x³ - 3x² + 4x - 5 is divided by (x + 1)\nP(-1) = 2(-1)³ - 3(-1)² + 4(-1) - 5 = -2 - 3 - 4 - 5 = -14"
            ],
            practice: [
              "Factorize completely: x³ - 3x² - 4x + 12",
              "Show that (x + 2) is a factor of x³ + 6x² + 11x + 6 and factorize completely",
              "Find the remainder when x³ - 2x² + 3x - 4 is divided by (x - 1)",
              "If x³ + ax² + bx + 6 has factors (x + 1) and (x - 2), find a and b"
            ]
          },
          exercises: [
            "Factorize completely: x³ - 3x² - 4x + 12",
            "Show that (x + 2) is a factor of x³ + 6x² + 11x + 6 and factorize completely",
            "Find the remainder when x³ - 2x² + 3x - 4 is divided by (x - 1)",
            "If x³ + ax² + bx + 6 has factors (x + 1) and (x - 2), find a and b"
          ]
        },
        {
          id: "limit-concept",
          title: "Limit Concept and Definition",
          description: "Understand the intuitive concept of limits and define the derivative using limits.",
          duration: 60,
          content: {
            introduction: "Develop an intuitive understanding of limits and use them to define the derivative of a function at a point.",
            keyPoints: [
              "Intuitive understanding of limits as approximations",
              "Limit concept in context of rate of change or gradient",
              "Definition of derivative using limits: f'(x) = lim(h→0) [f(x+h) - f(x)]/h",
              "Understanding f'(a) as gradient of tangent at x = a",
              "Limit notation and its interpretation",
              "One-sided limits and continuity",
              "Applications in finding instantaneous rates of change",
              "Geometric interpretation of limits"
            ],
            examples: [
              "Limit Definition:\nf(x) = x², find f'(2) using first principles\nf'(2) = lim(h→0) [(2+h)² - 2²]/h = lim(h→0) [4 + 4h + h² - 4]/h = lim(h→0) (4h + h²)/h = lim(h→0) (4 + h) = 4",
              "Rate of Change:\nFor s(t) = t² (position), velocity at t = 3\nv(3) = lim(h→0) [(3+h)² - 3²]/h = lim(h→0) (6h + h²)/h = lim(h→0) (6 + h) = 6"
            ],
            practice: [
              "Use first principles to find f'(1) if f(x) = 3x²",
              "Find the gradient of the curve y = x² + 2x at x = -1 using limits",
              "A ball's position: s(t) = 5t². Find velocity at t = 2 seconds",
              "Use limit definition to find derivative of f(x) = 2x + 1 at any point x"
            ]
          },
          exercises: [
            "Use first principles to find f'(1) if f(x) = 3x²",
            "Find the gradient of the curve y = x² + 2x at x = -1 using limits",
            "A ball's position: s(t) = 5t². Find velocity at t = 2 seconds",
            "Use limit definition to find derivative of f(x) = 2x + 1 at any point x"
          ]
        },
        {
          id: "differentiation-first-principles",
          title: "Differentiation from First Principles",
          description: "Use first principles to determine derivatives of various functions.",
          duration: 80,
          content: {
            introduction: "Master the process of differentiation from first principles for various function types including polynomials, rational functions, and constants.",
            keyPoints: [
              "First principles differentiation: f'(x) = lim(h→0) [f(x+h) - f(x)]/h",
              "Derivative of quadratic function: f(x) = ax² + bx + c",
              "Derivative of cubic function: f(x) = ax³",
              "Derivative of rational function: f(x) = a/x",
              "Derivative of constant function: f(x) = c",
              "Understanding the derivative function f'(x)",
              "Applications in finding gradients and equations of tangents",
              "Connection between algebraic and geometric interpretations"
            ],
            examples: [
              "Quadratic Function:\nf(x) = 2x² - 3x + 1\nf'(x) = lim(h→0) [2(x+h)² - 3(x+h) + 1 - (2x² - 3x + 1)]/h\n= lim(h→0) [2x² + 4xh + 2h² - 3x - 3h + 1 - 2x² + 3x - 1]/h\n= lim(h→0) (4xh + 2h² - 3h)/h = lim(h→0) (4x + 2h - 3) = 4x - 3",
              "Cubic Function:\nf(x) = x³\nf'(x) = lim(h→0) [(x+h)³ - x³]/h = lim(h→0) [x³ + 3x²h + 3xh² + h³ - x³]/h\n= lim(h→0) (3x²h + 3xh² + h³)/h = lim(h→0) (3x² + 3xh + h²) = 3x²"
            ],
            practice: [
              "Use first principles to find f'(x) if f(x) = 3x² + 2x - 5",
              "Find the derivative of f(x) = x³ - 2x using first principles",
              "Use first principles to differentiate f(x) = 4/x",
              "Find f'(x) for f(x) = 7 using first principles and explain the result"
            ]
          },
          exercises: [
            "Use first principles to find f'(x) if f(x) = 3x² + 2x - 5",
            "Find the derivative of f(x) = x³ - 2x using first principles",
            "Use first principles to differentiate f(x) = 4/x",
            "Find f'(x) for f(x) = 7 using first principles and explain the result"
          ]
        },
        {
          id: "differentiation-rules",
          title: "Rules of Differentiation",
          description: "Learn and apply differentiation rules including power rule, sum rule, and constant multiple rule.",
          duration: 60,
          content: {
            introduction: "Master the standard rules of differentiation and apply them to find derivatives efficiently.",
            keyPoints: [
              "Power rule: d/dx(ax^n) = anx^(n-1) for any real number n",
              "Sum/Difference rule: d/dx[f(x) ± g(x)] = f'(x) ± g'(x)",
              "Constant multiple rule: d/dx[kf(x)] = kf'(x)",
              "Applications of differentiation rules to complex functions",
              "Finding equations of tangents using differentiation",
              "Higher-order derivatives introduction",
              "Efficient differentiation techniques",
              "Common mistakes and how to avoid them"
            ],
            examples: [
              "Power Rule Applications:\nf(x) = 3x⁴ - 2x³ + 5x - 7\nf'(x) = 3(4x³) - 2(3x²) + 5(1) - 0 = 12x³ - 6x² + 5",
              "Combined Rules:\nf(x) = 2x⁻³ + 4√x - 3/x²\nf'(x) = 2(-3x⁻⁴) + 4(1/2x^(-1/2)) - 3(-2x⁻³)\n= -6/x⁴ + 2/√x + 6/x³"
            ],
            practice: [
              "Differentiate: f(x) = 4x⁵ - 3x³ + 2x - 8",
              "Find f'(x) if f(x) = 3x² + 4/x - 2√x",
              "Differentiate: g(x) = (2x + 3)² using power rule after expanding",
              "Find the derivative of h(x) = 5x⁻² + 3x^(1/3) - 7"
            ]
          },
          exercises: [
            "Differentiate: f(x) = 4x⁵ - 3x³ + 2x - 8",
            "Find f'(x) if f(x) = 3x² + 4/x - 2√x",
            "Differentiate: g(x) = (2x + 3)² using power rule after expanding",
            "Find the derivative of h(x) = 5x⁻² + 3x^(1/3) - 7"
          ]
        },
        {
          id: "tangents-second-derivative",
          title: "Tangents and Second Derivative",
          description: "Determine equations of tangents and understand the second derivative and concavity.",
          duration: 60,
          content: {
            introduction: "Learn to find equations of tangents to function graphs and understand the concept of second derivative and concavity.",
            keyPoints: [
              "Finding equations of tangents to graphs of functions",
              "Second derivative: f''(x) = d/dx[f'(x)]",
              "Concavity and its relationship to the second derivative",
              "Points of inflection where concavity changes",
              "Using first and second derivatives for curve sketching",
              "Applications in optimization problems",
              "Connection between first derivative and function behavior",
              "Practical applications of tangent equations"
            ],
            examples: [
              "Tangent Equation:\nFind tangent to y = x² - 4x + 3 at x = 2\ny = 4 - 8 + 3 = -1, f'(x) = 2x - 4, f'(2) = 0\nEquation: y - (-1) = 0(x - 2) → y = -1",
              "Second Derivative and Concavity:\nf(x) = x³ - 3x²\nf'(x) = 3x² - 6x, f''(x) = 6x - 6\nf''(x) > 0 when x > 1 (concave up)\nf''(x) < 0 when x < 1 (concave down)\nPoint of inflection at x = 1"
            ],
            practice: [
              "Find equation of tangent to y = 2x² - 5x + 3 at x = 1",
              "For f(x) = x³ - 6x² + 9x, find f''(x) and determine intervals of concavity",
              "Find points where f(x) = x⁴ - 4x³ has horizontal tangents",
              "Determine concavity of f(x) = 2x³ - 3x² - 12x + 5"
            ]
          },
          exercises: [
            "Find equation of tangent to y = 2x² - 5x + 3 at x = 1",
            "For f(x) = x³ - 6x² + 9x, find f''(x) and determine intervals of concavity",
            "Find points where f(x) = x⁴ - 4x³ has horizontal tangents",
            "Determine concavity of f(x) = 2x³ - 3x² - 12x + 5"
          ]
        },
        {
          id: "cubic-functions-sketching",
          title: "Cubic Functions Sketching",
          description: "Sketch cubic polynomial functions using differentiation and interpret the results.",
          duration: 80,
          content: {
            introduction: "Master the art of sketching cubic polynomial functions using differentiation to find stationary points, points of inflection, and analyze function behavior.",
            keyPoints: [
              "Finding x-intercepts using factor theorem and other techniques",
              "Using differentiation to find stationary points",
              "Classifying stationary points as maxima or minima",
              "Finding points of inflection using second derivative",
              "Determining intervals where function increases/decreases",
              "Analyzing end behavior of cubic functions",
              "Sketching the derivative function alongside the cubic",
              "Interpreting sketched cubic functions in context"
            ],
            examples: [
              "Cubic Function Analysis:\nf(x) = x³ - 3x² - 9x + 5\nf'(x) = 3x² - 6x - 9 = 3(x² - 2x - 3) = 3(x - 3)(x + 1)\nStationary points at x = 3 (local min) and x = -1 (local max)\nf''(x) = 6x - 6, Point of inflection at x = 1\nx-intercepts: Use factor theorem and trial",
              "Sketching with Interpretation:\nFor f(x) = 2x³ - 3x² - 12x\nFind stationary points, classify them, find point of inflection\nSketch both f(x) and f'(x), interpret the relationship"
            ],
            practice: [
              "Sketch f(x) = x³ - 6x² + 9x showing all key features",
              "For f(x) = 2x³ - 9x² + 12x - 3, find stationary points and sketch",
              "Sketch the cubic function f(x) = x³ + 3x² - 4 and its derivative",
              "Analyze and sketch f(x) = -x³ + 6x² - 9x + 4"
            ]
          },
          exercises: [
            "Sketch f(x) = x³ - 6x² + 9x showing all key features",
            "For f(x) = 2x³ - 9x² + 12x - 3, find stationary points and sketch",
            "Sketch the cubic function f(x) = x³ + 3x² - 4 and its derivative",
            "Analyze and sketch f(x) = -x³ + 6x² - 9x + 4"
          ]
        },
        {
          id: "calculus-applications",
          title: "Applications of Calculus",
          description: "Solve practical problems concerning optimization and rate of change, including calculus of motion.",
          duration: 60,
          content: {
            introduction: "Apply differential calculus to solve real-world optimization problems and analyze rates of change in various contexts including motion.",
            keyPoints: [
              "Optimization problems in geometry and physics",
              "Maximum and minimum values in practical contexts",
              "Rate of change problems in various fields",
              "Calculus of motion: position, velocity, acceleration",
              "Related rates problems",
              "Economic applications: cost, revenue, profit optimization",
              "Setting up and solving applied calculus problems",
              "Interpreting solutions in real-world contexts"
            ],
            examples: [
              "Optimization Problem:\nFind dimensions of rectangle with perimeter 20cm that maximizes area\nLet length = x, width = (20 - 2x)/2 = 10 - x\nArea A = x(10 - x) = 10x - x²\ndA/dx = 10 - 2x = 0 → x = 5cm, width = 5cm (square)",
              "Motion Problem:\nPosition s(t) = t³ - 6t² + 9t + 2\nVelocity v(t) = s'(t) = 3t² - 12t + 9\nAcceleration a(t) = v'(t) = 6t - 12\nFind when velocity = 0: 3t² - 12t + 9 = 0 → t² - 4t + 3 = 0 → t = 1, 3"
            ],
            practice: [
              "Find two numbers whose sum is 20 and product is maximum",
              "A rectangular field is to be fenced off along a river. No fence needed along river. If 100m fencing available, find dimensions for maximum area",
              "A ball is thrown upward with height h(t) = 20t - 5t². Find maximum height and when it hits ground",
              "A cylindrical can with volume 1 liter. Find dimensions that minimize surface area"
            ]
          },
          exercises: [
            "Find two numbers whose sum is 20 and product is maximum",
            "A rectangular field is to be fenced off along a river. No fence needed along river. If 100m fencing available, find dimensions for maximum area",
            "A ball is thrown upward with height h(t) = 20t - 5t². Find maximum height and when it hits ground",
            "A cylindrical can with volume 1 liter. Find dimensions that minimize surface area"
          ]
        }
      ]
    },
    {
      id: "finance-growth-decay",
      title: "Finance, Growth and Decay",
      description: "Master simple and compound growth/decay, annuities, and financial decision making.",
      duration: 200,
      lessons: [
        {
          id: "finance-revision",
          title: "Finance: Revision",
          description: "Revise simple and compound growth and decay formulae.",
          duration: 60,
          content: {
            introduction: "Comprehensive revision of simple and compound growth and decay formulae and their applications in various financial contexts.",
            keyPoints: [
              "Simple growth: A = P(1 + in)",
              "Simple decay: A = P(1 - in)",
              "Compound growth: A = P(1 + i)^n",
              "Compound decay: A = P(1 - i)^n",
              "Straight line depreciation",
              "Depreciation on reducing balance",
              "Applications in finance, population growth, and science",
              "Comparison of simple vs compound growth/decay"
            ],
            examples: [
              "Compound Growth:\nInvest R5000 at 8% compound interest for 5 years\nA = 5000(1 + 0.08)^5 = 5000(1.4693) = R7346.64",
              "Reducing Balance Depreciation:\nCar worth R200000 depreciates at 15% per year\nAfter 3 years: A = 200000(1 - 0.15)^3 = 200000(0.614125) = R122825"
            ],
            practice: [
              "Calculate amount if R8000 invested at 6% simple interest for 4 years",
              "A population of 50000 grows at 2.5% compound annually. Find population after 10 years",
              "A computer costing R15000 depreciates at 20% per year on reducing balance. Find value after 3 years",
              "Compare simple vs compound interest on R10000 at 8% for 5 years"
            ]
          },
          exercises: [
            "Calculate amount if R8000 invested at 6% simple interest for 4 years",
            "A population of 50000 grows at 2.5% compound annually. Find population after 10 years",
            "A computer costing R15000 depreciates at 20% per year on reducing balance. Find value after 3 years",
            "Compare simple vs compound interest on R10000 at 8% for 5 years"
          ]
        },
        {
          id: "future-value-annuities",
          title: "Future Value Annuities",
          description: "Solve problems involving future value annuities and sinking funds.",
          duration: 70,
          content: {
            introduction: "Master future value annuities, sinking funds, and their applications in financial planning and investment scenarios.",
            keyPoints: [
              "Future value of annuity: F = R[(1 + i)^n - 1]/i",
              "Sinking funds and their applications",
              "Regular payments and future value calculations",
              "Timeline analysis for annuity problems",
              "Applications in retirement planning and education funds",
              "Effect of payment frequency on future value",
              "Nominal and effective interest rates in annuities",
              "Problem-solving strategies for complex annuity scenarios"
            ],
            examples: [
              "Future Value Annuity:\nMonthly payment R500 at 0.75% per month for 10 years\nF = 500[(1 + 0.0075)^120 - 1]/0.0075 = 500[2.4514 - 1]/0.0075\n= 500(1.4514/0.0075) = 500(193.52) = R96760",
              "Sinking Fund:\nCompany needs R500000 in 5 years. Interest 6% p.a.\nMonthly payment R: 500000 = R[(1.005)^60 - 1]/0.005\nR = 500000 × 0.005/[(1.005)^60 - 1] = R7118.74"
            ],
            practice: [
              "Find future value if R1000 deposited monthly at 8% p.a. for 15 years",
              "How much must be deposited quarterly at 6% p.a. to accumulate R100000 in 8 years?",
              "A sinking fund requires R80000 in 6 years at 5% p.a. compounded semi-annually. Find semi-annual payment",
              "Compare future value of monthly R500 vs annual R6000 at 9% p.a. for 10 years"
            ]
          },
          exercises: [
            "Find future value if R1000 deposited monthly at 8% p.a. for 15 years",
            "How much must be deposited quarterly at 6% p.a. to accumulate R100000 in 8 years?",
            "A sinking fund requires R80000 in 6 years at 5% p.a. compounded semi-annually. Find semi-annual payment",
            "Compare future value of monthly R500 vs annual R6000 at 9% p.a. for 10 years"
          ]
        },
        {
          id: "present-value-annuities",
          title: "Present Value Annuities",
          description: "Solve problems involving present value annuities and loan calculations.",
          duration: 70,
          content: {
            introduction: "Master present value annuities, loan calculations, and applications in financial decision making and loan management.",
            keyPoints: [
              "Present value of annuity: P = R[1 - (1 + i)^(-n)]/i",
              "Loan calculations and repayment schedules",
              "Outstanding balance calculations",
              "Missed payments and their effects",
              "Last payment calculations",
              "Applications in bond pricing and pension valuation",
              "Effect of interest rates on present value",
              "Financial decision making using present value analysis"
            ],
            examples: [
              "Present Value Annuity:\nCar loan R200000 over 5 years at 12% p.a.\nMonthly payment R: 200000 = R[1 - (1.01)^(-60)]/0.01\nR = 200000 × 0.01/[1 - (1.01)^(-60)] = R4448.89",
              "Outstanding Balance:\nAfter 3 years (36 payments) on 5-year loan\nRemaining payments: 24 months\nBalance = 4448.89[1 - (1.01)^(-24)]/0.01 = R94546.72"
            ],
            practice: [
              "Find monthly payment on R300000 home loan over 20 years at 9.5% p.a.",
              "Calculate outstanding balance after 10 years on R150000 loan at 11% p.a. over 15 years",
              "A loan of R80000 at 8% p.a. for 6 years. Find monthly payment and balance after 2 years",
              "Compare total interest paid on R100000 loan at 10% over 10 years vs 15 years"
            ]
          },
          exercises: [
            "Find monthly payment on R300000 home loan over 20 years at 9.5% p.a.",
            "Calculate outstanding balance after 10 years on R150000 loan at 11% p.a. over 15 years",
            "A loan of R80000 at 8% p.a. for 6 years. Find monthly payment and balance after 2 years",
            "Compare total interest paid on R100000 loan at 10% over 10 years vs 15 years"
          ]
        },
        {
          id: "financial-decision-making",
          title: "Financial Decision Making",
          description: "Use logarithms and critically analyze investment and loan options.",
          duration: 60,
          content: {
            introduction: "Apply logarithms to solve financial equations and develop critical analysis skills for evaluating investment and loan options including pyramid schemes.",
            keyPoints: [
              "Using logarithms to solve for time period n in A = P(1 ± i)^n",
              "Logarithmic applications in financial mathematics",
              "Critical analysis of investment options",
              "Evaluation of loan alternatives",
              "Understanding pyramid schemes and their risks",
              "Making informed financial decisions",
              "Comparison of different financial products",
              "Real-world financial planning considerations"
            ],
            examples: [
              "Logarithmic Solution:\nHow long for R5000 to double at 8% p.a. compound?\n10000 = 5000(1.08)^n → 2 = (1.08)^n\nlog 2 = n log 1.08 → n = log 2 / log 1.08 ≈ 9.01 years",
              "Pyramid Scheme Analysis:\nScheme promises 100% return in 6 months\nIf R1000 invested, need R2000 returned\nBut each level needs doubling: unsustainable growth\nCompare with legitimate 8% p.a. investment"
            ],
            practice: [
              "How long will R10000 take to grow to R25000 at 7% p.a. compound interest?",
              "At what interest rate will R8000 double in 10 years?",
              "Compare investment A: 12% simple vs investment B: 10% compound over 8 years",
              "Analyze pyramid scheme requiring R1000 investment promising R5000 return in 1 year"
            ]
          },
          exercises: [
            "How long will R10000 take to grow to R25000 at 7% p.a. compound interest?",
            "At what interest rate will R8000 double in 10 years?",
            "Compare investment A: 12% simple vs investment B: 10% compound over 8 years",
            "Analyze pyramid scheme requiring R1000 investment promising R5000 return in 1 year"
          ]
        }
      ]
    },
    {
      id: "statistics-regression",
      title: "Statistics and Regression",
      description: "Revise statistical concepts and study regression analysis for bivariate data.",
      duration: 160,
      lessons: [
        {
          id: "statistics-revision",
          title: "Statistics Revision",
          description: "Revise five number summary, box plots, histograms, variance, standard deviation, and outliers.",
          duration: 80,
          content: {
            introduction: "Comprehensive revision of statistical concepts including data representation, measures of central tendency, dispersion, and identification of outliers.",
            keyPoints: [
              "Five number summary: minimum, Q1, median, Q3, maximum",
              "Box and whisker plots construction and interpretation",
              "Stem and leaf plots for data organization",
              "Histograms for grouped data representation",
              "Frequency polygons for data visualization",
              "Ogives (cumulative frequency curves)",
              "Variance and standard deviation of ungrouped data",
              "Symmetric and skewed data analysis",
              "Identification and interpretation of outliers"
            ],
            examples: [
              "Five Number Summary:\nData: 12, 15, 18, 22, 25, 28, 32, 35, 38, 42, 45\nMin = 12, Q1 = 18, Median = 28, Q3 = 38, Max = 45\nIQR = Q3 - Q1 = 20, Outliers below 18 - 1.5×20 = -12 or above 38 + 1.5×20 = 68",
              "Standard Deviation:\nData: 10, 12, 14, 16, 18\nMean = 14, Variance = [(10-14)² + (12-14)² + (14-14)² + (16-14)² + (18-14)²]/5 = 8\nStandard Deviation = √8 ≈ 2.83"
            ],
            practice: [
              "Find five number summary for: 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48",
              "Calculate variance and standard deviation for: 8, 12, 16, 20, 24",
              "Construct a box plot for the data: 5, 8, 12, 15, 18, 22, 25, 28, 32, 35",
              "Identify outliers in: 10, 12, 14, 16, 18, 20, 22, 24, 26, 60"
            ]
          },
          exercises: [
            "Find five number summary for: 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48",
            "Calculate variance and standard deviation for: 8, 12, 16, 20, 24",
            "Construct a box plot for the data: 5, 8, 12, 15, 18, 22, 25, 28, 32, 35",
            "Identify outliers in: 10, 12, 14, 16, 18, 20, 22, 24, 26, 60"
          ]
        },
        {
          id: "regression-analysis",
          title: "Regression Analysis",
          description: "Use statistical summaries, scatterplots, regression lines, and correlation to analyze bivariate data.",
          duration: 80,
          content: {
            introduction: "Master regression analysis techniques including scatterplots, least squares regression lines, correlation coefficients, and their applications in analyzing bivariate data.",
            keyPoints: [
              "Statistical summaries for bivariate data",
              "Scatterplots and their interpretation",
              "Least squares regression line: y = mx + c",
              "Correlation coefficient and its interpretation",
              "Interpolation and extrapolation using regression",
              "Discussions on skewness in bivariate data",
              "Applications in real-world contexts",
              "Limitations and assumptions of regression analysis"
            ],
            examples: [
              "Regression Line Calculation:\nData: (1,2), (2,4), (3,5), (4,4), (5,6)\nΣx = 15, Σy = 21, Σxy = 71, Σx² = 55, n = 5\nm = (5×71 - 15×21)/(5×55 - 15²) = (355 - 315)/(275 - 225) = 40/50 = 0.8\nc = (21 - 0.8×15)/5 = (21 - 12)/5 = 1.8\nRegression line: y = 0.8x + 1.8",
              "Correlation Coefficient:\nr = (nΣxy - ΣxΣy)/√[(nΣx² - (Σx)²)(nΣy² - (Σy)²)]\nFor data above, if Σy² = 97:\nr = (5×71 - 15×21)/√[(5×55 - 225)(5×97 - 441)] = 40/√[50 × 44] = 40/√2200 ≈ 0.85"
            ],
            practice: [
              "Find regression line for: (2,3), (4,5), (6,7), (8,8), (10,11)",
              "Calculate correlation coefficient for: (1,1), (2,3), (3,2), (4,5), (5,4)",
              "Use regression line to predict y when x = 7 for data: (1,2), (3,5), (5,8), (7,11)",
              "Analyze relationship between study hours and test scores using scatterplot and regression"
            ]
          },
          exercises: [
            "Find regression line for: (2,3), (4,5), (6,7), (8,8), (10,11)",
            "Calculate correlation coefficient for: (1,1), (2,3), (3,2), (4,5), (5,4)",
            "Use regression line to predict y when x = 7 for data: (1,2), (3,5), (5,8), (7,11)",
            "Analyze relationship between study hours and test scores using scatterplot and regression"
          ]
        }
      ]
    },
    {
      id: "probability-counting",
      title: "Probability and Counting Principle",
      description: "Revise probability concepts and study the fundamental counting principle and its applications.",
      duration: 160,
      lessons: [
        {
          id: "probability-revision",
          title: "Probability Revision",
          description: "Revise probability rules, Venn diagrams, tree diagrams, and conditional probability.",
          duration: 80,
          content: {
            introduction: "Comprehensive revision of probability concepts including addition rules, complementary events, independent/dependent events, and various problem-solving methods.",
            keyPoints: [
              "Addition rule: P(A or B) = P(A) + P(B) - P(A and B)",
              "Addition rule for mutually exclusive events: P(A or B) = P(A) + P(B)",
              "Complementary rule: P(not A) = 1 - P(A)",
              "Independent vs dependent events",
              "Product rule for independent events: P(A and B) = P(A) × P(B)",
              "Venn diagrams for three events A, B, and C",
              "Tree diagrams for consecutive/simultaneous events",
              "Applications in real-world probability problems"
            ],
            examples: [
              "Addition Rule:\nP(A) = 0.4, P(B) = 0.3, P(A and B) = 0.1\nP(A or B) = 0.4 + 0.3 - 0.1 = 0.6",
              "Independent Events:\nP(A) = 0.6, P(B) = 0.4, A and B independent\nP(A and B) = 0.6 × 0.4 = 0.24\nP(A or B) = 0.6 + 0.4 - 0.24 = 0.76",
              "Three Events Venn Diagram:\nGiven P(A) = 0.5, P(B) = 0.4, P(C) = 0.3\nP(A and B) = 0.2, P(A and C) = 0.15, P(B and C) = 0.1\nP(A and B and C) = 0.05\nFind P(A or B or C)"
            ],
            practice: [
              "P(A) = 0.7, P(B) = 0.5, P(A and B) = 0.3. Find P(A or B)",
              "A and B are independent, P(A) = 0.4, P(B) = 0.6. Find P(A and B) and P(A or B)",
              "Use Venn diagram to solve: P(A) = 0.6, P(B) = 0.4, P(A and B) = 0.2. Find P(A only)",
              "Tree diagram: Bag with 3 red, 2 blue marbles. Draw two without replacement. Find P(both red)"
            ]
          },
          exercises: [
            "P(A) = 0.7, P(B) = 0.5, P(A and B) = 0.3. Find P(A or B)",
            "A and B are independent, P(A) = 0.4, P(B) = 0.6. Find P(A and B) and P(A or B)",
            "Use Venn diagram to solve: P(A) = 0.6, P(B) = 0.4, P(A and B) = 0.2. Find P(A only)",
            "Tree diagram: Bag with 3 red, 2 blue marbles. Draw two without replacement. Find P(both red)"
          ]
        },
        {
          id: "counting-principle",
          title: "Fundamental Counting Principle",
          description: "Study the fundamental counting principle and apply it to solve probability problems.",
          duration: 80,
          content: {
            introduction: "Master the fundamental counting principle and its applications in solving complex probability problems involving multiple events and choices.",
            keyPoints: [
              "Fundamental Counting Principle: If one event can occur in m ways and another in n ways, then both can occur in m × n ways",
              "Applications to multi-stage experiments",
              "Permutations and combinations basics",
              "Factorial notation and its use",
              "Applications in probability calculations",
              "Systematic counting techniques",
              "Real-world applications of counting principles",
              "Problem-solving strategies for complex scenarios"
            ],
            examples: [
              "Basic Counting Principle:\nRestaurant offers 4 appetizers, 6 main courses, 3 desserts\nTotal meal combinations: 4 × 6 × 3 = 72",
              "License Plate Combinations:\nLicense plate: 3 letters (A-Z) followed by 3 digits (0-9)\nTotal combinations: 26 × 26 × 26 × 10 × 10 × 10 = 26³ × 10³ = 17576000",
              "Probability Application:\nRoll two dice. Find P(sum = 7)\nFavorable outcomes: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) → 6 ways\nTotal outcomes: 6 × 6 = 36\nP(sum = 7) = 6/36 = 1/6"
            ],
            practice: [
              "A code consists of 4 digits. How many possible codes?",
              "Student must choose 1 subject from 5 math and 1 from 4 science. How many combinations?",
              "Find probability of drawing 2 kings from deck of 52 cards (without replacement)",
              "How many different 3-letter arrangements can be made from word MATH?"
            ]
          },
          exercises: [
            "A code consists of 4 digits. How many possible codes?",
            "Student must choose 1 subject from 5 math and 1 from 4 science. How many combinations?",
            "Find probability of drawing 2 kings from deck of 52 cards (without replacement)",
            "How many different 3-letter arrangements can be made from word MATH?"
          ]
        }
      ]
    }
  ]
};