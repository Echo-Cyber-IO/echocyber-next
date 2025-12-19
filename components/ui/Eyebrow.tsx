/**
 * EYEBROW COMPONENT
 *
 * The small label with crimson bar used above section headings.
 * Like a Blade component: @include('_components.eyebrow', ['text' => 'What I Do'])
 */

interface EyebrowProps {
  children: React.ReactNode;
  centered?: boolean;
}

export function Eyebrow({ children, centered = false }: EyebrowProps) {
  if (centered) {
    return (
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-8 h-1 bg-crimson-600 rounded-full" />
        <span className="text-xs font-mono text-crimson-500 uppercase tracking-wider">
          {children}
        </span>
        <div className="w-8 h-1 bg-crimson-600 rounded-full" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-1 bg-crimson-600 rounded-full" />
      <span className="text-xs font-mono text-crimson-500 uppercase tracking-wider">
        {children}
      </span>
    </div>
  );
}
