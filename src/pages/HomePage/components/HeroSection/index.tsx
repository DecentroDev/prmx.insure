import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { HStack } from "@/components/utils/h-stack";
import { body, container, heading } from "@/components/utils/primitives";
import { Input } from "@nextui-org/react";
import arrowRightIcon from "/images/home/arrow-right.svg";
import famImg from "/images/home/fam_img.png";

const HeroSection = () => {
  return (
    <section className="h-[700px] lg:min-h-[800px] lg:h-screen bg-[url('/images/home/bg_hero.png')] overflow-hidden relative bg-no-repeat bg-center bg-cover w-full pt-navbar-mobile lg:pt-navbar flex items-center">
      <div
        className={container({
          className:
            "relative px-4 md:px-[80px] lg:px-[160px] h-full flex flex-col justify-center items-start",
        })}
      >
        <div className="max-w-[886px] w-full relative z-10">
          <Tag />
          <h1
            className={heading({
              variant: 48,
              weight: 700,
              className: "text-white mt-6",
            })}
          >
            Bridging the Gap: <br /> Insurance for Those Left Behind
          </h1>
          <p className={body({ variant: 20, className: "text-white mt-3" })}>
            Swift. Fair. Transparent. <br />
            Starting with rainfall insurance in Luzon, Philippines in Q2/2025.
          </p>

          <HStack className="mt-8 flex-col lg:flex-row justify-start items-start">
            <Button
              className="text-white w-full lg:w-fit"
              size="lg"
              endIcon={
                <img src={arrowRightIcon} alt="arrow" className="ml-3" />
              }
            >
              Get in touch
            </Button>
            <Input
              placeholder="Enter your email address"
              className="w-full lg:max-w-[378px]"
              classNames={{
                inputWrapper:
                  "h-12 lg:h-[52px] rounded font-manrope py-[18px] px-6",
                input: "placeholder:text-[#98A2B3]",
              }}
              radius="none"
            />
          </HStack>
        </div>
        <img
          src={famImg}
          width={529}
          height={529}
          alt="hero"
          className="absolute right-0 bottom-0"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black/20 block md:hidden"></div>
    </section>
  );
};

export default HeroSection;
