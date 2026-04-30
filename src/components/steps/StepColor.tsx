
interface StepColorProps {
  kit: string;
  model: string;
  onSelect: (color: string) => void;
}

const colorsFio = [
  { id: "marsala", label: "Marsala", img: "https://i.ibb.co/35WNXTZp/SAVE-20260427-161240-jpg.webp" },
  { id: "branca", label: "Branca", img: "https://i.ibb.co/JWL36ZWz/1777317885503.webp" },
  { id: "preta", label: "Preta", img: "https://i.ibb.co/1DCBhv8/1777319148632.webp" },
];

const colorsRenda = [
  { id: "marsala", label: "Marsala", img: "https://i.ibb.co/ynrCtFDn/Gemini-Generated-Image-x3q2ntx3q2ntx3q2.png" },
  { id: "off", label: "Off-White", img: "https://i.ibb.co/yF1T4FXK/Gemini-Generated-Image-tq69ddtq69ddtq69-2.png" },
  { id: "preta", label: "Preta", img: "https://i.ibb.co/20GpXS0D/Gemini-Generated-Image-ifdtyyifdtyyifdt.png" },
];

const StepColor = ({ kit, model, onSelect }: StepColorProps) => {
  const perColor = kit === "9" ? 3 : kit === "6" ? 2 : 1;
  const colors = model === "fio" ? colorsFio : colorsRenda;

  return (
    <div className="flex flex-col items-center text-center gap-6 w-full">
      <h2 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
        Suas cores do kit:
      </h2>
      <p className="text-muted-foreground text-sm">
        Seu kit já vem com {perColor} {perColor > 1 ? "calcinhas" : "calcinha"} de cada cor abaixo
      </p>

      <div className="grid grid-cols-3 gap-3 w-full">
        {colors.map((c) => (
          <div
            key={c.id}
            className="quiz-card flex flex-col items-center gap-2 cursor-default hover:translate-y-0"
          >
            <img
              src={c.img}
              alt={c.label}
              loading="lazy"
              width={120}
              height={120}
              className="w-full aspect-square object-cover rounded-lg"
            />
            <span className="font-bold text-xs text-foreground">{c.label}</span>
            <span className="text-[10px] text-primary font-semibold">{perColor}x</span>
          </div>
        ))}
      </div>

      <button onClick={() => onSelect("kit-completo")} className="quiz-btn">
        CONTINUAR →
      </button>
    </div>
  );
};

export default StepColor;
