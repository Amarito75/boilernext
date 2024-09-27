import React from "react";
import { LinkServices } from "../link-services";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { PreviewDashboard } from "./preview-dashboard";
import { BorderBeam } from "../magicui/border-beam";

const HeroSection = () => {
  return (
    <div className="mt-16 lg:mt-32 flex flex-col items-center justify-center text-center space-y-8">
      <h1 className="text-8xl text-primary font-medium mx-16">
        The ultimate boilerplate to develop your SaaS
      </h1>
      <h2 className="text-primary text-3xl">
        Develop your SaaS with all the tools you need
      </h2>
      <div className="flex gap-4">
        <Button size="lg">
          Get Started
          <ArrowRight className="ml-2" size={18} />
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="text-black dark:text-white"
        >
          Learn More
        </Button>
      </div>
      <PreviewDashboard />
    </div>
  );
};

export default HeroSection;
