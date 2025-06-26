
export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  commonNames: string[];
  category: string;
  region: string;
  description: string;
  medicinalUses: string[];
  cultivation: string[];
  habitat: string;
  image: string;
  benefits: string[];
  precautions: string[];
}

export const plantsData: Plant[] = [
  {
    id: "1",
    name: "Turmeric",
    scientificName: "Curcuma longa",
    commonNames: ["Haldi", "Golden Spice", "Indian Saffron"],
    category: "immunity",
    region: "india",
    description: "Turmeric is a flowering plant belonging to the ginger family. Its rhizome is widely used as a spice and has been used in traditional medicine for thousands of years.",
    medicinalUses: [
      "Anti-inflammatory properties",
      "Wound healing",
      "Digestive aid",
      "Immune system support",
      "Joint health"
    ],
    cultivation: [
      "Grows in warm, humid climates",
      "Requires well-drained soil",
      "Plant rhizomes in spring",
      "Harvest after 8-12 months"
    ],
    habitat: "Native to Southeast Asia, primarily grown in India, China, and Myanmar",
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=300&fit=crop",
    benefits: [
      "Reduces inflammation",
      "Supports liver health",
      "May help with arthritis",
      "Natural antiseptic"
    ],
    precautions: [
      "May interact with blood thinners",
      "Can cause stomach upset in large doses",
      "Avoid during pregnancy in medicinal doses"
    ]
  },
  {
    id: "2",
    name: "Aloe Vera",
    scientificName: "Aloe vera",
    commonNames: ["True Aloe", "Medicinal Aloe", "Barbados Aloe"],
    category: "skincare",
    region: "africa",
    description: "Aloe vera is a succulent plant species known for its thick, fleshy leaves that contain a gel-like substance with numerous medicinal properties.",
    medicinalUses: [
      "Skin healing and moisturizing",
      "Burns and wound treatment",
      "Digestive health",
      "Anti-inflammatory",
      "Antimicrobial properties"
    ],
    cultivation: [
      "Thrives in arid climates",
      "Requires well-draining soil",
      "Minimal watering needed",
      "Can be grown indoors"
    ],
    habitat: "Native to Arabian Peninsula, now cultivated worldwide in tropical and subtropical regions",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
    benefits: [
      "Soothes skin irritation",
      "Promotes wound healing",
      "Natural moisturizer",
      "May help with digestive issues"
    ],
    precautions: [
      "Latex can cause cramping",
      "May lower blood sugar",
      "Test on small skin area first"
    ]
  },
  {
    id: "3",
    name: "Ginger",
    scientificName: "Zingiber officinale",
    commonNames: ["Adrak", "Common Ginger", "Garden Ginger"],
    category: "digestive",
    region: "india",
    description: "Ginger is a flowering plant whose rhizome is widely used as a spice and folk medicine. It's known for its distinctive spicy flavor and numerous health benefits.",
    medicinalUses: [
      "Nausea and motion sickness relief",
      "Digestive aid",
      "Anti-inflammatory",
      "Cold and flu relief",
      "Pain reduction"
    ],
    cultivation: [
      "Grows in warm, humid conditions",
      "Partial shade preferred",
      "Rich, well-drained soil",
      "Harvest after 8-12 months"
    ],
    habitat: "Native to Maritime Southeast Asia, widely cultivated in tropical regions",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop",
    benefits: [
      "Reduces nausea",
      "Improves digestion",
      "Natural pain reliever",
      "Boosts immune system"
    ],
    precautions: [
      "May interact with blood thinners",
      "Can cause heartburn in some people",
      "Avoid high doses during pregnancy"
    ]
  },
  {
    id: "4",
    name: "Echinacea",
    scientificName: "Echinacea purpurea",
    commonNames: ["Purple Coneflower", "American Coneflower"],
    category: "immunity",
    region: "americas",
    description: "Echinacea is a group of herbaceous flowering plants in the daisy family, native to eastern and central North America. It's widely used to support immune system health.",
    medicinalUses: [
      "Immune system support",
      "Cold and flu prevention",
      "Wound healing",
      "Anti-inflammatory",
      "Respiratory health"
    ],
    cultivation: [
      "Hardy perennial",
      "Full sun to partial shade",
      "Well-drained soil",
      "Drought tolerant once established"
    ],
    habitat: "Native to eastern and central North America, prairies and open wooded areas",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&h=300&fit=crop",
    benefits: [
      "May reduce cold duration",
      "Supports immune function",
      "Natural anti-inflammatory",
      "Promotes wound healing"
    ],
    precautions: [
      "May cause allergic reactions",
      "Not recommended for autoimmune conditions",
      "Avoid long-term continuous use"
    ]
  },
  {
    id: "5",
    name: "Lavender",
    scientificName: "Lavandula angustifolia",
    commonNames: ["English Lavender", "True Lavender"],
    category: "respiratory",
    region: "europe",
    description: "Lavender is a genus of flowering plants in the mint family, known for its fragrant flowers and calming properties. It has been used for centuries in aromatherapy and traditional medicine.",
    medicinalUses: [
      "Relaxation and sleep aid",
      "Anxiety relief",
      "Skin healing",
      "Respiratory support",
      "Pain relief"
    ],
    cultivation: [
      "Mediterranean climate preferred",
      "Full sun exposure",
      "Well-drained, alkaline soil",
      "Drought tolerant"
    ],
    habitat: "Native to Mediterranean region, now cultivated worldwide",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop",
    benefits: [
      "Promotes relaxation",
      "Improves sleep quality",
      "Natural antiseptic",
      "Reduces stress and anxiety"
    ],
    precautions: [
      "May cause drowsiness",
      "Can cause skin sensitivity",
      "Avoid during pregnancy"
    ]
  },
  {
    id: "6",
    name: "Willow Bark",
    scientificName: "Salix alba",
    commonNames: ["White Willow", "European Willow"],
    category: "pain-relief",
    region: "europe",
    description: "White willow is a species of willow tree whose bark has been used for centuries as a natural pain reliever. It contains salicin, which is similar to aspirin.",
    medicinalUses: [
      "Pain relief",
      "Anti-inflammatory",
      "Fever reduction",
      "Headache relief",
      "Joint pain"
    ],
    cultivation: [
      "Grows near water sources",
      "Full sun to partial shade",
      "Moist, well-drained soil",
      "Fast-growing tree"
    ],
    habitat: "Native to Europe and western and central Asia, grows in moist soils",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
    benefits: [
      "Natural pain reliever",
      "Reduces inflammation",
      "May help with arthritis",
      "Fever reducer"
    ],
    precautions: [
      "May cause stomach upset",
      "Not suitable for aspirin-allergic individuals",
      "Can interact with blood thinners"
    ]
  }
];
