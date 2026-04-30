import { Check, ShieldCheck, Heart, Sparkles } from "lucide-react";

interface StepBenefitsProps {
  onContinue: () => void;
}

const benefits = [
  { icon: ShieldCheck, title: "Proteção contra candidíase", desc: "Tecido antibacteriano que previne infecções e mantém a saúde íntima" },
  { icon: Heart, title: "Conforto o dia inteiro", desc: "Tecido macio e respirável que não marca e não aperta" },
  { icon: Sparkles, title: "Durabilidade premium", desc: "Material de alta qualidade que não deforma mesmo após muitas lavagens" },
  { icon: Check, title: "Aprovada por ginecologistas", desc: "Recomendada por especialistas para uso diário" },
];

const StepBenefits = ({ onContinue }: StepBenefitsProps) => {
  return (
    <div className="flex flex-col items-center text-center gap-6 w-full">
      <h2 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
        ✅ Por que nossas calcinhas são especiais?
      </h2>

      <div className="flex flex-col gap-3 w-full text-left">
        {benefits.map((b, i) => (
          <div key={i} className="quiz-card flex items-start gap-3 cursor-default hover:translate-y-0">
            <div className="w-10 h-10 rounded-full bg-wine-bg flex items-center justify-center flex-shrink-0">
              <b.icon size={20} className="text-primary" />
            </div>
            <div>
              <p className="font-bold text-sm text-foreground">{b.title}</p>
              <p className="text-xs text-muted-foreground">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <button onClick={onContinue} className="quiz-btn mt-2">
        CONTINUAR →
      </button>
    </div>
  );
};

export default StepBenefits;
