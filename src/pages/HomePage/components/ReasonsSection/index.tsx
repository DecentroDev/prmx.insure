import { body, container, heading } from "@/components/utils/primitives";
import { VStack } from "@/components/utils/v-stack";
import limited_coverage from "/images/home/limited_coverage.svg";
import lengthy_claims_process from "/images/home/lengthy_claims_process.svg";
import high_costs from "/images/home/high_costs.svg";
import lack_of_transparency from "/images/home/lack_of_transparency.svg";

const DATA = [
  {
    icon: limited_coverage,
    title: "Limited Coverage",
    description:
      "Especially in developing regions, many at-risk communities lack access to affordable insurance, due to overhead present in conventional insurance.",
  },
  {
    icon: lengthy_claims_process,
    title: "Lengthy Claims Process",
    description:
      "Where present, traditional claims take weeks or months to resolve.",
  },
  {
    icon: high_costs,
    title: "High Costs",
    description:
      "Administrative overhead and intermediaries make premiums unaffordable for many in need.",
  },
  {
    icon: lack_of_transparency,
    title: "Lack of Transparency",
    description:
      "Policyholders face unclear terms, nondeterministic pricing structures and slow payouts.",
  },
];

const ReasonsSection = () => {
  return (
    <section
      id="feature"
      className={container({ className: "relative py-[60px] mt-5" })}
    >
      <h2
        className={heading({
          variant: 40,
          weight: 700,
          className: "text-primary w-full max-w-[656px] text-center mx-auto",
        })}
      >
        Conventional insurance fails when it’s needed most
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10 mt-[60px]">
        {DATA.map(({ icon, title, description }) => (
          <VStack
            spacing={18}
            key={title}
            className="min-h-[272px] border border-[#E0E3EB] rounded p-5"
          >
            <img
              src={icon}
              alt={title}
              width={60}
              height={60}
              className="object-cover"
            />
            <p
              className={heading({
                variant: 20,
                weight: 700,
                className: "text-primary",
              })}
            >
              {title}
            </p>
            <p
              className={body({
                variant: 16,
                className: "text-[#858EAD]",
              })}
            >
              {description}
            </p>
          </VStack>
        ))}
      </div>
    </section>
  );
};

export default ReasonsSection;
