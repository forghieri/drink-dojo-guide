import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, X } from "lucide-react";

interface SearchFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  selectedDifficulty: string | null;
  onDifficultyChange: (difficulty: string | null) => void;
}

const categories = ["Todos", "Clássico", "Tropical", "Sem Álcool"];
const difficulties = ["Todos", "Fácil", "Médio", "Difícil"];

export const SearchFilters = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedDifficulty,
  onDifficultyChange,
}: SearchFiltersProps) => {
  const getCategoryStyle = (category: string) => {
    if (category === "Todos" && !selectedCategory) return "bg-gradient-hero text-white shadow-glow";
    if (selectedCategory === category) return "bg-gradient-hero text-white shadow-glow";
    
    switch (category.toLowerCase()) {
      case "tropical": return "hover:bg-tropical/20 hover:text-tropical hover:border-tropical/30";
      case "clássico": return "hover:bg-primary/20 hover:text-primary hover:border-primary/30";
      case "sem álcool": return "hover:bg-citrus/20 hover:text-citrus hover:border-citrus/30";
      default: return "hover:bg-accent/20 hover:text-accent-foreground hover:border-accent/30";
    }
  };

  const getDifficultyStyle = (difficulty: string) => {
    if (difficulty === "Todos" && !selectedDifficulty) return "bg-gradient-hero text-white shadow-glow";
    if (selectedDifficulty === difficulty) return "bg-gradient-hero text-white shadow-glow";
    
    switch (difficulty) {
      case "Fácil": return "hover:bg-gradient-tropical hover:text-tropical-foreground";
      case "Médio": return "hover:bg-gradient-sunset hover:text-sunset-foreground";
      case "Difícil": return "hover:bg-gradient-berry hover:text-berry-foreground";
      default: return "hover:bg-accent/20 hover:text-accent-foreground hover:border-accent/30";
    }
  };

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder="Buscar receitas..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-card/50 backdrop-blur-sm border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 hover:bg-muted"
            onClick={() => onSearchChange("")}
          >
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>

      {/* Category Filters */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Categorias</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className={`cursor-pointer transition-all duration-200 ${getCategoryStyle(category)}`}
              onClick={() => onCategoryChange(category === "Todos" ? null : category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Difficulty Filters */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Dificuldade</h3>
        <div className="flex flex-wrap gap-2">
          {difficulties.map((difficulty) => (
            <Badge
              key={difficulty}
              variant="outline"
              className={`cursor-pointer transition-all duration-200 ${getDifficultyStyle(difficulty)}`}
              onClick={() => onDifficultyChange(difficulty === "Todos" ? null : difficulty)}
            >
              {difficulty}
            </Badge>
          ))}
        </div>
      </div>

      {/* Active Filters */}
      {(selectedCategory || selectedDifficulty || searchTerm) && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">Filtros ativos:</h4>
          <div className="flex flex-wrap gap-2">
            {searchTerm && (
              <Badge variant="secondary" className="bg-primary/20 text-primary">
                Busca: "{searchTerm}"
                <X
                  className="ml-1 h-3 w-3 cursor-pointer hover:text-primary/70"
                  onClick={() => onSearchChange("")}
                />
              </Badge>
            )}
            {selectedCategory && (
              <Badge variant="secondary" className="bg-tropical/20 text-tropical">
                {selectedCategory}
                <X
                  className="ml-1 h-3 w-3 cursor-pointer hover:text-tropical/70"
                  onClick={() => onCategoryChange(null)}
                />
              </Badge>
            )}
            {selectedDifficulty && (
              <Badge variant="secondary" className="bg-sunset/20 text-sunset">
                {selectedDifficulty}
                <X
                  className="ml-1 h-3 w-3 cursor-pointer hover:text-sunset/70"
                  onClick={() => onDifficultyChange(null)}
                />
              </Badge>
            )}
          </div>
        </div>
      )}
    </div>
  );
};