import { FadeInSection } from "@/components/fade-in";
import React from "react";
import { IconCloud } from "@/components/ui/icon-cloud";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CertificationCard from "@/components/certificationCard";

const CertificationSection = () => {
  const slugs = [
    "vm",
    "blob",
    "vnet",
    "sdk",
    "backup",
    "cdn",
    "teams",
    "dotnet",
    "office",
    "microsoft",
    "k8s",
    "azure",
  ];

  const certifications = [
    {
      product: "Azure",
      certification: [
        "AZ-900",
        "AZ-104",
        "AZ-204",
        "AZ-305",
        "AZ-400",
        "AZ-700",
      ],
    },
    {
      product: "Microsoft365",
      certification: ["MS-900", "SC-200"],
    },
    {
      product: "Power Platform",
      certification: ["PL-900"],
    },
    {
      product: "AI",
      certification: ["AI-900"],
    },
  ];

  const azure = ["AZ-900", "AZ-104", "AZ-204", "AZ-305", "AZ-400", "AZ-700"];

  const m365pl = ["MS-900", "SC-200", "PL-900"];

  const ai = ["AI-900"];

  const tabs = [
    {
      name: "Azure",
      value: "azure",
      content: (
        <>
          <ul>
            {azure.map((cert, index) => (
              <li
                key={index}
                className="mb-1 list-disc list-inside text-lg font-medium"
              >
                {cert}
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      name: "M365 & Power Platform",
      value: "m365 & power platform",
      content: (
        <>
          <ul>
            {m365pl.map((cert, index) => (
              <li
                key={index}
                className="mb-1 list-disc list-inside text-lg font-medium"
              >
                {cert}
              </li>
            ))}
          </ul>
        </>
      ),
    },

    {
      name: "AI",
      value: "ai",
      content: (
        <>
          <ul>
            {ai.map((cert, index) => (
              <li
                key={index}
                className="mb-1 list-disc list-inside text-lg font-medium"
              >
                {cert}
              </li>
            ))}
          </ul>
        </>
      ),
    },
  ];

  const images = slugs.map((slug) => `/logos/${slug}.svg`);
  return (
    <div>
      <section
        id="certifications"
        className="min-h-screen py-32 flex flex-col gap-8 items-center justify-center"
      >
        {/* <FadeInSection>
          <div className="flex flex-col items-center justify-center">
            <div className="flex md:flex-row flex-col-reverse justify-center items-center ">
              <Tabs defaultValue="azure" className="max-w-md ">
                <TabsList>
                  {tabs.map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="text-md"
                    >
                      {tab.name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {tabs.map((tab) => (
                  <TabsContent
                    key={tab.value}
                    value={tab.value}
                    className="mt-6 h-[220px] md:h-[260px] overflow-auto flex-none"
                  >
                    <div className="h-full flex items-start">
                      <div className="text-muted-foreground text-lg">
                        {tab.content}
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
              <IconCloud images={images} />
            </div>
          </div>
        </FadeInSection> */}

        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {certifications.map((c) => (
            <CertificationCard
              key={c.product}
              product={c.product}
              provider="Microsoft"
              description={`${c.product} certifications`}
              certifications={c.certification}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CertificationSection;
