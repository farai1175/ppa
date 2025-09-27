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

export const grade12ChemistryTopics: Topic[] = [
  {
    id: 'representing-chemical-change',
    title: 'Representing Chemical Change',
    description: 'Balanced chemical equations and conservation principles',
    totalDuration: 35,
    lessons: [
      {
        id: 'balanced-equations',
        title: 'Balanced Chemical Equations',
        description: 'Writing and balancing chemical equations',
        duration: 35,
        content: {
          introduction: 'Chemical equations are symbolic representations of chemical reactions. They show the reactants (starting materials) and products (substances formed) in a chemical reaction. Balanced equations follow the law of conservation of mass and atoms.',
          keyPoints: [
            'Chemical equations use chemical formulas to represent reactants and products',
            'The arrow (→) separates reactants from products',
            'State symbols: (s) solid, (ℓ) liquid, (g) gas, (aq) aqueous',
            'Balanced equations have equal numbers of each type of atom on both sides',
            'Conservation of mass: total mass of reactants = total mass of products'
          ],
          examples: [
            'Example 1: Hydrogen + Oxygen → Water\n2H₂(g) + O₂(g) → 2H₂O(ℓ)',
            'Example 2: Methane combustion\nCH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(ℓ)',
            'Example 3: Iron rusting\n4Fe(s) + 3O₂(g) → 2Fe₂O₃(s)'
          ],
          practice: [
            'Balance the equation: N₂ + H₂ → NH₃',
            'Write and balance: Sodium + Water → Sodium hydroxide + Hydrogen',
            'Balance: C₃H₈ + O₂ → CO₂ + H₂O (propane combustion)'
          ]
        }
      }
    ]
  },
  {
    id: 'quantitative-aspects',
    title: 'Quantitative Aspects of Chemical Change',
    description: 'Molar volume, concentration, and stoichiometric calculations',
    totalDuration: 120,
    lessons: [
      {
        id: 'molar-volume',
        title: 'Molar Volume of Gases',
        description: 'Understanding molar volume and gas relationships',
        duration: 30,
        content: {
          introduction: 'The molar volume of a gas is the volume occupied by one mole of the gas under specific conditions of temperature and pressure. At Standard Temperature and Pressure (STP), one mole of any gas occupies 22.4 dm³.',
          keyPoints: [
            'STP conditions: 0°C (273 K) and 1 atm (101.3 kPa)',
            '1 mole of any gas = 22.4 dm³ at STP',
            'Molar volume is the same for all gases at the same T and P',
            'Volume relationships follow mole ratios in balanced equations',
            'V ∝ n (at constant T and P)'
          ],
          examples: [
            'Example 1: Volume of 2 moles of O₂ at STP\nV = 2 × 22.4 = 44.8 dm³',
            'Example 2: Moles in 67.2 dm³ of N₂ at STP\nn = 67.2 ÷ 22.4 = 3 moles',
            'Example 3: 2H₂(g) + O₂(g) → 2H₂O(g)\n2 dm³ H₂ reacts with 1 dm³ O₂ to produce 2 dm³ H₂O'
          ],
          practice: [
            'Calculate the volume of 0.5 moles of CO₂ at STP',
            'How many moles are present in 11.2 dm³ of helium gas at STP?',
            'In the reaction 2SO₂(g) + O₂(g) → 2SO₃(g), what volume of O₂ is needed to react with 44.8 dm³ of SO₂?'
          ]
        }
      },
      {
        id: 'concentration',
        title: 'Concentration of Solutions',
        description: 'Calculating molar concentration',
        duration: 25,
        content: {
          introduction: 'Concentration expresses the amount of solute dissolved in a given volume of solution. Molar concentration (molarity) is the most common unit, expressed as moles per cubic decimeter (mol·dm⁻³).',
          keyPoints: [
            'Molar concentration: c = n/V (mol·dm⁻³)',
            'n = number of moles, V = volume in dm³',
            '1 dm³ = 1000 cm³ = 1 L',
            'Concentration can also be expressed in g·dm⁻³',
            'Dilution: c₁V₁ = c₂V₂'
          ],
          examples: [
            'Example 1: 0.5 moles of NaCl in 2 dm³ solution\nc = 0.5 ÷ 2 = 0.25 mol·dm⁻³',
            'Example 2: 5.85 g NaCl in 500 cm³ solution\nn = 5.85 ÷ 58.5 = 0.1 moles\nV = 0.5 dm³\nc = 0.1 ÷ 0.5 = 0.2 mol·dm⁻³',
            'Example 3: Diluting 100 cm³ of 2 mol·dm⁻³ to 500 cm³\nc₂ = (2 × 100) ÷ 500 = 0.4 mol·dm⁻³'
          ],
          practice: [
            'Calculate the concentration of 2 moles of H₂SO₄ in 250 cm³ of solution',
            'How many grams of NaOH are needed to make 2 dm³ of 0.5 mol·dm⁻³ solution?',
            'What volume of 1 mol·dm⁻³ HCl is needed to make 500 cm³ of 0.1 mol·dm⁻³ solution?'
          ]
        }
      },
      {
        id: 'stoichiometric-calculations',
        title: 'Stoichiometric Calculations',
        description: 'Empirical formulas, percentage yield, and limiting reagents',
        duration: 40,
        content: {
          introduction: 'Stoichiometry involves quantitative relationships in chemical reactions. It includes calculating empirical and molecular formulas, percentage yield, and working with limiting reagents.',
          keyPoints: [
            'Empirical formula: simplest whole number ratio of atoms',
            'Molecular formula: actual number of atoms in molecule',
            'Percentage yield = (actual yield ÷ theoretical yield) × 100%',
            'Limiting reagent: reactant that is completely consumed',
            'Excess reagent: reactant that remains after reaction'
          ],
          examples: [
            'Example 1: Empirical formula of compound with 40% C, 6.7% H, 53.3% O\nC: 40÷12 = 3.33, H: 6.7÷1 = 6.7, O: 53.3÷16 = 3.33\nRatio 1:2:1 → CH₂O',
            'Example 2: 2Al + 3CuSO₄ → Al₂(SO₄)₃ + 3Cu\nIf 2.7g Al (0.1 mol) reacts with 48g CuSO₄ (0.2 mol)\nAl is limiting (needs 0.15 mol CuSO₄)',
            'Example 3: Percentage yield\nTheoretical: 10g, Actual: 8.5g\n% yield = (8.5÷10)×100 = 85%'
          ],
          practice: [
            'Find empirical formula: 48% C, 8% H, 44% O',
            'In 2H₂ + O₂ → 2H₂O, if 4g H₂ reacts with 32g O₂, find limiting reagent and theoretical yield',
            'A reaction has theoretical yield of 25g but actual yield is 20g. Calculate percentage yield'
          ]
        }
      },
      {
        id: 'percentage-purity',
        title: 'Percentage Purity and Composition',
        description: 'Calculating percentage purity and composition of compounds',
        duration: 25,
        content: {
          introduction: 'Percentage purity indicates how much of a sample is the desired compound, while percentage composition shows the mass percentage of each element in a compound.',
          keyPoints: [
            'Percentage purity = (mass of pure substance ÷ total mass) × 100%',
            'Percentage composition = (mass of element ÷ molar mass) × 100%',
            'Used in analysis of impure samples',
            'Important in industrial processes',
            'Helps determine quality of chemicals'
          ],
          examples: [
            'Example 1: 10g impure CaCO₃ contains 8g pure CaCO₃\n% purity = (8÷10)×100 = 80%',
            'Example 2: % composition in H₂SO₄\nH: 2÷98 × 100 = 2.04%\nS: 32÷98 × 100 = 32.65%\nO: 64÷98 × 100 = 65.31%',
            'Example 3: Seashell analysis\n5g seashell produces 2.1g CO₂\nCaCO₃ → CO₂\nMoles CO₂ = 2.1÷44 = 0.0477\nMass CaCO₃ = 0.0477 × 100 = 4.77g\n% CaCO₃ = (4.77÷5)×100 = 95.4%'
          ],
          practice: [
            '15g of impure NaCl contains 12g pure NaCl. Calculate percentage purity',
            'Calculate percentage composition of glucose (C₆H₁₂O₆)',
            'A 3g sample of limestone produces 1.32g CO₂. Calculate % CaCO₃ in limestone'
          ]
        }
      }
    ]
  },
  {
    id: 'intermolecular-forces',
    title: 'Intermolecular Forces',
    description: 'Types of intermolecular forces and their effects on physical properties',
    totalDuration: 40,
    lessons: [
      {
        id: 'types-forces',
        title: 'Types of Intermolecular Forces',
        description: 'Van der Waals forces, dipole-dipole forces, hydrogen bonding',
        duration: 25,
        content: {
          introduction: 'Intermolecular forces are attractive forces between molecules. They are weaker than intramolecular forces (chemical bonds) but significantly affect the physical properties of substances.',
          keyPoints: [
            'Van der Waals forces include London forces and dipole-dipole forces',
            'London forces: between non-polar molecules, temporary dipoles',
            'Dipole-dipole forces: between polar molecules, permanent dipoles',
            'Hydrogen bonding: special case of dipole-dipole, H bonded to N, O, or F',
            'Strength: H-bonding > dipole-dipole > London forces',
            'London forces increase with molecular size'
          ],
          examples: [
            'Example 1: London forces in non-polar molecules\nHe, Ne, Ar, CH₄, CO₂\nTemporary dipoles due to electron movement',
            'Example 2: Dipole-dipole in polar molecules\nHCl, HBr, CO, SO₂\nPermanent dipoles attract each other',
            'Example 3: Hydrogen bonding\nH₂O, NH₃, HF\nStrong intermolecular forces'
          ],
          practice: [
            'Identify the main intermolecular force in: CH₄, HCl, H₂O, CO₂',
            'Arrange in order of increasing boiling point: CH₄, C₂H₆, C₃H₈',
            'Explain why NH₃ has higher boiling point than PH₃'
          ]
        }
      },
      {
        id: 'physical-properties',
        title: 'Effects on Physical Properties',
        description: 'Boiling point, melting point, and vapor pressure',
        duration: 15,
        content: {
          introduction: 'Intermolecular forces directly influence the physical properties of substances. Stronger intermolecular forces require more energy to overcome, affecting phase changes.',
          keyPoints: [
            'Boiling point: temperature where vapor pressure = atmospheric pressure',
            'Stronger IMF → higher boiling point',
            'Melting point: temperature where solid and liquid are in equilibrium',
            'Stronger IMF → higher melting point',
            'Vapor pressure: pressure of vapor in equilibrium with liquid',
            'Stronger IMF → lower vapor pressure'
          ],
          examples: [
            'Example 1: Boiling points\nH₂O (100°C) > H₂S (-60°C)\nDue to hydrogen bonding in water',
            'Example 2: Halogens\nF₂ (-188°C) < Cl₂ (-34°C) < Br₂ (59°C) < I₂ (184°C)\nIncreasing London forces with size',
            'Example 3: Vapor pressure\nDiethyl ether > ethanol > water\nWeaker IMF in ether'
          ],
          practice: [
            'Explain why propanol has higher boiling point than propane',
            'Compare vapor pressure of hexane and octane',
            'Why does ice float on water?'
          ]
        }
      }
    ]
  },
  {
    id: 'organic-molecules',
    title: 'Organic Molecules',
    description: 'Structure, naming, and reactions of organic compounds',
    totalDuration: 120,
    lessons: [
      {
        id: 'organic-basics',
        title: 'Organic Molecular Structures',
        description: 'Functional groups, saturated and unsaturated structures',
        duration: 30,
        content: {
          introduction: 'Organic chemistry is the study of carbon-containing compounds. Carbon\'s unique ability to form four covalent bonds allows for diverse molecular structures and functional groups.',
          keyPoints: [
            'Organic molecules contain carbon atoms',
            'Functional groups determine chemical properties',
            'Saturated: only single bonds (alkanes)',
            'Unsaturated: double/triple bonds (alkenes, alkynes)',
            'Homologous series: same general formula, differ by CH₂',
            'Structural isomers: same formula, different structure'
          ],
          examples: [
            'Example 1: Functional groups\nAlkanes: C-C only\nAlkenes: C=C\nAlkynes: C≡C\nAlcohols: -OH\nCarboxylic acids: -COOH',
            'Example 2: Saturated vs unsaturated\nEthane (C₂H₆) saturated\nEthene (C₂H₄) unsaturated',
            'Example 3: Structural isomers\nButane: CH₃CH₂CH₂CH₃\n2-methylpropane: CH₃CH(CH₃)CH₃'
          ],
          practice: [
            'Identify functional groups in: CH₃CH₂OH, CH₃COOH, CH₂=CH₂',
            'Classify as saturated or unsaturated: C₃H₈, C₄H₆, C₅H₁₂',
            'Draw structural isomers of C₄H₁₀'
          ]
        }
      },
      {
        id: 'iupac-naming',
        title: 'IUPAC Naming and Formulae',
        description: 'Naming conventions for organic compounds',
        duration: 35,
        content: {
          introduction: 'IUPAC (International Union of Pure and Applied Chemistry) naming provides a systematic way to name organic compounds based on their structure.',
          keyPoints: [
            'Identify longest carbon chain (parent chain)',
            'Number from end nearest to functional group/substituent',
            'Name substituents in alphabetical order',
            'Use prefixes: di-, tri- for multiple identical groups',
            'Functional groups get priority in numbering',
            'Alkyl groups: methyl-, ethyl-, propyl-'
          ],
          examples: [
            'Example 1: Alkanes\nCH₃CH₂CH₂CH₃: butane\nCH₃CH₂CH(CH₃)CH₃: 2-methylbutane',
            'Example 2: Alkenes\nCH₂=CHCH₃: prop-1-ene\nCH₃CH=CHCH₃: but-2-ene',
            'Example 3: Substituted compounds\nCH₃CH(Cl)CH₂CH₃: 2-chlorobutane\nCH₃CH(OH)CH₃: propan-2-ol'
          ],
          practice: [
            'Name: CH₃CH₂CH(CH₃)CH₂CH₃',
            'Draw: 2,3-dimethylpentane',
            'Name: CH₃CH₂COOH',
            'Draw: but-2-yne'
          ]
        }
      },
      {
        id: 'organic-reactions',
        title: 'Organic Reactions',
        description: 'Substitution, addition, and elimination reactions',
        duration: 35,
        content: {
          introduction: 'Organic compounds undergo various types of reactions including substitution, addition, and elimination. These reactions are fundamental to organic synthesis and industrial processes.',
          keyPoints: [
            'Substitution: one atom/group replaced by another',
            'Addition: atoms added across double/triple bonds',
            'Elimination: small molecule removed, double bond formed',
            'Oxidation: gain of oxygen or loss of hydrogen',
            'Reduction: loss of oxygen or gain of hydrogen',
            'Esterification: acid + alcohol → ester + water'
          ],
          examples: [
            'Example 1: Substitution\nCH₄ + Cl₂ → CH₃Cl + HCl (halogenation)\nCH₃CH₂Br + KOH → CH₃CH₂OH + KBr (hydrolysis)',
            'Example 2: Addition\nCH₂=CH₂ + Br₂ → CH₂BrCH₂Br (halogenation)\nCH₂=CH₂ + H₂O → CH₃CH₂OH (hydration)',
            'Example 3: Elimination\nCH₃CH₂OH → CH₂=CH₂ + H₂O (dehydration)\nCH₃CH₂Br → CH₂=CH₂ + HBr (dehydrohalogenation)'
          ],
          practice: [
            'Write equation for hydrogenation of ethene',
            'Complete: CH₃CH₂OH + CH₃COOH → ?',
            'Identify reaction type: CH₃CH₃ + Cl₂ → CH₃CH₂Cl + HCl'
          ]
        }
      },
      {
        id: 'physical-properties-organic',
        title: 'Physical Properties of Organic Compounds',
        description: 'Relationship between structure and physical properties',
        duration: 20,
        content: {
          introduction: 'The physical properties of organic compounds depend on their molecular structure, including chain length, branching, and functional groups.',
          keyPoints: [
            'Boiling point increases with chain length',
            'Branching decreases boiling point',
            'Functional groups affect boiling point significantly',
            'Solubility depends on polarity and H-bonding',
            'Polar compounds dissolve in polar solvents',
            'Non-polar compounds dissolve in non-polar solvents'
          ],
          examples: [
            'Example 1: Alkane boiling points\nCH₄ (-161°C) < C₂H₆ (-88°C) < C₃H₈ (-42°C)\nIncreasing London forces',
            'Example 2: Branching effects\nButane (0°C) > 2-methylpropane (-12°C)\nLess surface area, weaker forces',
            'Example 3: Functional group effects\nEthane (-88°C) < ethanol (78°C) < ethanoic acid (118°C)\nH-bonding increases boiling point'
          ],
          practice: [
            'Arrange in order of increasing boiling point: pentane, 2-methylbutane, 2,2-dimethylpropane',
            'Explain why propan-1-ol is soluble in water but propane is not',
            'Compare boiling points of butanal and butane'
          ]
        }
      }
    ]
  },
  {
    id: 'energy-change',
    title: 'Energy and Change',
    description: 'Energy changes, reaction rates, and chemical equilibrium',
    totalDuration: 95,
    lessons: [
      {
        id: 'energy-reactions',
        title: 'Energy Changes in Reactions',
        description: 'Exothermic and endothermic reactions, activation energy',
        duration: 35,
        content: {
          introduction: 'Chemical reactions involve energy changes. Energy can be absorbed (endothermic) or released (exothermic) during chemical reactions.',
          keyPoints: [
            'Heat of reaction (ΔH): energy absorbed or released',
            'Exothermic: ΔH < 0, energy released',
            'Endothermic: ΔH > 0, energy absorbed',
            'Activation energy: minimum energy for reaction to occur',
            'Activated complex: unstable transition state',
            'Catalysts lower activation energy'
          ],
          examples: [
            'Example 1: Exothermic reactions\nCombustion: CH₄ + 2O₂ → CO₂ + 2H₂O ΔH = -890 kJ/mol\nNeutralization: HCl + NaOH → NaCl + H₂O ΔH = -57 kJ/mol',
            'Example 2: Endothermic reactions\nDecomposition: 2H₂O → 2H₂ + O₂ ΔH = +572 kJ/mol\nPhotosynthesis: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ ΔH = +2800 kJ/mol',
            'Example 3: Activation energy\nN₂ + 3H₂ → 2NH₃\nHigh activation energy, needs catalyst'
          ],
          practice: [
            'Classify as exo/endothermic: combustion, photosynthesis, freezing, melting',
            'Draw energy diagram for exothermic reaction with catalyst',
            'Explain why some reactions need heat to start'
          ]
        }
      },
      {
        id: 'reaction-rates',
        title: 'Rate and Extent of Reaction',
        description: 'Factors affecting reaction rates and collision theory',
        duration: 35,
        content: {
          introduction: 'Reaction rate is the change in concentration of reactants or products per unit time. Several factors affect how fast reactions occur.',
          keyPoints: [
            'Rate = Δc/Δt (mol·dm⁻³·s⁻¹)',
            'Factors: nature, surface area, concentration, temperature, catalyst',
            'Collision theory: particles must collide with sufficient energy',
            'Higher temperature → more energetic collisions',
            'Catalyst provides alternative pathway with lower Ea',
            'Maxwell-Boltzmann distribution shows energy distribution'
          ],
          examples: [
            'Example 1: Rate calculation\n[HCl] changes from 0.5 to 0.3 mol·dm⁻³ in 10 seconds\nRate = (0.5-0.3)/10 = 0.02 mol·dm⁻³·s⁻¹',
            'Example 2: Surface area effect\nPowdered Zn reacts faster with HCl than granulated Zn',
            'Example 3: Temperature effect\nReaction at 50°C is faster than at 25°C',
            'Example 4: Catalyst effect\nMnO₂ speeds up decomposition of H₂O₂'
          ],
          practice: [
            'Calculate rate if [A] decreases from 0.8 to 0.2 mol·dm⁻³ in 20 s',
            'Explain why increasing concentration increases reaction rate',
            'How does a catalyst affect activation energy?'
          ]
        }
      },
      {
        id: 'chemical-equilibrium',
        title: 'Chemical Equilibrium',
        description: 'Equilibrium principles and Le Chatelier\'s principle',
        duration: 25,
        content: {
          introduction: 'Chemical equilibrium is a dynamic state where the rate of the forward reaction equals the rate of the reverse reaction. The system appears static but molecular processes continue.',
          keyPoints: [
            'Dynamic equilibrium: forward rate = reverse rate',
            'Closed system required for equilibrium',
            'Equilibrium constant Kc = [products]/[reactants]',
            'Le Chatelier\'s principle: system opposes disturbance',
            'Factors: concentration, pressure (gases), temperature',
            'Catalyst speeds up attainment but doesn\'t change position'
          ],
          examples: [
            'Example 1: N₂ + 3H₂ ⇌ 2NH₃\nKc = [NH₃]²/([N₂][H₂]³)',
            'Example 2: Le Chatelier\'s principle\nN₂ + 3H₂ ⇌ 2NH₃ ΔH = -92 kJ/mol\nIncrease pressure: shifts right (fewer moles)\nIncrease temperature: shifts left (endothermic)',
            'Example 3: Concentration effect\nFe³⁺ + SCN⁻ ⇌ FeSCN²⁺\nAdd Fe³⁺: equilibrium shifts right, more red color'
          ],
          practice: [
            'Write Kc expression for: 2SO₂ + O₂ ⇌ 2SO₃',
            'Predict effect of increasing pressure on: N₂O₄ ⇌ 2NO₂',
            'Explain what happens when temperature increases for exothermic reaction'
          ]
        }
      }
    ]
  },
  {
    id: 'acids-bases',
    title: 'Acids and Bases',
    description: 'Acid-base theories, reactions, and pH calculations',
    totalDuration: 100,
    lessons: [
      {
        id: 'acid-base-theories',
        title: 'Acid-Base Theories',
        description: 'Arrhenius and Lowry-Brønsted theories',
        duration: 25,
        content: {
          introduction: 'Different theories help us understand acids and bases. The Arrhenius theory focuses on ions in solution, while the Lowry-Brønsted theory focuses on proton transfer.',
          keyPoints: [
            'Arrhenius: acids produce H⁺, bases produce OH⁻ in water',
            'Lowry-Brønsted: acids donate H⁺, bases accept H⁺',
            'Strong acids/bases: complete ionization',
            'Weak acids/bases: partial ionization',
            'Concentrated vs dilute: amount of solute',
            'Ampholytes: can act as acid or base (e.g., H₂O)'
          ],
          examples: [
            'Example 1: Arrhenius acids\nHCl → H⁺ + Cl⁻\nH₂SO₄ → 2H⁺ + SO₄²⁻',
            'Example 2: Arrhenius bases\nNaOH → Na⁺ + OH⁻\nNH₃ + H₂O → NH₄⁺ + OH⁻',
            'Example 3: Lowry-Brønsted\nHCl + NH₃ → NH₄⁺ + Cl⁻\nHCl (acid) donates H⁺ to NH₃ (base)',
            'Example 4: Water as ampholyte\nH₂O + HCl → H₃O⁺ + Cl⁻ (water as base)\nH₂O + NH₃ → NH₄⁺ + OH⁻ (water as acid)'
          ],
          practice: [
            'Classify as acid/base according to both theories: HNO₃, KOH, NH₃',
            'Identify conjugate acid-base pairs in: H₂SO₄ + H₂O → H₃O⁺ + HSO₄⁻',
            'Explain difference between strong and weak acids'
          ]
        }
      },
      {
        id: 'acid-base-reactions',
        title: 'Acid-Base Reactions',
        description: 'Reactions, hydrolysis, and titrations',
        duration: 40,
        content: {
          introduction: 'Acid-base reactions involve proton transfer and are fundamental to many chemical processes. They include neutralization, hydrolysis, and titration reactions.',
          keyPoints: [
            'Neutralization: acid + base → salt + water',
            'Hydrolysis: salt + water → acid + base',
            'Titration: determining concentration using standard solution',
            'Equivalence point: stoichiometrically equal amounts',
            'Endpoint: indicator color change',
            'Indicators: methyl orange, phenolphthalein, bromothymol blue'
          ],
          examples: [
            'Example 1: Neutralization reactions\nHCl + NaOH → NaCl + H₂O\nH₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O\nCH₃COOH + NaOH → CH₃COONa + H₂O',
            'Example 2: Hydrolysis\nCH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻ (basic)\nNH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺ (acidic)',
            'Example 3: Titration calculation\n25 cm³ NaOH of unknown concentration\nRequires 18.5 cm³ of 0.1 mol·dm⁻³ HCl\nMoles HCl = 0.0185 × 0.1 = 0.00185\nMoles NaOH = 0.00185\n[NaOH] = 0.00185 ÷ 0.025 = 0.074 mol·dm⁻³'
          ],
          practice: [
            'Write equation for: HNO₃ + KOH → ?',
            'Calculate concentration of 20 cm³ H₂SO₄ that neutralizes 30 cm³ of 0.5 mol·dm⁻³ NaOH',
            'Explain why sodium ethanoate solution is basic'
          ]
        }
      },
      {
        id: 'ph-scale',
        title: 'pH and the pH Scale',
        description: 'pH calculations and applications',
        duration: 35,
        content: {
          introduction: 'The pH scale is a measure of the acidity or alkalinity of a solution. It ranges from 0 to 14, with 7 being neutral. pH is calculated from the hydrogen ion concentration.',
          keyPoints: [
            'pH = -log[H₃O⁺]',
            'pH < 7: acidic, pH = 7: neutral, pH > 7: basic',
            'Kw = [H₃O⁺][OH⁻] = 1 × 10⁻¹⁴ at 25°C',
            'pOH = -log[OH⁻]',
            'pH + pOH = 14',
            'Strong acids: [H₃O⁺] = concentration of acid',
            'Strong bases: [OH⁻] = concentration of base'
          ],
          examples: [
            'Example 1: pH of strong acid\n[HCl] = 0.01 mol·dm⁻³\n[H₃O⁺] = 0.01 = 10⁻²\npH = -log(10⁻²) = 2',
            'Example 2: pH of strong base\n[NaOH] = 0.001 mol·dm⁻³\n[OH⁻] = 0.001 = 10⁻³\npOH = 3, pH = 11',
            'Example 3: From pH to concentration\npH = 3.5\n[H₃O⁺] = 10⁻³·⁵ = 3.16 × 10⁻⁴ mol·dm⁻³'
          ],
          practice: [
            'Calculate pH of 0.0001 mol·dm⁻³ HNO₃',
            'Find [H₃O⁺] in solution with pH = 8.2',
            'Calculate pH of 0.05 mol·dm⁻³ KOH'
          ]
        }
      }
    ]
  },
  {
    id: 'electrochemical',
    title: 'Electrochemical Reactions',
    description: 'Galvanic cells, electrolysis, and applications',
    totalDuration: 100,
    lessons: [
      {
        id: 'galvanic-cells',
        title: 'Galvanic Cells',
        description: 'Principles of electrochemical cells and redox reactions',
        duration: 50,
        content: {
          introduction: 'Galvanic cells convert chemical energy to electrical energy through spontaneous redox reactions. They consist of two half-cells connected by a salt bridge.',
          keyPoints: [
            'Oxidation: loss of electrons (increase in oxidation number)',
            'Reduction: gain of electrons (decrease in oxidation number)',
            'Anode: oxidation occurs, cathode: reduction occurs',
            'Salt bridge: maintains electrical neutrality',
            'Cell potential: E°cell = E°cathode - E°anode',
            'Positive E°cell indicates spontaneous reaction',
            'Cell notation: Zn|Zn²⁺||Cu²⁺|Cu'
          ],
          examples: [
            'Example 1: Daniell cell\nZn + Cu²⁺ → Zn²⁺ + Cu\nAnode: Zn → Zn²⁺ + 2e⁻ (oxidation)\nCathode: Cu²⁺ + 2e⁻ → Cu (reduction)\nCell notation: Zn|Zn²⁺||Cu²⁺|Cu',
            'Example 2: Calculating E°cell\nZn²⁺/Zn: -0.76 V, Cu²⁺/Cu: +0.34 V\nE°cell = 0.34 - (-0.76) = +1.10 V',
            'Example 3: Identifying processes\n2Ag⁺ + Cu → 2Ag + Cu²⁺\nOxidation: Cu → Cu²⁺ + 2e⁻\nReduction: 2Ag⁺ + 2e⁻ → 2Ag'
          ],
          practice: [
            'Identify oxidation and reduction in: 2Al + 3Cu²⁺ → 2Al³⁺ + 3Cu',
            'Calculate E°cell for: Mg|Mg²⁺||Ag⁺|Ag\nMg²⁺/Mg: -2.37 V, Ag⁺/Ag: +0.80 V',
            'Write cell notation for: Zn + 2Ag⁺ → Zn²⁺ + 2Ag'
          ]
        }
      },
      {
        id: 'electrolytic-cells',
        title: 'Electrolytic Cells',
        description: 'Electrolysis and its applications',
        duration: 50,
        content: {
          introduction: 'Electrolytic cells use electrical energy to drive non-spontaneous redox reactions. They are used in electroplating, refining metals, and various industrial processes.',
          keyPoints: [
            'Electrical energy → chemical energy',
            'Anode is positive, cathode is negative',
            'Oxidation at anode, reduction at cathode',
            'Applications: electroplating, refining, decomposition',
            'Faraday\'s laws relate charge to amount of substance',
            'Overpotential can affect which reactions occur'
          ],
          examples: [
            'Example 1: Electrolysis of CuCl₂\nAnode: 2Cl⁻ → Cl₂ + 2e⁻\nCathode: Cu²⁺ + 2e⁻ → Cu\nOverall: CuCl₂ → Cu + Cl₂',
            'Example 2: Electroplating\nObject to be plated at cathode\nMetal ion reduced at object surface\nExample: Fe spoon with Ag\nCathode: Ag⁺ + e⁻ → Ag\nAnode: Ag → Ag⁺ + e⁻',
            'Example 3: Copper refining\nImpure Cu anode, pure Cu cathode\nAnode: Cu → Cu²⁺ + 2e⁻\nCathode: Cu²⁺ + 2e⁻ → Cu\nImpurities fall as anode mud'
          ],
          practice: [
            'Write half-reactions for electrolysis of NaCl(aq)',
            'Explain how electroplating works with example',
            'Describe electrolysis of concentrated NaCl solution'
          ]
        }
      }
    ]
  }
]