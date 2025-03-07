import { RotateCw, Maximize } from "lucide-react";

type PreviewProps = {
  height: string;
  children: React.ReactNode;
  showReload?: boolean;
  showExpand?: boolean;
  onReload?: () => void;
  onExpand?: () => void;
};

export default function Preview({ height, children, showReload = false, showExpand = false, onReload, onExpand }: PreviewProps) {
  return (
    <div className="border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-[#09090947] rounded-xl px-4 py-6 my-10 relative">
      {(showReload || showExpand) && (
        <div className="absolute top-3 right-3 flex gap-2">
          {showReload && (
            <button 
              onClick={onReload} 
              className="p-2 rounded-sm bg-neutral-900 hover:bg-neutral-800 transition-all cursor-pointer"
            >
              <RotateCw className="h-3 w-3 text-neutral-500" />
            </button>
          )}

          {showExpand && (
            <button 
              onClick={onExpand} 
              className="p-2 rounded-sm bg-neutral-900 hover:bg-neutral-800 transition-all cursor-pointer"
            >
              <Maximize className="h-3 w-3 text-neutral-500" />
            </button>
          )}
        </div>
      )}

      <div className={`flex h-[${height}] items-center justify-center`}>
        {children}
      </div>
    </div>
  );
}
