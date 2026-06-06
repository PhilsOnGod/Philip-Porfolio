import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    const prevTitle = document.title;
    document.title = "Page Not Found — Okeke Philip Chidubem";

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      const prev = el?.getAttribute(attr) ?? null;
      if (!el) {
        el = document.createElement("meta");
        const [name, key] = selector.replace(/[\[\]"]/g, "").split("=");
        el.setAttribute(name, key);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
      return { el, prev };
    };

    const desc = setMeta('meta[name="description"]', "content", "The page you're looking for doesn't exist. Return to Okeke Philip Chidubem's portfolio home.");
    const ogTitle = setMeta('meta[property="og:title"]', "content", "Page Not Found — Okeke Philip Chidubem");
    const ogDesc = setMeta('meta[property="og:description"]', "content", "The page you're looking for doesn't exist.");
    const ogUrl = setMeta('meta[property="og:url"]', "content", `https://creative-self-narrative.lovable.app${location.pathname}`);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute("href") ?? null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `https://creative-self-narrative.lovable.app${location.pathname}`);

    return () => {
      document.title = prevTitle;
      if (desc.prev !== null) desc.el.setAttribute("content", desc.prev);
      if (ogTitle.prev !== null) ogTitle.el.setAttribute("content", ogTitle.prev);
      if (ogDesc.prev !== null) ogDesc.el.setAttribute("content", ogDesc.prev);
      if (ogUrl.prev !== null) ogUrl.el.setAttribute("content", ogUrl.prev);
      if (prevCanonical !== null) canonical!.setAttribute("href", prevCanonical);
    };
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </main>
  );
};

export default NotFound;
