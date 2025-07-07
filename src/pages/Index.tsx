import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { RecipeCard } from "@/components/RecipeCard";
import { RecipeModal } from "@/components/RecipeModal";
import { SearchFilters } from "@/components/SearchFilters";
import { recipes } from "@/data/recipes";
import heroImage from "@/assets/hero-cocktails.jpg";
import { Search, Sparkles } from "lucide-react";

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

const Index = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  // Filter recipes based on search criteria
  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           recipe.ingredients.some(ingredient => 
                             ingredient.toLowerCase().includes(searchTerm.toLowerCase())
                           );
      
      const matchesCategory = !selectedCategory || recipe.category === selectedCategory;
      const matchesDifficulty = !selectedDifficulty || recipe.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchTerm, selectedCategory, selectedDifficulty]);

  const handleViewRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRecipe(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-hero flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                V - Drinks
              </h1>
            </div>
            <div className="text-sm text-muted-foreground">
              {filteredRecipes.length} receita{filteredRecipes.length !== 1 ? "s" : ""}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="h-96 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-background/90" />
          <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center space-y-6 max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                Tutoriais de
                <span className="block bg-gradient-hero bg-clip-text text-transparent">
                  Bebidas Incríveis
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
                Descubra receitas exclusivas e aprenda a fazer os melhores drinks e cocktails!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <Card className="sticky top-24 bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Search className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Filtros</h3>
                </div>
                <SearchFilters
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  selectedDifficulty={selectedDifficulty}
                  onDifficultyChange={setSelectedDifficulty}
                />
              </CardContent>
            </Card>
          </aside>

          {/* Recipes Grid */}
          <div className="lg:col-span-3">
            {filteredRecipes.length === 0 ? (
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-hero/20 flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    Nenhuma receita encontrada
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Tente ajustar seus filtros ou buscar por outros termos.
                  </p>
                  <Button 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory(null);
                      setSelectedDifficulty(null);
                    }}
                    className="bg-gradient-hero hover:shadow-intense"
                  >
                    Limpar Filtros
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredRecipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onViewRecipe={handleViewRecipe}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Recipe Modal */}
      <RecipeModal
        recipe={selectedRecipe}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;
