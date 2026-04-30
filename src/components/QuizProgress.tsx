interface QuizProgressProps {
  current: number;
  total: number;
}

const QuizProgress = ({ current, total }: QuizProgressProps) => {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full max-w-md mx-auto px-4 pt-4">
      <div className="quiz-progress-track">
        <div className="quiz-progress-bar" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
};

export default QuizProgress;
