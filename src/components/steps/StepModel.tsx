interface StepModelProps {
  onSelect: (model: string) => void;
}

const models = [
  { id: "fio", label: "Fio", desc: "Sensual e discreta, não marca a roupa", img: "https://i.ibb.co/HDHG2DLT/Gemini-Generated-Image-oa28ujoa28ujoa28-1.webp" },
  { id: "renda", label: "Renda", desc: "Elegante, confortável e delicada", img: "https://i.ibb.co/7xt1rR3v/Gemini-Generated-Image-oa28ujoa28ujoa28.webp" },
];

const StepModel = ({ onSelect }: StepModelProps) => {
  return (
    <div className="flex flex-col items-center text-center gap-6 w-full">
      <h2 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
        Qual modelo você prefere?
      </h2>
      <p className="text-muted-foreground text-sm">Escolha o estilo ideal para você</p>

      <div className="grid grid-cols-1 gap-3 w-full">
        {models.map((m) => (
          <button
            key={m.id}
            onClick={() => onSelect(m.id)}
            className="quiz-card flex items-center gap-4 text-left"
          >
            <img
              src={m.img}
              alt={m.label}
              loading="lazy"
              width={96}
              height={96}
              className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
            />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-foreground">{m.label}</span>
              <span className="text-sm text-muted-foreground">{m.desc}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StepModel;
