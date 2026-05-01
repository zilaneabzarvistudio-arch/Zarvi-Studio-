import { useEffect, useState } from 'react';
// @ts-ignore
import rawHtml from './wordpress-export.html?raw';

export default function App() {
  const [htmlContent, setHtmlContent] = useState<string>('');

  useEffect(() => {
    setHtmlContent(rawHtml);
  }, []);

  if (!htmlContent) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white font-sans">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-xl font-bold tracking-widest uppercase">Loading Preview...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-white">
      <iframe
        srcDoc={htmlContent}
        className="w-full h-full border-none"
        title="WordPress Export Preview"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
      />
    </div>
  );
}
