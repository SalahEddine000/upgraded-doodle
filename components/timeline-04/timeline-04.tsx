import { Badge } from "@/components/ui/badge";
import { Server, Cloud, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Cloud Support Engineer",
    company: "Arrow ECS",
    period: "2022 - Present",
    description:
      "Manage technical support queries for Microsoft Office 365, Azure, Intune, and Dynamics 365. I play a key role in building, defining, and delivering the Microsoft support service from the ground up, while also overseeing process development and documentation. My focus is on delivering high-quality support to both partners and end customers. I frequently liaise between internal teams to resolve queries outside of my remit and lead the training of new staff members in supporting Microsoft cloud products",
    technologies: ["Azure", "Intune", "M365", "Exchange", "PowerShell"],
    icon: Cloud,
  },
  {
    title: "IT Technician",
    company: "Concentrix | Formely Webhelp",
    period: "2019 - 2022",
    description:
      "Administering Active Directory, as well as managing macOS and iOS devices using the JAMF management system. My role includes creating and administering macOS and iOS client operating systems and applications, including Office 365, Exchange, and Windows Server technologies. I ensure the effective performance, integrity, and security of all IT systems while also setting up workstations, configuring necessary peripheral devices, deploying new software, and scheduling system upgrades and maintenance.",
    technologies: ["JAMF", "Active Directory", "Powershell", "MacOS", "iOS"],
    icon: Server,
  },
];

export default function Timeline() {
  return (
    <div className="max-w-(--breakpoint-sm) mx-auto py-12 md:py-20 px-6 ">
      <div className="relative ml-4">
        {/* Timeline line */}
        <div className="absolute left-0 inset-y-0 border-l-2 translate-all duration-500" />

        {experiences.map(
          (
            { company, description, period, technologies, title, icon: Icon },
            index
          ) => (
            <div key={index} className="relative pl-10 pb-12 last:pb-0">
              {/* Timeline Icon */}
              <div className="absolute left-px -translate-x-1/2 h-9 w-9 flex items-center justify-center rounded-full bg-muted ">
                <Icon className="h-5 w-5" />
              </div>

              {/* Content */}
              <div className="pt-2 sm:pt-1 space-y-3">
                <p className="text-base font-medium">{company}</p>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{period}</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground text-pretty">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
