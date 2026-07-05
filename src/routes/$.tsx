import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "../lib/seo";

export const Route = createFileRoute("/$")({
  head: () => {
    const base = seo({
      title: "Page Not Found",
      description: "The page you're looking for doesn't exist or may have moved.",
      path: "/404",
      noIndex: true,
    });
    return base;
  },
  component: NotFoundRoute,
});

function NotFoundRoute() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold">404</h1>
        <p className="mt-4 text-muted-foreground">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-transform hover:scale-105"
          aria-label="Go back to the ThunSpark homepage"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
