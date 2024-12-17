import { body, container, heading } from "@/components/utils/primitives";
import { VStack } from "@/components/utils/v-stack";
import { cn } from "@/libs/utils";
import { useEffect, useRef, useState } from "react";

const DATA = [
  {
    title: "Custom rainfall model",
    description: [
      "Our actuary model is trained using over 20 years of rainfall data in relevant regions.",
    ],
  },
  {
    title: "New insurance is underwritten.",
    description: [
      "Policies include specific parameters, such as validity period, rainfall threshold and underwrite amount.",
      "Our model calculates the premium deterministically based on the given parameters.",
    ],
  },
  {
    title: "Real-Time Weather Data Collected",
    description: [
      "Reliable data oracles monitor rainfall levels in Luzon during the validity period of the policy.",
    ],
  },
  {
    title: "Trigger Conditions Met",
    description: ["Rainfall exceeds thresholds."],
  },
  {
    title: "Smart Contract Executes",
    description: [
      "Payouts are enacted instantly and autonomously to policyholders without the need for a manual claim process.",
    ],
  },
];
const HowItWorkSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastItemRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [lastItemHeight, setLastItemHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setContainerHeight(rect.height);
    }
    if (lastItemRef.current) {
      const lastItemRect = lastItemRef.current.getBoundingClientRect();
      setLastItemHeight(lastItemRect.height);
    }
  }, []);

  return (
    <section
      id="faq"
      className={container({ className: "relative pt-[88px] pb-[65px] mt-5" })}
    >
      <h2
        className={heading({
          variant: 40,
          weight: 700,
          className: "text-primary w-full max-w-[656px] text-center mx-auto",
        })}
      >
        How it works
      </h2>

      <div
        ref={containerRef}
        className="relative max-w-[750px] w-full mx-auto mt-[70px]"
      >
        <VStack justify="between">
          {DATA?.map(({ title, description }, index) => (
            <div
              key={title}
              className={cn(
                "flex pb-6 lg:pb-10 gap-10",
                index === DATA.length - 1 && "!pb-0"
              )}
              ref={index === DATA.length - 1 ? lastItemRef : null}
            >
              <div className="flex flex-col md:flex-row">
                <div className="absolute left-3 md:left-3 h-10 w-10 rounded-full bg-[#EBEAED]  border border-neutral-300 p-2 justify-center items-center z-[1] font-medium text-lg text-primary-dark/40 font-manrope hidden lg:flex">
                  {index + 1}
                </div>
                <VStack spacing={18} className="relative lg:left-[100px] ">
                  <p
                    className={body({
                      variant: 18,
                      weight: 700,
                      className: "text-primary font-manrope",
                    })}
                  >
                    {title}
                  </p>
                  <ul className="list-disc pl-5 text-primary-dark/40 font-manrope">
                    {description?.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                </VStack>
              </div>
            </div>
          ))}
        </VStack>
        <div
          style={{ height: containerHeight }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[#EBEAED] hidden lg:block"
        ></div>
        <div
          style={{ height: lastItemHeight - 20 }}
          className="absolute md:left-8 left-8 bottom-0 overflow-hidden w-[2px] bg-white hidden lg:block"
        ></div>
      </div>
    </section>
  );
};

export default HowItWorkSection;
