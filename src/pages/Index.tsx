import { useState } from "react";
import QuizLayout from "@/components/QuizLayout";
import StepVSL from "@/components/steps/StepVSL";
import StepModel from "@/components/steps/StepModel";
import StepKit from "@/components/steps/StepKit";
import StepSize from "@/components/steps/StepSize";
import StepColor from "@/components/steps/StepColor";
import StepOffer from "@/components/steps/StepOffer";

const TOTAL_STEPS = 6;

const Index = () => {
  const [step, setStep] = useState(0);
  const [model, setModel] = useState("");
  const [kit, setKit] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const goBack = () => setStep((s) => Math.max(0, s - 1));

  return (
    <QuizLayout
      step={step}
      totalSteps={TOTAL_STEPS}
      onBack={step > 0 ? goBack : undefined}
      showProgress={step > 0}
    >
      {step === 0 && <StepVSL onContinue={() => setStep(1)} />}
      {step === 1 && (
        <StepModel
          onSelect={(m) => {
            setModel(m);
            setStep(2);
          }}
        />
      )}
      {step === 2 && (
        <StepKit
          model={model}
          onSelect={(k) => {
            setKit(k);
            setStep(3);
          }}
        />
      )}
      {step === 3 && (
        <StepSize
          onSelect={(s) => {
            setSize(s);
            setStep(4);
          }}
        />
      )}
      {step === 4 && (
        <StepColor
          kit={kit}
          model={model}
          onSelect={(c) => {
            setColor(c);
            setStep(5);
          }}
        />
      )}
      {step === 5 && <StepOffer kit={kit} size={size} color={color} model={model} />}
    </QuizLayout>
  );
};

export default Index;
