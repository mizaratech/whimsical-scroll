
import { motion } from "framer-motion";
import { Search, BookOpen, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const featuredArticles = [
  {
    id: 1,
    title: "Introduction to React",
    excerpt: "Learn the fundamentals of React and its ecosystem.",
    category: "Programming",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Understanding TypeScript",
    excerpt: "A comprehensive guide to TypeScript features.",
    category: "Programming",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Modern Web Development",
    excerpt: "Best practices for modern web development.",
    category: "Web",
    readTime: "10 min read"
  }
];

const categories = [
  { name: "Programming", icon: BookOpen, count: 125 },
  { name: "Design", icon: TrendingUp, count: 84 },
  { name: "Technology", icon: Clock, count: 93 }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="hero-section">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Your Gateway to Knowledge
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Explore our vast collection of articles, tutorials, and guides.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link to="/articles">Start Reading</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/create">Create Article</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-16 text-center">
            Featured Articles
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="article-card">
                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary">{article.category}</span>
                    <span className="text-muted-foreground">{article.readTime}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-24 sm:py-32">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-16 text-center">
            Browse by Category
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/articles?category=${category.name.toLowerCase()}`}>
                  <Card className="article-card group-hover:border-primary/50">
                    <div className="flex items-center gap-4">
                      <div className="rounded-lg bg-primary/5 p-3">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{category.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {category.count} articles
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
