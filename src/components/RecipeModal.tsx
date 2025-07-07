import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Clock, Users, X } from "lucide-react";
import { useState } from "react";
import { Recipe } from "@/types/recipe";

interface RecipeModalProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
}

export const RecipeModal = ({ recipe, isOpen, onClose }: RecipeModalProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  if (!recipe) return null;

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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-sm border-border/50">
        <DialogHeader className="space-y-0">
          <div className="flex justify-between items-start">
            <DialogTitle className="text-2xl font-bold text-foreground">
              {recipe.name}
            </DialogTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className={`rounded-full ${
                  isFavorite 
                    ? "bg-primary/20 text-primary shadow-glow" 
                    : "hover:bg-primary/20 hover:text-primary"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFavorite(!isFavorite);
                }}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="rounded-full hover:bg-muted"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Hero Image */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Info badges */}
          <div className="flex flex-wrap gap-3">
            <Badge className={getDifficultyColor(recipe.difficulty)} variant="secondary">
              {recipe.difficulty}
            </Badge>
            <Badge variant="outline" className={getCategoryColor(recipe.category)}>
              {recipe.category}
            </Badge>
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
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {recipe.description}
          </p>

          <Separator />

          {/* Ingredients */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Ingredientes</h3>
            <div className="grid gap-2">
              {recipe.ingredients.map((ingredient, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-md bg-muted/30 border border-border/30"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-hero flex-shrink-0" />
                  <span className="text-foreground">{ingredient}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Instructions */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Modo de Preparo</h3>
            <div className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-lg bg-muted/20 border border-border/30"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-hero flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-foreground leading-relaxed">{instruction}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};