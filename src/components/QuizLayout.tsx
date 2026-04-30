import { ReactNode } from "react";
import QuizProgress from "./QuizProgress";
import { ArrowLeft } from "lucide-react";

interface QuizLayoutProps {
  children: ReactNode;
  step: number;
  totalSteps: number;
  onBack?: () => void;
  showProgress?: boolean;
}

const QuizLayout = ({ children, step, totalSteps, onBack, showProgress = true }: QuizLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex items-center pt-3 px-4">
        {onBack && (
          <button onClick={onBack} className="text-foreground/60 hover:text-foreground transition-colors">
            <ArrowLeft size={22} />
          </button>
        )}
      </div>
      {showProgress && <QuizProgress current={step} total={totalSteps} />}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 max-w-lg mx-auto w-full">
        {children}
      </div>
      <footer className="text-center text-xs text-muted-foreground py-4">
        © 2026 - Todos os direitos reservados
      </footer>
    </div>
  );
};

export default QuizLayout;
