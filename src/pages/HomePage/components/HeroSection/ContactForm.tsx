import Button from "@/components/ui/Button";
import { HStack } from "@/components/utils/h-stack";
import { Input } from "@nextui-org/react";
import arrowRightIcon from "/images/home/arrow-right.svg";

import { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!email || !/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email)) {
      toast.error("Please enter a valid email address.", {
        duration: 10000
      });
      return;
    }
    try {
      setLoading(true);
      await fetch("https://prmx-subscriber.vercel.app?email=" + email);
      toast.success("Thanks for subscribing our newsletter!");
      setEmail("");
      setLoading(false);
    } catch (err) {
      toast.error(
        "Subscribe failed, please enter valid email address or try again later."
      );
      console.log(err);
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <HStack className="mt-8 flex-col lg:flex-row justify-start items-start">
        <Button
          className="text-white w-full lg:w-fit"
          size="lg"
          disabled={loading}
          loading={loading}
          endIcon={<img src={arrowRightIcon} alt="arrow" className="ml-3" />}
          type="submit"
        >
          Get in touch
        </Button>
        <Input
          placeholder="Enter your email address"
          className="w-full lg:max-w-[378px]"
          classNames={{
            inputWrapper: "h-12 lg:h-[52px] rounded font-manrope py-[18px] px-6",
            input: "placeholder:text-[#98A2B3]",
          }}
          value={email}
          onValueChange={setEmail}
          radius="none"
        />
      </HStack>
    </form>
  );
};

export default ContactForm;
