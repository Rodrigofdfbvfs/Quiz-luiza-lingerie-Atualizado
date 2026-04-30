import kit3 from "@/assets/kit-3.jpg";
import kit4 from "@/assets/kit-4.jpg";
import kit5 from "@/assets/kit-5.jpg";

const fioImgs = {
  "3": "https://i.ibb.co/kV90p9yd/Gemini-Generated-Image-s21fpjs21fpjs21f-1.webp",
  "6": "https://i.ibb.co/C5ncpNmL/Gemini-Generated-Image-397ya0397ya0397y-1.webp",
  "9": "https://i.ibb.co/Z6XZPBZ1/Chat-GPT-Image-29-de-abr-de-2026-22-40-18-Copia.webp",
};

const rendaImgs = {
  "3": "https://i.ibb.co/YFxRjz52/Gemini-Generated-Image-p7ousfp7ousfp7ou-1.png",
  "6": "https://i.ibb.co/TMjBc1Mc/Gemini-Generated-Image-fgretzfgretzfgre.png",
  "9": "https://i.ibb.co/QBWVfQQ/Gemini-Generated-Image-i86fxai86fxai86f.png",
};

interface StepKitProps {
  model: string;
  onSelect: (kit: string) => void;
}

const kits = [
  { id: "3", label: "Kit 3 Calcinhas", desc: "Ideal para experimentar", img: kit3, tag: "" },
  { id: "6", label: "Kit 6 Calcinhas", desc: "A escolha das clientes", img: kit4, tag: "🔥 MAIS VENDIDO" },
  { id: "9", label: "Kit 9 Calcinhas", desc: "Maior variedade no guarda-roupa", img: kit5, tag: "💎 MELHOR OFERTA" },
];

const StepKit = ({ model, onSelect }: StepKitProps) => {
  return (
    <div className="flex flex-col items-center text-center gap-6 w-full">
      <h2 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
        Escolha seu Kit ideal:
      </h2>
      <p className="text-muted-foreground text-sm">Selecione a quantidade que mais combina com você</p>

      <div className="grid grid-cols-1 gap-3 w-full">
        {kits.map((kit) => (
          <button
            key={kit.id}
            onClick={() => onSelect(kit.id)}
            className="quiz-card flex items-center gap-4 relative overflow-hidden text-left"
          >
            {kit.tag && (
              <span className="absolute top-0 right-0 text-[10px] font-bold py-1 px-2 bg-wine-bg text-foreground rounded-bl-lg">
                {kit.tag}
              </span>
            )}
            <img
              src={model === "fio" ? fioImgs[kit.id as keyof typeof fioImgs] : model === "renda" ? rendaImgs[kit.id as keyof typeof rendaImgs] : kit.img}
              alt={kit.label}
              loading="lazy"
              width={96}
              height={96}
              className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
            />
            <div className="flex flex-col">
              <span className="font-bold text-base text-foreground">{kit.label}</span>
              <span className="text-sm text-muted-foreground">{kit.desc}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StepKit;
