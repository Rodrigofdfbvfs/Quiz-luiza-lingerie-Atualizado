import kit5 from "@/assets/kit-5.jpg";
import kit4 from "@/assets/kit-4.jpg";
import kit3img from "@/assets/kit-3.jpg";
import { ShieldCheck, Truck, CreditCard } from "lucide-react";

interface StepOfferProps {
  kit: string;
  size: string;
  color: string;
  model: string;
}

const fioImgs: Record<string, string> = {
  "3": "https://i.ibb.co/kV90p9yd/Gemini-Generated-Image-s21fpjs21fpjs21f-1.webp",
  "6": "https://i.ibb.co/C5ncpNmL/Gemini-Generated-Image-397ya0397ya0397y-1.webp",
  "9": "https://i.ibb.co/Z6XZPBZ1/Chat-GPT-Image-29-de-abr-de-2026-22-40-18-Copia.webp",
};

const rendaImgs: Record<string, string> = {
  "3": "https://i.ibb.co/YFxRjz52/Gemini-Generated-Image-p7ousfp7ousfp7ou-1.png",
  "6": "https://i.ibb.co/TMjBc1Mc/Gemini-Generated-Image-fgretzfgretzfgre.png",
  "9": "https://i.ibb.co/QBWVfQQ/Gemini-Generated-Image-i86fxai86fxai86f.png",
};

const checkoutLinks: Record<string, string> = {
  "renda-3-P":  "https://seguro.luizalingerie.shop/r/GOW1GEYJV3",
  "renda-3-M":  "https://seguro.luizalingerie.shop/r/CMPCNF2PFP",
  "renda-3-G":  "https://seguro.luizalingerie.shop/r/ATGFHF3Z5A",
  "renda-3-GG": "https://seguro.luizalingerie.shop/r/E9HFBYQB8T",
  "renda-6-P":  "https://seguro.luizalingerie.shop/r/ESJ3MLMYYS",
  "renda-6-M":  "https://seguro.luizalingerie.shop/r/FDFQ1Z5YBN",
  "renda-6-G":  "https://seguro.luizalingerie.shop/r/2EPMY6ALIV",
  "renda-6-GG": "https://seguro.luizalingerie.shop/r/NPAT4A5W28",
  "renda-9-P":  "https://seguro.luizalingerie.shop/r/5LU4E72U8F",
  "renda-9-M":  "https://seguro.luizalingerie.shop/r/GVJ2MD3Q7O",
  "renda-9-G":  "https://seguro.luizalingerie.shop/r/8R60ENT3RV",
  "renda-9-GG": "https://seguro.luizalingerie.shop/r/H5IBJYCJAE",
  "fio-3-P":    "https://seguro.luizalingerie.shop/r/FLRV0T1N89",
  "fio-3-M":    "https://seguro.luizalingerie.shop/r/DXTS8H23TB",
  "fio-3-G":    "https://seguro.luizalingerie.shop/r/C32QUFO28Y",
  "fio-3-GG":   "https://seguro.luizalingerie.shop/r/NO8ARYKKEQ",
  "fio-6-P":    "https://seguro.luizalingerie.shop/r/T1KHFH6GVM",
  "fio-6-M":    "https://seguro.luizalingerie.shop/r/TEOAQ16NNZ",
  "fio-6-G":    "https://seguro.luizalingerie.shop/r/STRODNNXV4",
  "fio-6-GG":   "https://seguro.luizalingerie.shop/r/OI1Z8B3IFU",
  "fio-9-P":    "https://seguro.luizalingerie.shop/r/ODH94HA0N9",
  "fio-9-M":    "https://seguro.luizalingerie.shop/r/LK1D75GUJI",
  "fio-9-G":    "https://seguro.luizalingerie.shop/r/D8YCIU44HB",
  "fio-9-GG":   "https://seguro.luizalingerie.shop/r/IN5G7UB4D2",
};

const kitData: Record<string, { price: number; img: string; old: number }> = {
  "3": { price: 137.7, old: 197.0, img: kit3img },
  "6": { price: 209.9, old: 359.4, img: kit4 },
  "9": { price: 269.1, old: 489.0, img: kit5 },
};

const formatBRL = (n: number) =>
  n.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const StepOffer = ({ kit, size, color, model }: StepOfferProps) => {
  const data = kitData[kit] ?? kitData["3"];
  const checkoutUrl = checkoutLinks[`${model}-${kit}-${size}`] ?? "#";
  const img =
    model === "fio" ? (fioImgs[kit] ?? data.img) :
    model === "renda" ? (rendaImgs[kit] ?? data.img) :
    data.img;
  const installment = data.price / 12;
  const colorLabel = color === "kit-completo" ? "Marsala, Off-White e Preta" : color;

  return (
    <div className="flex flex-col items-center text-center gap-5 w-full">
      <div className="bg-success/10 text-success font-bold text-sm px-4 py-2 rounded-full">
        🎉 Oferta exclusiva liberada!
      </div>

      <h2 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
        Seu Kit {kit} Calcinhas Anti-Candidíase
      </h2>
      <p className="text-muted-foreground text-sm">
        Modelo: <strong className="text-foreground capitalize">{model}</strong> · Tamanho: <strong className="text-foreground">{size}</strong>
        <br />
        Cor: <strong className="text-foreground capitalize">{colorLabel}</strong>
      </p>

      <img
        src={img}
        alt="Kit de calcinhas"
        loading="lazy"
        width={300}
        height={300}
        className="rounded-2xl shadow-lg w-full max-w-xs"
      />

      <div className="quiz-card cursor-default hover:translate-y-0 w-full">
        <p className="text-xs text-muted-foreground line-through">De R$ {formatBRL(data.old)}</p>
        <p className="text-3xl font-extrabold text-foreground mt-1">R$ {formatBRL(data.price)}</p>
        <p className="text-sm text-muted-foreground">à vista no PIX</p>
        <div className="border-t border-border my-3" />
        <p className="text-sm text-foreground font-semibold">ou 12x de R$ {formatBRL(installment)}</p>
        <p className="text-xs text-muted-foreground">no cartão de crédito</p>
      </div>

      <div className="flex flex-col gap-2 w-full text-left text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Truck size={16} className="text-primary flex-shrink-0" />
          <span>Frete grátis para todo o Brasil</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck size={16} className="text-primary flex-shrink-0" />
          <span>Garantia de 30 dias ou seu dinheiro de volta</span>
        </div>
        <div className="flex items-center gap-2">
          <CreditCard size={16} className="text-primary flex-shrink-0" />
          <span>Pagamento 100% seguro</span>
        </div>
      </div>

      <a href={checkoutUrl} className="quiz-btn text-center">
        COMPRAR AGORA 🔒
      </a>

      <p className="text-xs text-muted-foreground">
        ⏰ Oferta por tempo limitado
      </p>
    </div>
  );
};

export default StepOffer;
