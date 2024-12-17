import { HStack } from "@/components/utils/h-stack";
import { body, container, heading } from "@/components/utils/primitives";
import { VStack } from "@/components/utils/v-stack";
import CheckIcon from "./icons/CheckIcon";
import macbookPro from "/images/home/macbook_pro.webp";

const DATA = [
  {
    title: " Instant Payouts",
    description:
      "Smart contracts trigger relief as soon as predefined conditions (e.g., rainfall thresholds) are met. ",
  },
  {
    title: "Blockchain Transparency",
    description:
      "All transactions are auditable and immutable, ensuring fairness.",
  },
  {
    title: "Lower Costs",
    description:
      "No intermediaries, fewer administrative expenses, and affordable premiums.",
  },
  {
    title: "Focused Impact",
    description:
      "Starting with rainfall insurance for the people of Luzon, Philippines, where climate risks are high.",
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-[#F6F8F7] pt-[80px] pb-[100px] overflow-hidden">
      <HStack
        noWrap
        className={container({
          className:
            "relative lg:p-0 lg:pl-[116px] flex-col lg:flex-row gap-10",
        })}
      >
        <VStack spacing={36} className="lg:w-[568px]">
          <h2
            className={heading({
              variant: 40,
              weight: 700,
              className: "text-primary",
            })}
          >
            We provide swift, fair and transparent insurance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {DATA?.map(({ title, description }) => (
              <div key={title}>
                <HStack noWrap spacing={8}>
                  <CheckIcon />
                  <p
                    className={body({
                      variant: 20,
                      className:
                        "text-primary uppercase max-w-[568px] w-full whitespace-nowrap",
                    })}
                  >
                    {title}
                  </p>
                </HStack>
                <p
                  className={body({
                    variant: 16,
                    className:
                      "mt-3 text-primary-dark/70 font-manrope w-full max-w-[433px]",
                  })}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </VStack>
        <div className="flex-1 lg:absolute lg:right-0 px-10 mt-6">
          <img
            src={macbookPro}
            alt="feature"
            className="lg:translate-x-1/3 w-[70vw] 2xl:w-[1200px] "
          />
        </div>
      </HStack>
    </section>
  );
};

export default FeatureSection;
