'use client';

import { useState, useEffect } from 'react';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Extract headings from markdown content
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const items: TOCItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const title = match[2].replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'); // Remove markdown links
      const id = title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      
      if (level <= 3) { // Only show h1, h2, h3
        items.push({ id, title, level });
      }
    }

    setTocItems(items);
  }, [content]);

  useEffect(() => {
    const handleScroll = () => {
      const headings = tocItems.map(item => document.getElementById(item.id)).filter(Boolean);
      
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        if (heading && heading.getBoundingClientRect().top <= 100) {
          setActiveId(heading.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active heading
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocItems]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  if (tocItems.length === 0) return null;

  return (
    <>
      {/* Mobile TOC Toggle */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
          aria-label="Toggle table of contents"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile TOC Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)}>
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl p-6 overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-headline text-lg font-semibold text-primary">Table of Contents</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav>
              <ul className="space-y-2">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToHeading(item.id)}
                      className={`block w-full text-left py-2 px-3 rounded transition-colors ${
                        activeId === item.id
                          ? 'bg-accent/10 text-accent font-medium'
                          : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                      } ${item.level === 1 ? 'font-semibold' : item.level === 2 ? 'ml-4' : 'ml-8 text-sm'}`}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Desktop TOC Sidebar */}
      <div className="hidden lg:block fixed left-6 top-1/2 transform -translate-y-1/2 w-64 max-h-96 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-sm p-4 z-30">
        <h3 className="font-headline text-sm font-semibold text-primary mb-4 uppercase tracking-wide">
          Table of Contents
        </h3>
        <nav>
          <ul className="space-y-1">
            {tocItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToHeading(item.id)}
                  className={`block w-full text-left py-1.5 px-2 rounded text-sm transition-colors ${
                    activeId === item.id
                      ? 'bg-accent/10 text-accent font-medium'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  } ${item.level === 1 ? 'font-medium' : item.level === 2 ? 'ml-3' : 'ml-6 text-xs'}`}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

