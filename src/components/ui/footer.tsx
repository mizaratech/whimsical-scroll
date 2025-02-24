
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background/60 backdrop-blur-sm">
      <div className="container py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-semibold">
              <BookOpen className="h-5 w-5" />
              Encyclopedia
            </div>
            <p className="text-sm text-muted-foreground">
              Your gateway to knowledge and discovery. Explore, learn, and contribute to our growing collection of articles.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="transition-colors hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/articles" className="transition-colors hover:text-foreground">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/create" className="transition-colors hover:text-foreground">
                  Create Article
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Categories</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/articles?category=programming" className="transition-colors hover:text-foreground">
                  Programming
                </Link>
              </li>
              <li>
                <Link to="/articles?category=design" className="transition-colors hover:text-foreground">
                  Design
                </Link>
              </li>
              <li>
                <Link to="/articles?category=technology" className="transition-colors hover:text-foreground">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/privacy" className="transition-colors hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="transition-colors hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Encyclopedia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
