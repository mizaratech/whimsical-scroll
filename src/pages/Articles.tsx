
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const articles = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Learn the basics of React and start building web applications.",
    category: "Programming",
    author: "John Doe",
    date: "2024-02-20"
  },
  {
    id: 2,
    title: "Advanced TypeScript Patterns",
    excerpt: "Explore advanced TypeScript patterns and best practices.",
    category: "Programming",
    author: "Jane Smith",
    date: "2024-02-19"
  },
  {
    id: 3,
    title: "UI Design Principles",
    excerpt: "Master the fundamental principles of user interface design.",
    category: "Design",
    author: "Mike Johnson",
    date: "2024-02-18"
  }
];

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">
            Articles
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/articles/${article.id}`}>
                <Card className="article-card">
                  <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <span className="text-primary">{article.category}</span>
                      <span className="text-muted-foreground">{article.author}</span>
                    </div>
                    <time className="text-muted-foreground">{article.date}</time>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
