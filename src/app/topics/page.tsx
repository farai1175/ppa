'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Clock, CheckCircle, Play } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { grade10MathematicsTopics } from '@/data/grade10-mathematics-data';
import { grade11MathematicsData } from '@/data/grade11-mathematics-data';
import { grade12MathematicsData } from '@/data/grade12-mathematics-data';
import { grade12ChemistryTopics } from '@/data/grade12-chemistry-data';

// Sample topics data for different subjects and grades
const topicsData: { [key: string]: { [key: string]: any[] } } = {
  mathematics: {
    '8': [
      { id: 'algebra-basics', title: 'Algebra Basics', description: 'Introduction to variables and expressions', duration: '15 min', lessons: 4, completed: 0 },
      { id: 'geometry-intro', title: 'Geometry Introduction', description: 'Basic shapes and their properties', duration: '20 min', lessons: 5, completed: 0 },
      { id: 'number-systems', title: 'Number Systems', description: 'Understanding different types of numbers', duration: '18 min', lessons: 3, completed: 0 },
      { id: 'fractions-decimals', title: 'Fractions & Decimals', description: 'Working with fractions and decimal numbers', duration: '25 min', lessons: 6, completed: 0 },
      { id: 'basic-statistics', title: 'Basic Statistics', description: 'Introduction to data and graphs', duration: '22 min', lessons: 4, completed: 0 }
    ],
    '9': [
      { id: 'linear-equations', title: 'Linear Equations', description: 'Solving linear equations and inequalities', duration: '20 min', lessons: 5, completed: 0 },
      { id: 'coordinate-geometry', title: 'Coordinate Geometry', description: 'Working with coordinates and graphs', duration: '25 min', lessons: 6, completed: 0 },
      { id: 'exponents', title: 'Exponents and Roots', description: 'Understanding exponents and square roots', duration: '18 min', lessons: 4, completed: 0 },
      { id: 'probability', title: 'Probability Basics', description: 'Introduction to probability concepts', duration: '22 min', lessons: 5, completed: 0 },
      { id: 'measurement', title: 'Measurement', description: 'Units of measurement and conversions', duration: '20 min', lessons: 4, completed: 0 }
    ],
    '10': [
      { id: 'quadratic-equations', title: 'Quadratic Equations', description: 'Solving quadratic equations', duration: '25 min', lessons: 6, completed: 0 },
      { id: 'trigonometry', title: 'Trigonometry', description: 'Introduction to trigonometric functions', duration: '30 min', lessons: 7, completed: 0 },
      { id: 'functions', title: 'Functions', description: 'Understanding mathematical functions', duration: '28 min', lessons: 6, completed: 0 },
      { id: 'analytical-geometry', title: 'Analytical Geometry', description: 'Advanced coordinate geometry', duration: '32 min', lessons: 8, completed: 0 },
      { id: 'statistics-probability', title: 'Statistics & Probability', description: 'Advanced statistical concepts', duration: '30 min', lessons: 7, completed: 0 }
    ],
    '11': [
      { id: 'advanced-algebra', title: 'Advanced Algebra', description: 'Polynomials and rational expressions', duration: '30 min', lessons: 7, completed: 0 },
      { id: 'advanced-trigonometry', title: 'Advanced Trigonometry', description: 'Trigonometric identities and equations', duration: '32 min', lessons: 8, completed: 0 },
      { id: 'calculus-intro', title: 'Calculus Introduction', description: 'Limits and derivatives basics', duration: '35 min', lessons: 9, completed: 0 },
      { id: 'sequences-series', title: 'Sequences & Series', description: 'Arithmetic and geometric sequences', duration: '28 min', lessons: 6, completed: 0 },
      { id: 'advanced-statistics', title: 'Advanced Statistics', description: 'Statistical analysis and interpretation', duration: '30 min', lessons: 7, completed: 0 }
    ],
    '12': [
      { id: 'differential-calculus', title: 'Differential Calculus', description: 'Derivatives and applications', duration: '35 min', lessons: 9, completed: 0 },
      { id: 'integral-calculus', title: 'Integral Calculus', description: 'Integration and applications', duration: '35 min', lessons: 9, completed: 0 },
      { id: 'vectors', title: 'Vectors', description: 'Vector algebra and applications', duration: '30 min', lessons: 7, completed: 0 },
      { id: 'probability-distributions', title: 'Probability Distributions', description: 'Advanced probability concepts', duration: '32 min', lessons: 8, completed: 0 },
      { id: 'matrices', title: 'Matrices', description: 'Matrix operations and applications', duration: '28 min', lessons: 6, completed: 0 }
    ]
  },
  'mathematical-literacy': {
    '8': [
      { id: 'numbers-daily', title: 'Numbers in Daily Life', description: 'Using numbers in everyday situations', duration: '15 min', lessons: 4, completed: 0 },
      { id: 'money-management', title: 'Money Management', description: 'Basic financial concepts', duration: '20 min', lessons: 5, completed: 0 },
      { id: 'measurement-practical', title: 'Practical Measurement', description: 'Measurement in real life', duration: '18 min', lessons: 4, completed: 0 },
      { id: 'data-interpretation', title: 'Data Interpretation', description: 'Reading and understanding data', duration: '22 min', lessons: 5, completed: 0 },
      { id: 'patterns-relationships', title: 'Patterns & Relationships', description: 'Identifying patterns in daily life', duration: '20 min', lessons: 4, completed: 0 }
    ],
    '9': [
      { id: 'budgeting', title: 'Budgeting', description: 'Creating and managing budgets', duration: '25 min', lessons: 6, completed: 0 },
      { id: 'interest-rates', title: 'Interest Rates', description: 'Understanding interest and loans', duration: '22 min', lessons: 5, completed: 0 },
      { id: 'maps-directions', title: 'Maps & Directions', description: 'Reading maps and giving directions', duration: '20 min', lessons: 4, completed: 0 },
      { id: 'statistical-reports', title: 'Statistical Reports', description: 'Understanding statistical information', duration: '25 min', lessons: 6, completed: 0 },
      { id: 'scale-models', title: 'Scale Models', description: 'Working with scale drawings', duration: '18 min', lessons: 4, completed: 0 }
    ],
    '10': [
      { id: 'financial-planning', title: 'Financial Planning', description: 'Personal financial management', duration: '30 min', lessons: 7, completed: 0 },
      { id: 'taxation', title: 'Taxation', description: 'Understanding taxes and deductions', duration: '28 min', lessons: 6, completed: 0 },
      { id: 'data-analysis', title: 'Data Analysis', description: 'Analyzing real-world data', duration: '32 min', lessons: 8, completed: 0 },
      { id: 'measurement-applications', title: 'Measurement Applications', description: 'Advanced measurement concepts', duration: '25 min', lessons: 6, completed: 0 },
      { id: 'probability-daily', title: 'Probability in Daily Life', description: 'Practical probability concepts', duration: '22 min', lessons: 5, completed: 0 }
    ],
    '11': [
      { id: 'investments', title: 'Investments', description: 'Understanding investment options', duration: '32 min', lessons: 8, completed: 0 },
      { id: 'loans-credit', title: 'Loans & Credit', description: 'Managing loans and credit', duration: '30 min', lessons: 7, completed: 0 },
      { id: 'data-presentation', title: 'Data Presentation', description: 'Presenting data effectively', duration: '28 min', lessons: 6, completed: 0 },
      { id: 'technical-drawings', title: 'Technical Drawings', description: 'Reading technical diagrams', duration: '25 min', lessons: 5, completed: 0 },
      { id: 'risk-assessment', title: 'Risk Assessment', description: 'Evaluating financial risks', duration: '26 min', lessons: 6, completed: 0 }
    ],
    '12': [
      { id: 'advanced-finance', title: 'Advanced Finance', description: 'Complex financial concepts', duration: '35 min', lessons: 9, completed: 0 },
      { id: 'business-math', title: 'Business Mathematics', description: 'Math in business contexts', duration: '32 min', lessons: 8, completed: 0 },
      { id: 'statistical-modeling', title: 'Statistical Modeling', description: 'Creating statistical models', duration: '30 min', lessons: 7, completed: 0 },
      { id: 'project-planning', title: 'Project Planning', description: 'Mathematical project planning', duration: '28 min', lessons: 6, completed: 0 },
      { id: 'decision-making', title: 'Decision Making', description: 'Mathematical decision making', duration: '25 min', lessons: 5, completed: 0 }
    ]
  },
  chemistry: {
    '8': [
      { id: 'matter-properties', title: 'Matter & Properties', description: 'Introduction to matter and its properties', duration: '20 min', lessons: 5, completed: 0 },
      { id: 'atoms-elements', title: 'Atoms & Elements', description: 'Basic atomic structure', duration: '18 min', lessons: 4, completed: 0 },
      { id: 'compounds-mixtures', title: 'Compounds & Mixtures', description: 'Understanding chemical combinations', duration: '22 min', lessons: 5, completed: 0 },
      { id: 'chemical-reactions', title: 'Chemical Reactions', description: 'Introduction to reactions', duration: '25 min', lessons: 6, completed: 0 },
      { id: 'acids-bases', title: 'Acids & Bases', description: 'Understanding pH and indicators', duration: '20 min', lessons: 4, completed: 0 }
    ],
    '9': [
      { id: 'atomic-structure', title: 'Atomic Structure', description: 'Detailed atomic models', duration: '25 min', lessons: 6, completed: 0 },
      { id: 'periodic-table', title: 'Periodic Table', description: 'Understanding periodic trends', duration: '28 min', lessons: 7, completed: 0 },
      { id: 'chemical-bonding', title: 'Chemical Bonding', description: 'Types of chemical bonds', duration: '30 min', lessons: 7, completed: 0 },
      { id: 'reaction-types', title: 'Reaction Types', description: 'Different types of reactions', duration: '26 min', lessons: 6, completed: 0 },
      { id: 'stoichiometry', title: 'Stoichiometry', description: 'Chemical calculations', duration: '32 min', lessons: 8, completed: 0 }
    ],
    '10': [
      { id: 'matter-classification', title: 'Matter and Classification', description: 'Understanding matter and its classification', duration: '25 min', lessons: 6, completed: 0 },
      { id: 'states-matter', title: 'States of Matter and KMT', description: 'States of matter and kinetic molecular theory', duration: '28 min', lessons: 7, completed: 0 },
      { id: 'atomic-structure', title: 'Atomic Structure', description: 'Structure of atoms and subatomic particles', duration: '30 min', lessons: 7, completed: 0 },
      { id: 'periodic-table', title: 'Periodic Table', description: 'Organization and trends in the periodic table', duration: '28 min', lessons: 6, completed: 0 },
      { id: 'chemical-bonding', title: 'Chemical Bonding', description: 'Types of chemical bonds and bonding theories', duration: '32 min', lessons: 8, completed: 0 },
      { id: 'physical-chemical-change', title: 'Physical and Chemical Change', description: 'Distinguishing between physical and chemical changes', duration: '26 min', lessons: 6, completed: 0 }
    ],
    '11': [
      { id: 'atomic-combinations', title: 'Atomic Combinations: Molecular Structure', description: 'Chemical bonds, Lewis diagrams, and molecular structure', duration: '35 min', lessons: 8, completed: 0 },
      { id: 'intermolecular-forces', title: 'Intermolecular Forces', description: 'Van der Waals forces and their effects on physical properties', duration: '30 min', lessons: 7, completed: 0 },
      { id: 'ideal-gases', title: 'Ideal Gases and Thermal Properties', description: 'Kinetic theory, gas laws, and thermal properties', duration: '32 min', lessons: 8, completed: 0 },
      { id: 'representing-change', title: 'Representing Chemical Change', description: 'Mole concept, stoichiometry, and chemical calculations', duration: '35 min', lessons: 9, completed: 0 },
      { id: 'energy-change', title: 'Energy and Chemical Change', description: 'Heat of reaction, exothermic and endothermic reactions', duration: '28 min', lessons: 6, completed: 0 },
      { id: 'reaction-types', title: 'Types of Reaction', description: 'Acid-base reactions and redox reactions', duration: '38 min', lessons: 10, completed: 0 }
    ],
    '12': [
      { id: 'advanced-organic', title: 'Advanced Organic Chemistry', description: 'Complex organic reactions', duration: '38 min', lessons: 10, completed: 0 },
      { id: 'analytical-chemistry', title: 'Analytical Chemistry', description: 'Chemical analysis techniques', duration: '35 min', lessons: 9, completed: 0 },
      { id: 'nuclear-chemistry', title: 'Nuclear Chemistry', description: 'Radioactivity and nuclear reactions', duration: '32 min', lessons: 8, completed: 0 },
      { id: 'environmental-chemistry', title: 'Environmental Chemistry', description: 'Chemistry and environment', duration: '30 min', lessons: 7, completed: 0 },
      { id: 'industrial-chemistry', title: 'Industrial Chemistry', description: 'Chemical industry processes', duration: '35 min', lessons: 9, completed: 0 }
    ]
  },
  physics: {
    '8': [
      { id: 'motion-forces', title: 'Motion & Forces', description: 'Introduction to motion and forces', duration: '20 min', lessons: 5, completed: 0 },
      { id: 'energy', title: 'Energy', description: 'Forms of energy and conversions', duration: '18 min', lessons: 4, completed: 0 },
      { id: 'waves-sound', title: 'Waves & Sound', description: 'Understanding waves and sound', duration: '22 min', lessons: 5, completed: 0 },
      { id: 'light-optics', title: 'Light & Optics', description: 'Properties of light and optics', duration: '25 min', lessons: 6, completed: 0 },
      { id: 'electricity-basics', title: 'Electricity Basics', description: 'Introduction to electricity', duration: '20 min', lessons: 4, completed: 0 }
    ],
    '9': [
      { id: 'mechanics', title: 'Mechanics', description: 'Laws of motion and mechanics', duration: '25 min', lessons: 6, completed: 0 },
      { id: 'energy-momentum', title: 'Energy & Momentum', description: 'Energy conservation and momentum', duration: '28 min', lessons: 7, completed: 0 },
      { id: 'wave-motion', title: 'Wave Motion', description: 'Advanced wave concepts', duration: '26 min', lessons: 6, completed: 0 },
      { id: 'electric-circuits', title: 'Electric Circuits', description: 'Understanding electric circuits', duration: '30 min', lessons: 7, completed: 0 },
      { id: 'magnetism', title: 'Magnetism', description: 'Magnetic fields and applications', duration: '24 min', lessons: 5, completed: 0 }
    ],
    '10': [
      { id: 'vectors-scalars', title: 'Vectors and Scalars', description: 'Understanding vector and scalar quantities', duration: '25 min', lessons: 6, completed: 0 },
      { id: 'motion-one-dimension', title: 'Motion in One Dimension', description: 'Linear motion and displacement', duration: '28 min', lessons: 7, completed: 0 },
      { id: 'instantaneous-speed-velocity', title: 'Instantaneous Speed and Velocity', description: 'Equations of motion and instantaneous values', duration: '30 min', lessons: 7, completed: 0 },
      { id: 'energy', title: 'Energy', description: 'Forms of energy and energy conservation', duration: '28 min', lessons: 6, completed: 0 },
      { id: 'transverse-pulses', title: 'Transverse Pulses', description: 'Pulses on strings and springs', duration: '22 min', lessons: 5, completed: 0 },
      { id: 'transverse-waves', title: 'Transverse Waves', description: 'Properties and behavior of transverse waves', duration: '25 min', lessons: 6, completed: 0 },
      { id: 'longitudinal-waves', title: 'Longitudinal Waves', description: 'Compression waves and sound propagation', duration: '24 min', lessons: 5, completed: 0 },
      { id: 'sound-waves', title: 'Sound Waves', description: 'Properties and applications of sound', duration: '26 min', lessons: 6, completed: 0 },
      { id: 'electromagnetic-radiation', title: 'Electromagnetic Radiation', description: 'EM spectrum and wave properties', duration: '30 min', lessons: 7, completed: 0 },
      { id: 'electrostatics', title: 'Electrostatics', description: 'Electric charges and fields', duration: '28 min', lessons: 6, completed: 0 },
      { id: 'electric-circuits', title: 'Electric Circuits', description: 'Current, voltage, and resistance', duration: '32 min', lessons: 8, completed: 0 }
    ],
    '11': [
      { id: 'vectors-two-dimensions', title: 'Vectors in Two Dimensions', description: 'Resultant of vectors and resolution of vectors', duration: '35 min', lessons: 9, completed: 0 },
      { id: 'newtons-laws', title: 'Newton\'s Laws', description: 'Forces, friction, and applications of Newton\'s laws', duration: '40 min', lessons: 10, completed: 0 },
      { id: 'universal-gravitation', title: 'Universal Gravitation', description: 'Newton\'s law of universal gravitation and weight', duration: '30 min', lessons: 7, completed: 0 },
      { id: 'electrostatics', title: 'Electrostatics', description: 'Coulomb\'s law and electric fields', duration: '35 min', lessons: 9, completed: 0 },
      { id: 'electric-circuits', title: 'Electric Circuits', description: 'Ohm\'s law, power, and internal resistance', duration: '38 min', lessons: 10, completed: 0 },
      { id: 'electromagnetism', title: 'Electromagnetism', description: 'Magnetic fields and Faraday\'s law', duration: '32 min', lessons: 8, completed: 0 }
    ],
    '12': [
      { id: 'newtons-laws', title: 'Newton\'s Laws and Applications', description: 'Forces, friction, Newton\'s laws, and universal gravitation', duration: '40 min', lessons: 10, completed: 0 },
      { id: 'momentum-impulse', title: 'Momentum and Impulse', description: 'Linear momentum, impulse, conservation of momentum, and collisions', duration: '35 min', lessons: 8, completed: 0 },
      { id: 'vertical-projectile', title: 'Vertical Projectile Motion', description: 'Free fall, projectile motion, and motion graphs', duration: '30 min', lessons: 7, completed: 0 },
      { id: 'work-energy-power', title: 'Work, Energy and Power', description: 'Work-energy theorem, conservation of energy, and power calculations', duration: '35 min', lessons: 9, completed: 0 },
      { id: 'doppler-effect', title: 'Doppler Effect', description: 'Sound and light Doppler effect, red shifts, and universe expansion', duration: '25 min', lessons: 6, completed: 0 },
      { id: 'electrostatics', title: 'Electrostatics', description: 'Coulomb\'s law, electric fields, and field calculations', duration: '30 min', lessons: 7, completed: 0 },
      { id: 'electric-circuits', title: 'Electric Circuits', description: 'Ohm\'s law, power, internal resistance, and circuit analysis', duration: '35 min', lessons: 9, completed: 0 },
      { id: 'electrodynamics', title: 'Electrodynamics', description: 'Generators, motors, and alternating current', duration: '30 min', lessons: 7, completed: 0 },
      { id: 'photoelectric-effect', title: 'Photoelectric Effect and Spectra', description: 'Photoelectric effect, emission and absorption spectra', duration: '28 min', lessons: 6, completed: 0 }
    ]
  },
  'life-sciences': {
    '8': [
      { id: 'cell-structure', title: 'Cell Structure', description: 'Introduction to cells', duration: '20 min', lessons: 5, completed: 0 },
      { id: 'tissues-organs', title: 'Tissues & Organs', description: 'Organization of life', duration: '18 min', lessons: 4, completed: 0 },
      { id: 'human-systems', title: 'Human Body Systems', description: 'Major body systems', duration: '25 min', lessons: 6, completed: 0 },
      { id: 'plant-structure', title: 'Plant Structure', description: 'Plant parts and functions', duration: '22 min', lessons: 5, completed: 0 },
      { id: 'ecology-basics', title: 'Ecology Basics', description: 'Introduction to ecology', duration: '20 min', lessons: 4, completed: 0 }
    ],
    '9': [
      { id: 'cell-processes', title: 'Cell Processes', description: 'Cell division and metabolism', duration: '25 min', lessons: 6, completed: 0 },
      { id: 'genetics-basics', title: 'Genetics Basics', description: 'Introduction to genetics', duration: '28 min', lessons: 7, completed: 0 },
      { id: 'human-physiology', title: 'Human Physiology', description: 'Advanced body systems', duration: '30 min', lessons: 7, completed: 0 },
      { id: 'plant-physiology', title: 'Plant Physiology', description: 'Plant functions and processes', duration: '26 min', lessons: 6, completed: 0 },
      { id: 'ecosystems', title: 'Ecosystems', description: 'Ecosystem structure and function', duration: '24 min', lessons: 5, completed: 0 }
    ],
    '10': [
      { id: 'molecular-biology', title: 'Molecular Biology', description: 'DNA and protein synthesis', duration: '32 min', lessons: 8, completed: 0 },
      { id: 'genetics-advanced', title: 'Advanced Genetics', description: 'Inheritance patterns', duration: '30 min', lessons: 7, completed: 0 },
      { id: 'evolution', title: 'Evolution', description: 'Theory of evolution', duration: '28 min', lessons: 6, completed: 0 },
      { id: 'biodiversity', title: 'Biodiversity', description: 'Classification of organisms', duration: '35 min', lessons: 9, completed: 0 },
      { id: 'biotechnology', title: 'Biotechnology', description: 'Applications of biotechnology', duration: '30 min', lessons: 7, completed: 0 }
    ],
    '11': [
      { id: 'human-anatomy', title: 'Human Anatomy', description: 'Detailed human anatomy', duration: '35 min', lessons: 9, completed: 0 },
      { id: 'physiology-advanced', title: 'Advanced Physiology', description: 'Complex physiological processes', duration: '32 min', lessons: 8, completed: 0 },
      { id: 'microbiology', title: 'Microbiology', description: 'Study of microorganisms', duration: '30 min', lessons: 7, completed: 0 },
      { id: 'immunology', title: 'Immunology', description: 'Immune system and diseases', duration: '28 min', lessons: 6, completed: 0 },
      { id: 'ecology-advanced', title: 'Advanced Ecology', description: 'Population and community ecology', duration: '30 min', lessons: 7, completed: 0 }
    ],
    '12': [
      { id: 'biochemistry', title: 'Biochemistry', description: 'Chemical processes in living organisms', duration: '38 min', lessons: 10, completed: 0 },
      { id: 'genetics-molecular', title: 'Molecular Genetics', description: 'Advanced molecular genetics', duration: '35 min', lessons: 9, completed: 0 },
      { id: 'evolution-advanced', title: 'Advanced Evolution', description: 'Evolutionary mechanisms', duration: '32 min', lessons: 8, completed: 0 },
      { id: 'environmental-science', title: 'Environmental Science', description: 'Environmental issues and solutions', duration: '30 min', lessons: 7, completed: 0 },
      { id: 'biotechnology-advanced', title: 'Advanced Biotechnology', description: 'Modern biotechnology applications', duration: '35 min', lessons: 9, completed: 0 }
    ]
  },
  geography: {
    '8': [
      { id: 'maps-skills', title: 'Map Skills', description: 'Reading and using maps', duration: '18 min', lessons: 4, completed: 0 },
      { id: 'physical-geography', title: 'Physical Geography', description: 'Earth\'s physical features', duration: '20 min', lessons: 5, completed: 0 },
      { id: 'weather-climate', title: 'Weather & Climate', description: 'Understanding weather patterns', duration: '22 min', lessons: 5, completed: 0 },
      { id: 'population', title: 'Population', description: 'World population distribution', duration: '20 min', lessons: 4, completed: 0 },
      { id: 'resources', title: 'Natural Resources', description: 'Earth\'s natural resources', duration: '18 min', lessons: 4, completed: 0 }
    ],
    '9': [
      { id: 'geomorphology', title: 'Geomorphology', description: 'Landforms and processes', duration: '25 min', lessons: 6, completed: 0 },
      { id: 'climatology', title: 'Climatology', description: 'Climate systems and patterns', duration: '28 min', lessons: 7, completed: 0 },
      { id: 'hydrology', title: 'Hydrology', description: 'Water systems and management', duration: '24 min', lessons: 5, completed: 0 },
      { id: 'economic-geography', title: 'Economic Geography', description: 'Economic activities and patterns', duration: '26 min', lessons: 6, completed: 0 },
      { id: 'settlements', title: 'Settlements', description: 'Human settlement patterns', duration: '22 min', lessons: 5, completed: 0 }
    ],
    '10': [
      { id: 'plate-tectonics', title: 'Plate Tectonics', description: 'Earth\'s crustal movements', duration: '30 min', lessons: 7, completed: 0 },
      { id: 'weathering-erosion', title: 'Weathering & Erosion', description: 'Surface processes and landforms', duration: '28 min', lessons: 6, completed: 0 },
      { id: 'atmospheric-circulation', title: 'Atmospheric Circulation', description: 'Global weather patterns', duration: '32 min', lessons: 8, completed: 0 },
      { id: 'urban-geography', title: 'Urban Geography', description: 'Cities and urban development', duration: '26 min', lessons: 6, completed: 0 },
      { id: 'agriculture', title: 'Agriculture', description: 'Farming systems and practices', duration: '24 min', lessons: 5, completed: 0 }
    ],
    '11': [
      { id: 'structural-geomorphology', title: 'Structural Geomorphology', description: 'Advanced landform studies', duration: '32 min', lessons: 8, completed: 0 },
      { id: 'climatic-classification', title: 'Climatic Classification', description: 'Climate classification systems', duration: '30 min', lessons: 7, completed: 0 },
      { id: 'fluvial-processes', title: 'Fluvial Processes', description: 'River systems and processes', duration: '28 min', lessons: 6, completed: 0 },
      { id: 'industrial-geography', title: 'Industrial Geography', description: 'Industrial location and development', duration: '26 min', lessons: 6, completed: 0 },
      { id: 'transportation', title: 'Transportation Geography', description: 'Transportation networks', duration: '24 min', lessons: 5, completed: 0 }
    ],
    '12': [
      { id: 'advanced-geomorphology', title: 'Advanced Geomorphology', description: 'Complex geomorphological processes', duration: '35 min', lessons: 9, completed: 0 },
      { id: 'paleoclimatology', title: 'Paleoclimatology', description: 'Climate change through time', duration: '32 min', lectures: 8, completed: 0 },
      { id: 'coastal-geography', title: 'Coastal Geography', description: 'Coastal processes and management', duration: '30 min', lessons: 7, completed: 0 },
      { id: 'regional-development', title: 'Regional Development', description: 'Regional planning and development', duration: '28 min', lessons: 6, completed: 0 },
      { id: 'geographical-techniques', title: 'Geographical Techniques', description: 'GIS and remote sensing', duration: '35 min', lessons: 9, completed: 0 }
    ]
  }
};

const subjectNames: { [key: string]: string } = {
  'mathematics': 'Mathematics',
  'mathematical-literacy': 'Mathematical Literacy',
  'chemistry': 'Chemistry',
  'physics': 'Physics',
  'life-sciences': 'Life Sciences',
  'geography': 'Geography'
};

export default function Topics() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const [topics, setTopics] = useState<any[]>([]);
  const [progress, setProgress] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const subject = localStorage.getItem('selectedSubject');
    const grade = localStorage.getItem('selectedGrade');
    
    if (subject && grade) {
      setSelectedSubject(subject);
      setSelectedGrade(grade);
      
      // Get topics for selected subject and grade
      let structuredTopics: any[] = [];
      
      if (subject === 'mathematics' && grade === '10') {
        structuredTopics = grade10MathematicsTopics;
      } else if (subject === 'mathematics' && grade === '11') {
        structuredTopics = grade11MathematicsData.topics;
      } else if (subject === 'mathematics' && grade === '12') {
        structuredTopics = grade12MathematicsData.topics;
      } else if (subject === 'chemistry' && grade === '12') {
        structuredTopics = grade12ChemistryTopics;
      } else {
        // Fall back to the old topicsData structure
        const subjectTopics = topicsData[subject as keyof typeof topicsData];
        if (subjectTopics && subjectTopics[grade]) {
          structuredTopics = subjectTopics[grade];
        }
      }
      
      if (structuredTopics.length > 0) {
        // Load completed lessons
        const savedCompleted = localStorage.getItem(`completedLessons-${subject}-${grade}`);
        const completedLessons = savedCompleted ? new Set(JSON.parse(savedCompleted)) : new Set();
        
        const topicsWithProgress = structuredTopics.map((topic: any) => {
          const completedCount = topic.lessons.filter((lesson: any) => completedLessons.has(lesson.id)).length;
          return {
            ...topic,
            completed: completedCount,
            totalLessons: topic.lessons.length,
            progress: (completedCount / topic.lessons.length) * 100
          };
        });
        setTopics(topicsWithProgress);
        
        // Calculate overall progress
        const totalLessons = topicsWithProgress.reduce((sum, topic) => sum + topic.totalLessons, 0);
        const completedLessonsCount = topicsWithProgress.reduce((sum, topic) => sum + topic.completed, 0);
        const overallProgress = totalLessons > 0 ? (completedLessonsCount / totalLessons) * 100 : 0;
        setProgress({ overall: overallProgress });
      }
    } else {
      // Redirect to home if no selection
      window.location.href = '/';
    }
  }, []);

  const handleTopicSelect = (topicId: string) => {
    localStorage.setItem('selectedTopic', topicId);
    window.location.href = '/lesson';
  };

  const handleBack = () => {
    localStorage.removeItem('selectedGrade');
    window.location.href = '/grade-selection';
  };

  const getProgressColor = (progress: number) => {
    if (progress === 0) return 'bg-gray-200';
    if (progress < 50) return 'bg-red-500';
    if (progress < 80) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getProgressText = (progress: number) => {
    if (progress === 0) return 'Not Started';
    if (progress < 50) return 'In Progress';
    if (progress < 100) return 'Nearly Complete';
    return 'Completed';
  };

  if (!selectedSubject || !selectedGrade) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navigation 
        currentPage="topics" 
        showBackButton={true}
        onBack={handleBack}
        subtitle={`${subjectNames[selectedSubject]} - Grade ${selectedGrade}`}
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Overall Progress */}
        {progress.overall !== undefined && (
          <div className="mb-8">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                    Overall Progress
                  </h2>
                  <div className="w-64">
                    <Progress value={progress.overall} className="h-3" />
                    <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                      {Math.round(progress.overall)}% Complete
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                    {progress.overall.toFixed(0)}%
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    of all topics completed
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => {
            const progressPercentage = topic.progress || (topic.completed / topic.lessons) * 100;
            const progressColor = getProgressColor(progressPercentage);
            const progressText = getProgressText(progressPercentage);
            
            return (
              <Card 
                key={topic.id} 
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-slate-300 dark:hover:border-slate-600"
                onClick={() => handleTopicSelect(topic.id)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">
                        {topic.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600 dark:text-slate-300">
                        {topic.description}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-1 text-sm text-slate-500">
                        <Clock className="w-3 h-3" />
                        <span>{topic.totalDuration || topic.duration} min</span>
                      </div>
                      <Badge variant="outline">
                        {topic.totalLessons || topic.lessons} lessons
                      </Badge>
                      <Badge 
                        variant={progressPercentage === 100 ? "default" : "secondary"}
                        className="mb-2"
                      >
                        {progressText}
                      </Badge>
                      {progressPercentage === 100 && (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300 mb-2">
                      <span>Progress</span>
                      <span>{topic.completed || 0}/{topic.totalLessons || topic.lessons} lessons</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${progressColor}`}
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Topic Info */}
                  <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{topic.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      <span>{topic.lessons} lessons</span>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4" variant="outline">
                    <Play className="w-4 h-4 mr-2" />
                    {topic.completed > 0 ? 'Continue' : 'Start'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Study Tips */}
        <div className="mt-12 bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Study Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3 mt-1">
                <span className="text-blue-600 dark:text-blue-300 font-semibold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">
                  Start with Basics
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Begin with foundational topics before moving to advanced concepts
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3 mt-1">
                <span className="text-green-600 dark:text-green-300 font-semibold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">
                  Practice Regularly
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Consistent practice helps reinforce learning and improve retention
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-3 mt-1">
                <span className="text-purple-600 dark:text-purple-300 font-semibold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">
                  Take Assessments
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Test your knowledge with assessments to identify areas for improvement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}