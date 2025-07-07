export interface Recipe {
  id: string;
  name: string;
  image: string;
  category: string;
  difficulty: "Fácil" | "Médio" | "Difícil";
  time: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
  description: string;
}