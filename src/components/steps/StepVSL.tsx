import { useEffect } from "react";

interface StepVSLProps {
  onContinue: () => void;
}

const StepVSL = ({ onContinue }: StepVSLProps) => {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/c0437a4e-7a74-402a-bfdb-cc37e02cea4a/players/69f2c12111cb913ba49b5198/v4/player.js";
    s.async = true;
    document.head.appendChild(s);
    return () => {
      document.head.removeChild(s);
    };
  }, []);

  return (
    <div className="flex flex-col items-center text-center gap-6 w-full">
      <h1 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
        🎁 Descubra o Kit Perfeito de Calcinhas Anti-Candidíase Para Você!
      </h1>
      <p className="text-muted-foreground text-base">
        Responda algumas perguntas rápidas e descubra qual kit combina mais com o seu estilo e necessidade.
      </p>

      {/* @ts-expect-error custom element */}
      <vturb-smartplayer
        id="vid-69f2c12111cb913ba49b5198"
        style={{ display: "block", margin: "0 auto", width: "100%", maxWidth: "400px" }}
      />

      <p className="text-sm text-muted-foreground">
        ⚡ Mais de <strong className="text-foreground">2.347 mulheres</strong> já escolheram o kit ideal
      </p>

      <button onClick={onContinue} className="quiz-btn">
        COMEÇAR AGORA →
      </button>

      <p className="text-xs text-muted-foreground">
        Na próxima etapa você irá escolher o seu kit ideal
      </p>
    </div>
  );
};

export default StepVSL;
