import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Clock, Users } from "lucide-react";
import { useState } from "react";

interface Recipe {
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

interface RecipeCardProps {
  recipe: Recipe;
  onViewRecipe: (recipe: Recipe) => void;
}

export const RecipeCard = ({ recipe, onViewRecipe }: RecipeCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Fácil": return "bg-gradient-tropical text-tropical-foreground";
      case "Médio": return "bg-gradient-sunset text-sunset-foreground";
      case "Difícil": return "bg-gradient-berry text-berry-foreground";
      default: return "bg-gradient-tropical text-tropical-foreground";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "tropical": return "bg-tropical/20 text-tropical border-tropical/30";
      case "clássico": return "bg-primary/20 text-primary border-primary/30";
      case "sem álcool": return "bg-citrus/20 text-citrus border-citrus/30";
      default: return "bg-accent/20 text-accent-foreground border-accent/30";
    }
  };

  return (
    <Card className="group overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-card transition-all duration-300 hover:scale-[1.02] hover:border-primary/30">
      <div className="relative overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-3 right-3 rounded-full backdrop-blur-sm border ${
            isFavorite 
              ? "bg-primary/20 text-primary border-primary/30 shadow-glow" 
              : "bg-black/20 text-white border-white/20 hover:bg-primary/20 hover:text-primary"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
        </Button>

        <div className="absolute bottom-3 left-3 right-3">
          <Badge className={getDifficultyColor(recipe.difficulty)} variant="secondary">
            {recipe.difficulty}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {recipe.name}
            </h3>
            <Badge variant="outline" className={getCategoryColor(recipe.category)}>
              {recipe.category}
            </Badge>
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {recipe.description}
          </p>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{recipe.time}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{recipe.servings} porção{recipe.servings > 1 ? "s" : ""}</span>
          </div>
        </div>

        <Button 
          onClick={() => onViewRecipe(recipe)}
          className="w-full bg-gradient-hero hover:shadow-intense transition-all duration-300"
        >
          Ver Receita
        </Button>
      </CardContent>
    </Card>
  );
};