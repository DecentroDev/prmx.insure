import { HStack } from "@/components/utils/h-stack";
import { cn } from "@/libs/utils";
import logoPokadot from "/images/home/logo_polkadot.svg";

interface Props {
  theme?: "dark" | "gradient";
}

const Tag = ({ theme = "dark" }: Props) => {
  return (
    <HStack
      spacing={4}
      className={cn(
        "p-[6px] border text-white inline-flex rounded text-[13px]",
        {
          "bg-white/40 backdrop-blur-[4.45px] border-white/40":
            theme === "dark",
          "bg-gradient-primary": theme === "gradient",
        }
      )}
    >
      <p>Secured by</p>
      <img src={logoPokadot} width={59} height={13} />
    </HStack>
  );
};

export default Tag;
