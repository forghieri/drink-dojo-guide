export const recipes = [
  {
    id: "1",
    name: "Mojito Clássico",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=300&fit=crop",
    category: "Clássico",
    difficulty: "Fácil" as const,
    time: "5 min",
    servings: 1,
    description: "O refrescante mojito cubano com rum branco, hortelã fresca, limão e água com gás. Perfeito para dias quentes!",
    ingredients: [
      "60ml de rum branco",
      "8-10 folhas de hortelã fresca",
      "1/2 limão cortado em pedaços",
      "2 colheres de açúcar",
      "Água com gás",
      "Gelo"
    ],
    instructions: [
      "Em um copo alto, adicione as folhas de hortelã e os pedaços de limão.",
      "Adicione o açúcar e macere delicadamente com um socador para liberar os óleos da hortelã.",
      "Encha o copo com gelo picado.",
      "Adicione o rum branco e misture bem.",
      "Complete com água com gás e misture novamente.",
      "Decore com raminhos de hortelã e uma fatia de limão."
    ]
  },
  {
    id: "2",
    name: "Piña Colada",
    image: "https://images.unsplash.com/photo-1609457680-4d5cbfbc2e47?w=400&h=300&fit=crop",
    category: "Tropical",
    difficulty: "Médio" as const,
    time: "8 min",
    servings: 2,
    description: "O tropical piña colada com rum, leite de coco e abacaxi. Uma viagem aos Caribes em cada gole!",
    ingredients: [
      "120ml de rum branco",
      "200ml de leite de coco",
      "200ml de suco de abacaxi",
      "1 xícara de abacaxi picado",
      "2 xícaras de gelo",
      "1 colher de sopa de açúcar (opcional)"
    ],
    instructions: [
      "No liquidificador, adicione o rum, leite de coco e suco de abacaxi.",
      "Acrescente o abacaxi picado e o gelo.",
      "Bata até ficar cremoso e homogêneo.",
      "Prove e adicione açúcar se necessário.",
      "Sirva em copos altos.",
      "Decore com fatias de abacaxi e cerejas."
    ]
  },
  {
    id: "3",
    name: "Caipirinha de Morango",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
    category: "Clássico",
    difficulty: "Fácil" as const,
    time: "5 min",
    servings: 1,
    description: "A caipirinha brasileira com um toque especial de morango. Doce, refrescante e irresistível!",
    ingredients: [
      "60ml de cachaça",
      "5-6 morangos maduros",
      "2 colheres de açúcar",
      "Gelo"
    ],
    instructions: [
      "Lave bem os morangos e corte em pedaços.",
      "No copo, adicione os morangos e o açúcar.",
      "Macere bem os morangos até formar uma polpa.",
      "Adicione a cachaça e misture.",
      "Complete com gelo e misture novamente.",
      "Sirva com canudos ecológicos."
    ]
  },
  {
    id: "4",
    name: "Virgin Mojito",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
    category: "Sem Álcool",
    difficulty: "Fácil" as const,
    time: "3 min",
    servings: 1,
    description: "Toda a refrescância do mojito tradicional, mas sem álcool. Perfeito para qualquer ocasião!",
    ingredients: [
      "8-10 folhas de hortelã fresca",
      "1/2 limão cortado em pedaços",
      "2 colheres de açúcar",
      "Água com gás",
      "Gelo",
      "Suco de 1/2 limão"
    ],
    instructions: [
      "Em um copo alto, adicione as folhas de hortelã e os pedaços de limão.",
      "Adicione o açúcar e macere delicadamente.",
      "Encha o copo com gelo.",
      "Adicione o suco de limão fresco.",
      "Complete com água com gás.",
      "Decore com hortelã e fatias de limão."
    ]
  },
  {
    id: "5",
    name: "Sex on the Beach",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=300&fit=crop",
    category: "Tropical",
    difficulty: "Médio" as const,
    time: "7 min",
    servings: 1,
    description: "O clássico drink tropical com vodka, licor de pêssego e sucos de frutas. Um pôr do sol em cada gole!",
    ingredients: [
      "30ml de vodka",
      "30ml de licor de pêssego",
      "60ml de suco de abacaxi",
      "60ml de suco de cranberry",
      "Gelo",
      "Fatias de limão e cerejas para decorar"
    ],
    instructions: [
      "Em um copo alto com gelo, adicione a vodka.",
      "Acrescente o licor de pêssego.",
      "Adicione o suco de abacaxi.",
      "Lentamente, despeje o suco de cranberry pela lateral do copo para criar camadas.",
      "Misture delicadamente antes de beber.",
      "Decore com fatias de limão e cerejas."
    ]
  },
  {
    id: "6",
    name: "Margarita de Manga",
    image: "https://images.unsplash.com/photo-1630568836815-4d80649d4304?w=400&h=300&fit=crop",
    category: "Tropical",
    difficulty: "Difícil" as const,
    time: "10 min",
    servings: 2,
    description: "Uma versão tropical da clássica margarita com manga fresca. Exótica e refrescante!",
    ingredients: [
      "120ml de tequila prata",
      "60ml de Triple Sec",
      "1 manga madura descascada",
      "Suco de 2 limões",
      "2 colheres de açúcar",
      "Sal grosso para a borda",
      "Gelo"
    ],
    instructions: [
      "Corte a manga em pedaços e bata no liquidificador até formar uma polpa.",
      "Passe sal grosso na borda dos copos.",
      "No liquidificador, adicione a polpa de manga, tequila, Triple Sec e suco de limão.",
      "Adicione açúcar a gosto e gelo.",
      "Bata até ficar homogêneo.",
      "Sirva nos copos preparados e decore com fatias de manga."
    ]
  }
];