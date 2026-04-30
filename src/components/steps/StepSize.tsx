interface StepSizeProps {
  onSelect: (size: string) => void;
}

const sizes = [
  { id: "P", label: "P", desc: "36-38" },
  { id: "M", label: "M", desc: "40-42" },
  { id: "G", label: "G", desc: "44-46" },
  { id: "GG", label: "GG", desc: "48-50" },
];

const StepSize = ({ onSelect }: StepSizeProps) => {
  return (
    <div className="flex flex-col items-center text-center gap-6 w-full">
      <h2 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
        Qual o seu tamanho?
      </h2>
      <p className="text-muted-foreground text-sm">Escolha o tamanho ideal para você</p>

      <div className="grid grid-cols-2 gap-3 w-full">
        {sizes.map((s) => (
          <button
            key={s.id}
            onClick={() => onSelect(s.id)}
            className="quiz-card flex flex-col items-center gap-2 py-8"
          >
            <span className="text-3xl font-extrabold text-foreground">{s.label}</span>
            <span className="text-sm text-muted-foreground">{s.desc}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StepSize;
