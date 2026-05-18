const class10Data = {
  maths: {
    "Real Numbers": {
      definition:
        "Real numbers are all rational and irrational numbers together.",
      formulas: [
        "HCF × LCM = Product of two numbers"
      ],
      questions: [
        {
          q: "Euclid Division Lemma kya hai?",
          a: "For any two integers a and b, a = bq + r where 0 ≤ r < b"
        },
        {
          q: "Irrational number kya hota hai?",
          a: "A number that cannot be written in p/q form."
        }
      ]
    },

    "Polynomials": {
      definition:
        "An algebraic expression having variables with whole number powers.",
      formulas: [
        "Zeroes ka sum = -b/a",
        "Zeroes ka product = c/a"
      ],
      questions: [
        {
          q: "Quadratic polynomial kya hota hai?",
          a: "Polynomial of degree 2."
        }
      ]
    },

    "Pair of Linear Equations": {
      definition:
        "Two linear equations with same variables.",
      formulas: [
        "ax + by + c = 0"
      ],
      questions: [
        {
          q: "Linear equation ka graph kya hota hai?",
          a: "A straight line."
        }
      ]
    },

    "Quadratic Equations": {
      definition:
        "Equation of degree 2.",
      formulas: [
        "x = (-b ± √(b²-4ac))/2a"
      ],
      questions: [
        {
          q: "Discriminant kya hota hai?",
          a: "b² - 4ac"
        }
      ]
    },

    "Arithmetic Progression": {
      definition:
        "A sequence with common difference.",
      formulas: [
        "nth term = a + (n-1)d",
        "Sum = n/2[2a + (n-1)d]"
      ],
      questions: [
        {
          q: "Common difference kya hota hai?",
          a: "Difference between consecutive terms."
        }
      ]
    }
  },

  science: {
    "Chemical Reactions": {
      definition:
        "Process in which new substances are formed.",
      points: [
        "Combination reaction",
        "Decomposition reaction",
        "Displacement reaction"
      ],
      questions: [
        {
          q: "Oxidation kya hai?",
          a: "Addition of oxygen or removal of hydrogen."
        },
        {
          q: "Reduction kya hai?",
          a: "Removal of oxygen or addition of hydrogen."
        }
      ]
    },

    "Acids Bases and Salts": {
      definition:
        "Acids release H+ ions and bases release OH- ions.",
      formulas: [
        "HCl",
        "NaOH",
        "CaCO3"
      ],
      questions: [
        {
          q: "pH scale kya hoti hai?",
          a: "Scale used to measure acidity and basicity."
        }
      ]
    },

    "Life Processes": {
      definition:
        "Processes necessary for maintaining life.",
      points: [
        "Nutrition",
        "Respiration",
        "Transportation",
        "Excretion"
      ],
      questions: [
        {
          q: "Photosynthesis kya hai?",
          a: "Process by which green plants make food using sunlight."
        },
        {
          q: "Human heart ka kaam kya hai?",
          a: "Pump blood throughout the body."
        }
      ]
    },

    "Light Reflection and Refraction": {
      definition:
        "Study of behavior of light.",
      formulas: [
        "1/f = 1/v - 1/u",
        "Magnification = h2/h1"
      ],
      questions: [
        {
          q: "Concave mirror kya hota hai?",
          a: "Mirror curved inward."
        }
      ]
    },

    "Electricity": {
      definition:
        "Flow of electric charge.",
      formulas: [
        "V = IR",
        "P = VI",
        "P = I²R"
      ],
      questions: [
        {
          q: "Ohm law kya hai?",
          a: "Voltage is directly proportional to current."
        }
      ]
    }
  },

  socialScience: {
    history: {
      "Rise of Nationalism": {
        questions: [
          {
            q: "Nationalism kya hai?",
            a: "Feeling of unity and patriotism among citizens."
          }
        ]
      }
    },

    geography: {
      "Resources and Development": {
        questions: [
          {
            q: "Renewable resources kya hote hain?",
            a: "Resources that can be renewed naturally."
          }
        ]
      }
    },

    civics: {
      "Power Sharing": {
        questions: [
          {
            q: "Democracy kya hai?",
            a: "Government by elected representatives."
          }
        ]
      }
    },

    economics: {
      "Development": {
        questions: [
          {
            q: "Per capita income kya hoti hai?",
            a: "Average income per person."
          }
        ]
      }
    }
  },

  english: {
    grammar: {
      tenses: {
        definition: "Tense shows time of action.",
        examples: [
          "Present",
          "Past",
          "Future"
        ]
      },

      narration: {
        definition: "Direct and indirect speech conversion."
      },

      voice: {
        definition: "Active and passive voice forms."
      }
    }
  },

  hindi: {
    grammar: {
      "Sangya": {
        definition: "Kisi vyakti, vastu, sthan ya bhav ka naam."
      },

      "Sarvanam": {
        definition: "Sangya ke sthan par prayukt shabd."
      }
    }
  }
};

console.log(class10Data);
