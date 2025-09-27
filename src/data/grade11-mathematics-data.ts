export interface Grade11MathematicsLesson {
  id: string;
  title: string;
  description: string;
  duration: number; // in minutes
  content: {
    introduction: string;
    keyPoints: string[];
    examples: string[];
    practice: string[];
  } | string[];
  exercises?: string[];
}

export interface Grade11MathematicsTopic {
  id: string;
  title: string;
  description: string;
  duration: number; // in minutes
  lessons: Grade11MathematicsLesson[];
}

export interface Grade11MathematicsData {
  grade: string;
  subject: string;
  description: string;
  totalDuration: number; // in minutes
  topics: Grade11MathematicsTopic[];
}

export const grade11MathematicsData: Grade11MathematicsData = {
  grade: "Grade 11",
  subject: "Mathematics",
  description: "Comprehensive Grade 11 Mathematics course following CAPS curriculum, covering exponents, equations, trigonometry, geometry, functions, statistics, probability, finance, and number patterns.",
  totalDuration: 1320, // 22 hours
  topics: [
    {
      id: "exponents-surds",
      title: "Exponents and Surds",
      description: "Master the laws of exponents for rational exponents and operations with surds.",
      duration: 120,
      lessons: [
        {
          id: "rational-exponents",
          title: "Rational Exponents",
          description: "Simplify expressions and solve equations using the laws of exponents for rational exponents.",
          duration: 40,
          content: {
            introduction: "Learn to work with rational exponents and understand their relationship with roots. Rational exponents provide a powerful way to express roots and powers in a unified notation.",
            keyPoints: [
              "Understanding rational exponents: x^(p/q) = q√(x^p)",
              "Laws of exponents for rational exponents",
              "Simplifying expressions with rational exponents",
              "Solving equations involving rational exponents",
              "Applications of rational exponents in real-world contexts"
            ],
            examples: [
              "Simplify: (8x^6)^(2/3) = (2^3 * x^6)^(2/3) = 2^2 * x^4 = 4x^4",
              "Simplify: (27y^(-9))^(-1/3) = (3^3 * y^(-9))^(-1/3) = 3^(-1) * y^3 = y^3/3",
              "Solve: x^(3/2) = 8 → (x^(3/2))^(2/3) = 8^(2/3) → x = 4"
            ],
            practice: [
              "Simplify: (8x^6)^(2/3)",
              "Solve: x^(3/2) = 8",
              "Simplify: (27y^(-9))^(-1/3)",
              "Solve: (2x)^(1/2) = 6"
            ]
          },
          exercises: [
            "Simplify: (8x^6)^(2/3)",
            "Solve: x^(3/2) = 8",
            "Simplify: (27y^(-9))^(-1/3)",
            "Solve: (2x)^(1/2) = 6"
          ]
        },
        {
          id: "operations-with-surds",
          title: "Operations with Surds",
          description: "Add, subtract, multiply and divide simple surds and solve equations involving surds.",
          duration: 40,
          content: {
            introduction: "Master the fundamental operations with surds, including addition, subtraction, multiplication, and division. Learn to rationalize denominators and solve equations involving surds.",
            keyPoints: [
              "Understanding surds and their properties",
              "Addition and subtraction of surds",
              "Multiplication and division of surds",
              "Rationalizing denominators",
              "Solving simple equations involving surds"
            ],
            examples: [
              "Simplify: √12 + √27 - √3 = 2√3 + 3√3 - √3 = 4√3",
              "Simplify: √2 × √8 = √16 = 4",
              "Rationalize: 3/√2 = 3√2/2",
              "Solve: √(x+2) = 3 → x+2 = 9 → x = 7"
            ],
            practice: [
              "Simplify: √12 + √27 - √3",
              "Simplify: √2 × √8",
              "Rationalize: 3/√2",
              "Solve: √(x+2) = 3"
            ]
          },
          exercises: [
            "Simplify: √12 + √27 - √3",
            "Simplify: √2 × √8",
            "Rationalize: 3/√2",
            "Solve: √(x+2) = 3"
          ]
        },
        {
          id: "surds-equations",
          title: "Surds Equations",
          description: "Advanced techniques for solving equations involving surds.",
          duration: 40,
          content: {
            introduction: "Learn advanced techniques for solving equations that contain surds. Master the process of squaring both sides to eliminate surds and checking for extraneous solutions.",
            keyPoints: [
              "Solving equations with surds on both sides",
              "Squaring both sides to eliminate surds",
              "Checking for extraneous solutions",
              "Applications of surds in geometry",
              "Complex surd expressions and simplification"
            ],
            examples: [
              "Solve: √(x+1) + √(x-1) = 3\nLet √(x+1) = a, √(x-1) = b\nThen a + b = 3 and a² - b² = 2\n(a+b)(a-b) = 2 → 3(a-b) = 2 → a-b = 2/3\nSolving: a = 11/6, b = 7/6\nx+1 = 121/36 → x = 85/36",
              "Solve: √(2x+3) = x - 1\nSquare both sides: 2x+3 = x² - 2x + 1\nx² - 4x - 2 = 0\nx = (4 ± √24)/2 = 2 ± √6\nCheck: x = 2 + √6 is valid, x = 2 - √6 is extraneous"
            ],
            practice: [
              "Solve: √(x+1) + √(x-1) = 3",
              "Solve: √(2x+3) = x - 1",
              "Simplify: √(2 + √3)",
              "Solve: √x + √(x+4) = 4"
            ]
          },
          exercises: [
            "Solve: √(x+1) + √(x-1) = 3",
            "Solve: √(2x+3) = x - 1",
            "Simplify: √(2 + √3)",
            "Solve: √x + √(x+4) = 4"
          ]
        }
      ]
    },
    {
      id: "equations-inequalities",
      title: "Equations and Inequalities",
      description: "Master quadratic equations, inequalities, equations in two unknowns, and nature of roots.",
      duration: 240,
      lessons: [
        {
          id: "completing-square",
          title: "Completing the Square",
          description: "Learn to complete the square and solve quadratic equations using this method.",
          duration: 30,
          content: [
            "Understanding perfect square trinomials",
            "Process of completing the square",
            "Solving quadratic equations by completing the square",
            "Applications in finding maximum/minimum values",
            "Connection to vertex form of parabolas"
          ],
          exercises: [
            "Complete the square: x² + 6x + 4",
            "Solve: x² - 8x + 15 = 0",
            "Complete the square: 2x² + 12x - 5",
            "Find minimum value: f(x) = x² + 4x + 7"
          ]
        },
        {
          id: "quadratic-formula",
          title: "Quadratic Formula",
          description: "Use the quadratic formula to solve quadratic equations and understand its derivation.",
          duration: 30,
          content: [
            "Derivation of the quadratic formula",
            "Using the quadratic formula: x = (-b ± √(b²-4ac))/2a",
            "Solving equations with the quadratic formula",
            "When to use quadratic formula vs. factoring",
            "Real-world applications of quadratic equations"
          ],
          exercises: [
            "Solve: 2x² + 5x - 3 = 0",
            "Solve: x² - 6x + 8 = 0",
            "Solve: 3x² - 2x - 5 = 0",
            "Solve: x² + 4x + 7 = 0"
          ]
        },
        {
          id: "quadratic-inequalities",
          title: "Quadratic Inequalities",
          description: "Solve quadratic inequalities in one unknown and interpret solutions graphically.",
          duration: 40,
          content: [
            "Understanding quadratic inequalities",
            "Graphical interpretation of solutions",
            "Solving inequalities using sign analysis",
            "Critical values and test intervals",
            "Applications of quadratic inequalities"
          ],
          exercises: [
            "Solve: x² - 4x + 3 > 0",
            "Solve: 2x² + 5x - 3 ≤ 0",
            "Solve: -x² + 4x - 4 ≥ 0",
            "Solve: x² - 9 < 0"
          ]
        },
        {
          id: "simultaneous-equations",
          title: "Equations in Two Unknowns",
          description: "Solve systems where one equation is linear and the other is quadratic.",
          duration: 40,
          content: [
            "Systems of linear and quadratic equations",
            "Substitution method",
            "Graphical solutions and intersection points",
            "Applications in geometry (e.g., line-parabola intersections)",
            "Real-world problem solving"
          ],
          exercises: [
            "Solve: y = x + 1, y = x² - 3",
            "Solve: y = 2x - 1, y = x² + x - 3",
            "Solve: x + y = 5, xy = 6",
            "Find intersection: y = x², y = 2x + 3"
          ]
        },
        {
          id: "nature-roots",
          title: "Nature of Roots",
          description: "Determine the nature of roots and conditions for real, non-real, equal, unequal, rational, and irrational roots.",
          duration: 50,
          content: [
            "Discriminant: Δ = b² - 4ac",
            "Real vs. non-real roots",
            "Equal vs. unequal roots",
            "Rational vs. irrational roots",
            "Conditions for different types of roots",
            "Applications in problem solving"
          ],
          exercises: [
            "Find nature of roots: x² - 4x + 4 = 0",
            "Find nature of roots: x² + 2x + 5 = 0",
            "Find k for equal roots: x² + kx + 9 = 0",
            "Find nature of roots: 2x² - 3x - 2 = 0"
          ]
        },
        {
          id: "equations-applications",
          title: "Applications of Equations",
          description: "Apply equation solving techniques to real-world problems.",
          duration: 50,
          content: [
            "Word problems involving quadratic equations",
            "Optimization problems",
            "Motion problems",
            "Area and volume problems",
            "Business and finance applications"
          ],
          exercises: [
            "A ball is thrown upward: h = -5t² + 20t + 2. Find maximum height.",
            "A rectangle has perimeter 20cm. Find dimensions for maximum area.",
            "A product sells for $x. Revenue = x(100 - 2x). Find maximum revenue.",
            "Two numbers sum to 15. Product is 54. Find the numbers."
          ]
        }
      ]
    },
    {
      id: "trigonometry",
      title: "Trigonometry",
      description: "Master trigonometric identities, reduction formulae, and solve trigonometric equations.",
      duration: 200,
      lessons: [
        {
          id: "trig-identities",
          title: "Trigonometric Identities",
          description: "Derive and use fundamental trigonometric identities.",
          duration: 40,
          content: [
            "Derivation of tan θ = sin θ/cos θ",
            "Pythagorean identity: sin²θ + cos²θ = 1",
            "Applications of basic identities",
            "Proving trigonometric identities",
            "Simplifying trigonometric expressions"
          ],
          exercises: [
            "Prove: tan θ = sin θ/cos θ",
            "Simplify: sin²θ + cos²θ",
            "Prove: 1 + tan²θ = sec²θ",
            "Simplify: (sin θ + cos θ)² + (sin θ - cos θ)²"
          ]
        },
        {
          id: "reduction-formulae",
          title: "Reduction Formulae",
          description: "Derive and use reduction formulae to simplify trigonometric expressions.",
          duration: 60,
          content: [
            "Reduction formulae for 90° ± θ",
            "Reduction formulae for 180° ± θ",
            "Reduction formulae for 360° ± θ",
            "Reduction formulae for negative angles",
            "Applications in simplification and problem solving"
          ],
          exercises: [
            "Simplify: sin(90° - θ)",
            "Simplify: cos(180° + θ)",
            "Simplify: tan(360° - θ)",
            "Simplify: sin(-θ)"
          ]
        },
        {
          id: "trig-equations",
          title: "Trigonometric Equations",
          description: "Determine general solutions and specific interval solutions for trigonometric equations.",
          duration: 60,
          content: [
            "General solutions of trigonometric equations",
            "Solutions in specific intervals",
            "Multiple angle equations",
            "Equations involving different trigonometric functions",
            "Applications in real-world contexts"
          ],
          exercises: [
            "Solve: sin θ = 0.5",
            "Solve: cos θ = -√3/2 for θ ∈ [0°, 360°]",
            "Solve: 2 sin θ - 1 = 0",
            "Solve: tan 2θ = 1 for θ ∈ [-180°, 180°]"
          ]
        },
        {
          id: "trig-identities-advanced",
          title: "Advanced Trigonometric Identities",
          description: "Determine for which values an identity holds and prove complex identities.",
          duration: 40,
          content: [
            "Conditions for trigonometric identities",
            "Proving compound angle identities",
            "Double angle identities",
            "Half angle identities",
            "Applications in problem solving"
          ],
          exercises: [
            "Find values where sin θ = cos θ",
            "Prove: sin 2θ = 2 sin θ cos θ",
            "Prove: cos 2θ = cos²θ - sin²θ",
            "Find values where tan θ = cot θ"
          ]
        }
      ]
    },
    {
      id: "analytical-geometry",
      title: "Analytical Geometry",
      description: "Master distance, gradient, midpoints, and equations of lines in the coordinate plane.",
      duration: 120,
      lessons: [
        {
          id: "coordinate-basics",
          title: "Coordinate Geometry Basics",
          description: "Revise distance between points, gradient, and midpoints.",
          duration: 40,
          content: [
            "Distance formula: d = √[(x₂-x₁)² + (y₂-y₁)²]",
            "Gradient formula: m = (y₂-y₁)/(x₂-x₁)",
            "Midpoint formula: M = ((x₁+x₂)/2, (y₁+y₂)/2)",
            "Parallel and perpendicular lines",
            "Applications in problem solving"
          ],
          exercises: [
            "Find distance between (2,3) and (5,7)",
            "Find gradient of line through (1,2) and (4,8)",
            "Find midpoint of (3,5) and (7,9)",
            "Determine if lines are parallel: y = 2x + 1 and y = 2x - 3"
          ]
        },
        {
          id: "equation-line",
          title: "Equation of a Line",
          description: "Derive and apply equations of lines through points and parallel/perpendicular to given lines.",
          duration: 50,
          content: [
            "Equation of line through two points",
            "Equation of line through one point with given gradient",
            "Parallel and perpendicular lines",
            "Inclination of a line: m = tan θ",
            "Applications in geometry"
          ],
          exercises: [
            "Find equation through (2,3) and (5,7)",
            "Find equation through (1,2) parallel to y = 3x - 1",
            "Find equation through (4,5) perpendicular to y = 2x + 3",
            "Find inclination of line with gradient 1"
          ]
        },
        {
          id: "analytical-applications",
          title: "Applications of Analytical Geometry",
          description: "Apply analytical geometry concepts to solve complex problems.",
          duration: 30,
          content: [
            "Geometric properties using coordinates",
            "Area of triangles using coordinates",
            "Collinearity of points",
            "Distance from point to line",
            "Real-world applications"
          ],
          exercises: [
            "Show points (1,2), (3,4), (5,6) are collinear",
            "Find area of triangle with vertices (0,0), (3,0), (0,4)",
            "Find distance from (2,3) to line x + y - 1 = 0",
            "Find if point (1,1) is inside triangle with vertices (0,0), (2,0), (0,2)"
          ]
        }
      ]
    },
    {
      id: "euclidean-geometry",
      title: "Euclidean Geometry",
      description: "Master circle theorems and their applications in solving geometric problems.",
      duration: 200,
      lessons: [
        {
          id: "circle-axioms",
          title: "Circle Axioms and Tangents",
          description: "Accept established results and understand tangent properties.",
          duration: 40,
          content: [
            "Axioms from earlier grades",
            "Tangent perpendicular to radius",
            "Properties of tangents",
            "Basic circle terminology",
            "Applications in problem solving"
          ],
          exercises: [
            "Prove tangent ⊥ radius",
            "Find angle between tangent and chord",
            "Apply tangent properties",
            "Solve problems with tangents"
          ]
        },
        {
          id: "circle-theorems-1",
          title: "Circle Theorems Part 1",
          description: "Investigate and prove theorems about chords and angles at center and circumference.",
          duration: 60,
          content: [
            "Line from center ⊥ chord bisects chord",
            "Line from center to midpoint of chord ⊥ chord",
            "Perpendicular bisector passes through center",
            "Angle at center = 2 × angle at circumference",
            "Applications and problem solving"
          ],
          exercises: [
            "Prove: line from center ⊥ chord bisects chord",
            "Find length of chord given radius and distance",
            "Calculate angles using center theorem",
            "Apply theorems to solve riders"
          ]
        },
        {
          id: "circle-theorems-2",
          title: "Circle Theorems Part 2",
          description: "Investigate theorems about angles in same segment and cyclic quadrilaterals.",
          duration: 60,
          content: [
            "Angles in same segment are equal",
            "Opposite angles of cyclic quadrilateral supplementary",
            "Exterior angle = interior opposite angle",
            "Converses of theorems",
            "Applications in complex problems"
          ],
          exercises: [
            "Prove: angles in same segment equal",
            "Find angles in cyclic quadrilateral",
            "Calculate exterior angles",
            "Apply theorems to solve riders"
          ]
        },
        {
          id: "circle-theorems-3",
          title: "Circle Theorems Part 3",
          description: "Investigate theorems about tangents and solve complex riders.",
          duration: 40,
          content: [
            "Two tangents from external point are equal",
            "Angle between tangent and chord = angle in alternate segment",
            "Applications of all circle theorems",
            "Complex geometric riders",
            "Real-world applications"
          ],
          exercises: [
            "Prove: two tangents from external point equal",
            "Find angle between tangent and chord",
            "Solve complex circle riders",
            "Apply all theorems in problems"
          ]
        }
      ]
    },
    {
      id: "functions",
      title: "Functions",
      description: "Investigate the effects of parameters on various function types and understand average gradient.",
      duration: 200,
      lessons: [
        {
          id: "linear-functions",
          title: "Linear Functions",
          description: "Investigate the effect of parameters a, p, and q on linear functions.",
          duration: 40,
          content: [
            "Linear function: y = a(x + p) + q",
            "Effect of parameter a on gradient",
            "Effect of parameter p on horizontal shift",
            "Effect of parameter q on vertical shift",
            "Applications in real-world contexts"
          ],
          exercises: [
            "Sketch: y = 2(x + 1) + 3",
            "Find equation from graph",
            "Effect of doubling a",
            "Find p and q from points"
          ]
        },
        {
          id: "quadratic-functions",
          title: "Quadratic Functions",
          description: "Investigate the effect of parameters a, p, and q on quadratic functions.",
          duration: 40,
          content: [
            "Quadratic function: y = a(x + p)² + q",
            "Effect of parameter a on shape and direction",
            "Effect of parameter p on horizontal shift",
            "Effect of parameter q on vertical shift",
            "Vertex form and applications"
          ],
          exercises: [
            "Sketch: y = 2(x + 1)² + 3",
            "Find vertex from equation",
            "Effect of negative a",
            "Transform y = x²"
          ]
        },
        {
          id: "hyperbola-functions",
          title: "Hyperbola Functions",
          description: "Investigate the effect of parameters a, p, and q on hyperbola functions.",
          duration: 40,
          content: [
            "Hyperbola function: y = a/(x + p) + q",
            "Effect of parameter a on shape",
            "Effect of parameter p on horizontal asymptote",
            "Effect of parameter q on vertical asymptote",
            "Applications in real-world contexts"
          ],
          exercises: [
            "Sketch: y = 2/(x + 1) + 3",
            "Find asymptotes",
            "Effect of negative a",
            "Find equation from graph"
          ]
        },
        {
          id: "exponential-functions",
          title: "Exponential Functions",
          description: "Investigate the effect of parameters a, b, p, and q on exponential functions.",
          duration: 40,
          content: [
            "Exponential function: y = a·b^(x + p) + q",
            "Effect of parameter a on vertical scaling",
            "Effect of parameter b on growth/decay rate",
            "Effect of parameter p on horizontal shift",
            "Effect of parameter q on vertical shift"
          ],
          exercises: [
            "Sketch: y = 2·2^(x + 1) + 3",
            "Find asymptote",
            "Effect of b < 1",
            "Transform y = 2^x"
          ]
        },
        {
          id: "average-gradient",
          title: "Average Gradient",
          description: "Investigate average gradient between two points and develop intuitive understanding of gradient at a point.",
          duration: 40,
          content: [
            "Average gradient between two points",
            "Connection to secant lines",
            "Intuitive understanding of instantaneous gradient",
            "Applications in motion and rate of change",
            "Introduction to calculus concepts"
          ],
          exercises: [
            "Find average gradient: y = x² from (1,1) to (3,9)",
            "Calculate average gradient: y = 2^x from (0,1) to (2,4)",
            "Interpret average gradient",
            "Apply to real-world problems"
          ]
        }
      ]
    },
    {
      id: "trigonometry-functions",
      title: "Trigonometry Functions",
      description: "Plot and investigate trigonometric functions and their transformations.",
      duration: 150,
      lessons: [
        {
          id: "basic-trig-graphs",
          title: "Basic Trigonometric Graphs",
          description: "Plot basic graphs of sine, cosine, and tangent functions.",
          duration: 50,
          content: [
            "Point-by-point plotting of y = sin θ",
            "Point-by-point plotting of y = cos θ",
            "Point-by-point plotting of y = tan θ",
            "Domain and range of trigonometric functions",
            "Periodicity and amplitude"
          ],
          exercises: [
            "Plot y = sin θ for θ ∈ [-360°, 360°]",
            "Plot y = cos θ for θ ∈ [-360°, 360°]",
            "Plot y = tan θ for θ ∈ [-360°, 360°]",
            "Find domain and range"
          ]
        },
        {
          id: "parameter-k-effect",
          title: "Effect of Parameter k",
          description: "Investigate the effect of parameter k on trigonometric functions.",
          duration: 50,
          content: [
            "Effect of k on y = sin(kx)",
            "Effect of k on y = cos(kx)",
            "Effect of k on y = tan(kx)",
            "Period changes: period = 360°/|k|",
            "Applications in wave phenomena"
          ],
          exercises: [
            "Sketch y = sin(2x)",
            "Sketch y = cos(3x)",
            "Sketch y = tan(0.5x)",
            "Find period of y = sin(4x)"
          ]
        },
        {
          id: "parameter-p-effect",
          title: "Effect of Parameter p",
          description: "Investigate the effect of parameter p on trigonometric functions.",
          duration: 50,
          content: [
            "Effect of p on y = sin(x + p)",
            "Effect of p on y = cos(x + p)",
            "Effect of p on y = tan(x + p)",
            "Phase shifts and horizontal translations",
            "Applications in modeling periodic phenomena"
          ],
          exercises: [
            "Sketch y = sin(x + 30°)",
            "Sketch y = cos(x - 45°)",
            "Sketch y = tan(x + 60°)",
            "Find phase shift"
          ]
        },
        {
          id: "combined-parameters",
          title: "Combined Parameters",
          description: "Draw sketch graphs with multiple parameters.",
          duration: 50,
          content: [
            "Graphs of y = a sin k(x + p)",
            "Graphs of y = a cos k(x + p)",
            "Graphs of y = a tan k(x + p)",
            "Amplitude, period, and phase shift",
            "Applications in real-world modeling"
          ],
          exercises: [
            "Sketch y = 2 sin(2x + 30°)",
            "Sketch y = 3 cos(x - 45°)",
            "Find amplitude and period",
            "Model real-world phenomena"
          ]
        }
      ]
    },
    {
      id: "trigonometry-2d",
      title: "Trigonometry (2D)",
      description: "Master sine, cosine, and area rules for solving problems in two dimensions.",
      duration: 100,
      lessons: [
        {
          id: "sine-cosine-rules",
          title: "Sine and Cosine Rules",
          description: "Prove and apply the sine and cosine rules.",
          duration: 50,
          content: [
            "Sine rule: a/sin A = b/sin B = c/sin C",
            "Cosine rule: c² = a² + b² - 2ab cos C",
            "Derivation of sine rule",
            "Derivation of cosine rule",
            "When to use each rule"
          ],
          exercises: [
            "Prove sine rule",
            "Prove cosine rule",
            "Find side using sine rule",
            "Find angle using cosine rule"
          ]
        },
        {
          id: "area-rule",
          title: "Area Rule",
          description: "Prove and apply the area rule for triangles.",
          duration: 50,
          content: [
            "Area rule: Area = ½ab sin C",
            "Derivation of area rule",
            "Applications in finding areas",
            "Combining with other rules",
            "Real-world applications"
          ],
          exercises: [
            "Prove area rule",
            "Find area of triangle",
            "Apply in navigation problems",
            "Solve complex 2D problems"
          ]
        }
      ]
    },
    {
      id: "statistics",
      title: "Statistics",
      description: "Master measures of central tendency, dispersion, and data representation.",
      duration: 100,
      lessons: [
        {
          id: "measures-central-tendency",
          title: "Measures of Central Tendency and Dispersion",
          description: "Revise measures of central tendency and dispersion for grouped and ungrouped data.",
          duration: 40,
          content: [
            "Mean, median, and mode for ungrouped data",
            "Mean, median, and mode for grouped data",
            "Range, variance, and standard deviation",
            "Quartiles and percentiles",
            "Applications in data analysis"
          ],
          exercises: [
            "Calculate mean for ungrouped data",
            "Find median for grouped data",
            "Calculate standard deviation",
            "Find quartiles"
          ]
        },
        {
          id: "data-representation",
          title: "Data Representation",
          description: "Revise five number summary, box plots, histograms, and frequency polygons.",
          duration: 40,
          content: [
            "Five number summary: min, Q1, median, Q3, max",
            "Box and whisker diagrams",
            "Histograms for grouped data",
            "Frequency polygons",
            "Interpretation of graphical representations"
          ],
          exercises: [
            "Create box plot",
            "Draw histogram",
            "Plot frequency polygon",
            "Interpret data displays"
          ]
        },
        {
          id: "ogives-variance",
          title: "Ogives and Variance",
          description: "Create ogives, calculate variance, and identify outliers.",
          duration: 40,
          content: [
            "Cumulative frequency curves (ogives)",
            "Variance and standard deviation",
            "Symmetric and skewed data",
            "Identification of outliers",
            "Applications in statistical analysis"
          ],
          exercises: [
            "Draw ogive",
            "Calculate variance",
            "Identify skewness",
            "Find outliers"
          ]
        }
      ]
    },
    {
      id: "probability",
      title: "Probability",
      description: "Master probability models, Venn diagrams, independent events, and tree diagrams.",
      duration: 150,
      lessons: [
        {
          id: "probability-basics",
          title: "Probability Basics",
          description: "Revise probability models and Venn diagrams for two events.",
          duration: 40,
          content: [
            "Relative frequency vs theoretical probability",
            "Venn diagrams for two events",
            "Addition rule: P(A or B) = P(A) + P(B) - P(A and B)",
            "Mutually exclusive events",
            "Complementary events"
          ],
          exercises: [
            "Calculate relative frequency",
            "Use Venn diagrams",
            "Apply addition rule",
            "Find complementary probability"
          ]
        },
        {
          id: "three-events-venn",
          title: "Three Events Venn Diagrams",
          description: "Use Venn diagrams to solve probability problems for three events.",
          duration: 40,
          content: [
            "Venn diagrams for three events A, B, C",
            "Addition rule for three events",
            "Intersection and union of three events",
            "Complex probability problems",
            "Applications in real-world contexts"
          ],
          exercises: [
            "Draw three-event Venn diagram",
            "Calculate P(A or B or C)",
            "Find P(A and B and C)",
            "Solve complex probability problems"
          ]
        },
        {
          id: "independent-events",
          title: "Independent and Dependent Events",
          description: "Identify dependent and independent events and apply the product rule.",
          duration: 40,
          content: [
            "Independent vs dependent events",
            "Product rule for independent events",
            "Conditional probability",
            "Tree diagrams for independent events",
            "Applications in decision making"
          ],
          exercises: [
            "Identify independent events",
            "Apply product rule",
            "Calculate conditional probability",
            "Use tree diagrams"
          ]
        },
        {
          id: "tree-diagrams-contingency",
          title: "Tree Diagrams and Contingency Tables",
          description: "Use tree diagrams and contingency tables for complex probability problems.",
          duration: 30,
          content: [
            "Tree diagrams for consecutive events",
            "Contingency tables for three events",
            "Probability trees for dependent events",
            "Complex probability scenarios",
            "Real-world applications"
          ],
          exercises: [
            "Create tree diagram",
            "Use contingency table",
            "Solve sequential probability",
            "Apply to real-world problems"
          ]
        }
      ]
    },
    {
      id: "finance-growth",
      title: "Finance and Growth",
      description: "Master simple and compound growth/decay, including interest rates and exchange rates.",
      duration: 120,
      lessons: [
        {
          id: "simple-compound-growth",
          title: "Simple and Compound Growth",
          description: "Revise and apply simple and compound growth formulae.",
          duration: 40,
          content: [
            "Simple growth: A = P(1 + in)",
            "Compound growth: A = P(1 + i)^n",
            "Interest calculations",
            "Hire purchase problems",
            "Population growth and inflation"
          ],
          exercises: [
            "Calculate simple interest",
            "Find compound amount",
            "Solve hire purchase problem",
            "Calculate population growth"
          ]
        },
        {
          id: "exchange-rates",
          title: "Exchange Rates",
          description: "Understand the implications of fluctuating foreign exchange rates.",
          duration: 20,
          content: [
            "Foreign exchange rates",
            "Effects on petrol prices",
            "Impact on imports and exports",
            "Overseas travel implications",
            "Currency conversion problems"
          ],
          exercises: [
            "Convert currencies",
            "Calculate exchange rate effects",
            "Solve import/export problems",
            "Plan overseas travel budget"
          ]
        },
        {
          id: "simple-compound-decay",
          title: "Simple and Compound Decay",
          description: "Use simple and compound decay formulae for depreciation problems.",
          duration: 40,
          content: [
            "Simple decay: A = P(1 - in)",
            "Compound decay: A = P(1 - i)^n",
            "Straight line depreciation",
            "Reducing balance depreciation",
            "Applications in asset valuation"
          ],
          exercises: [
            "Calculate simple decay",
            "Find compound decay value",
            "Solve depreciation problem",
            "Compare depreciation methods"
          ]
        },
        {
          id: "nominal-effective-rates",
          title: "Nominal and Effective Rates",
          description: "Understand the effect of different periods of compound growth and decay.",
          duration: 20,
          content: [
            "Nominal interest rates",
            "Effective interest rates",
            "Different compounding periods",
            "Comparing interest rates",
            "Making informed financial decisions"
          ],
          exercises: [
            "Calculate effective rate",
            "Compare different rates",
            "Find best investment option",
            "Solve loan problems"
          ]
        }
      ]
    },
    {
      id: "number-patterns",
      title: "Number Patterns",
      description: "Master linear and quadratic number patterns, including constant second differences.",
      duration: 100,
      lessons: [
        {
          id: "linear-patterns",
          title: "Linear Number Patterns",
          description: "Revise linear number patterns and their properties.",
          duration: 30,
          content: [
            "Linear number patterns",
            "Constant first difference",
            "General term: Tn = an + b",
            "Applications in sequences",
            "Real-world linear patterns"
          ],
          exercises: [
            "Find general term of linear pattern",
            "Calculate specific terms",
            "Identify linear patterns",
            "Apply to real problems"
          ]
        },
        {
          id: "quadratic-patterns-intro",
          title: "Introduction to Quadratic Patterns",
          description: "Investigate number patterns with constant second differences.",
          duration: 35,
          content: [
            "Constant second differences",
            "Introduction to quadratic patterns",
            "Pattern recognition",
            "Relationship to quadratic functions",
            "Applications in problem solving"
          ],
          exercises: [
            "Identify quadratic patterns",
            "Find second differences",
            "Predict next terms",
            "Apply to sequences"
          ]
        },
        {
          id: "quadratic-patterns-advanced",
          title: "Quadratic Patterns Advanced",
          description: "Find general terms for quadratic number patterns.",
          duration: 35,
          content: [
            "General term: Tn = an² + bn + c",
            "Finding coefficients a, b, c",
            "Solving for specific terms",
            "Applications in modeling",
            "Complex pattern problems"
          ],
          exercises: [
            "Find general term of quadratic pattern",
            "Calculate specific terms",
            "Solve for unknown terms",
            "Model real-world patterns"
          ]
        }
      ]
    },
    {
      id: "measurement",
      title: "Measurement",
      description: "Revise and extend knowledge of volume, surface area, and dimensional changes.",
      duration: 80,
      lessons: [
        {
          id: "volume-surface-area",
          title: "Volume and Surface Area",
          description: "Revise volume and surface areas of right-prisms and cylinders.",
          duration: 40,
          content: [
            "Volume of right prisms",
            "Surface area of right prisms",
            "Volume of cylinders",
            "Surface area of cylinders",
            "Applications in real-world contexts"
          ],
          exercises: [
            "Calculate volume of prism",
            "Find surface area of cylinder",
            "Solve composite shape problems",
            "Apply to real-world objects"
          ]
        },
        {
          id: "dimensional-changes",
          title: "Dimensional Changes",
          description: "Study the effect on volume and surface areas when multiplying dimensions by constant factors.",
          duration: 40,
          content: [
            "Effect of scaling on volume",
            "Effect of scaling on surface area",
            "Scale factor relationships",
            "Volume and surface area of spheres",
            "Volume and surface area of cones",
            "Composite objects"
          ],
          exercises: [
            "Calculate scaled volume",
            "Find scaled surface area",
            "Calculate sphere volume",
            "Find cone surface area",
            "Solve composite object problems"
          ]
        }
      ]
    }
  ]
};