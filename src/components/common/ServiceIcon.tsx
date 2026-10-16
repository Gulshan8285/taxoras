import React from "react";
import {
  FileCheck2,
  Receipt,
  FileSpreadsheet,
  CreditCard,
  BookOpenCheck,
  Building2,
  Scale,
  UsersRound,
  PieChart,
  BadgePercent,
  Rocket,
  Briefcase,
  Store,
  ShoppingBag,
  Laptop,
  Sparkles,
  Factory,
  TrendingUp,
  ShieldCheck,
  Clock,
  HelpCircle,
  CheckCircle2,
  LucideProps
} from "lucide-react";

interface ServiceIconProps extends LucideProps {
  name: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ name, ...props }) => {
  switch (name) {
    case "FileCheck2":
      return <FileCheck2 {...props} />;
    case "Receipt":
      return <Receipt {...props} />;
    case "FileSpreadsheet":
      return <FileSpreadsheet {...props} />;
    case "CreditCard":
      return <CreditCard {...props} />;
    case "BookOpenCheck":
      return <BookOpenCheck {...props} />;
    case "Building2":
      return <Building2 {...props} />;
    case "Scale":
      return <Scale {...props} />;
    case "UsersRound":
      return <UsersRound {...props} />;
    case "PieChart":
      return <PieChart {...props} />;
    case "BadgePercent":
      return <BadgePercent {...props} />;
    case "Rocket":
      return <Rocket {...props} />;
    case "Briefcase":
      return <Briefcase {...props} />;
    case "Store":
      return <Store {...props} />;
    case "ShoppingBag":
      return <ShoppingBag {...props} />;
    case "Laptop":
      return <Laptop {...props} />;
    case "Sparkles":
      return <Sparkles {...props} />;
    case "Factory":
      return <Factory {...props} />;
    case "TrendingUp":
      return <TrendingUp {...props} />;
    case "ShieldCheck":
      return <ShieldCheck {...props} />;
    case "Clock":
      return <Clock {...props} />;
    case "CheckCircle2":
      return <CheckCircle2 {...props} />;
    default:
      return <HelpCircle {...props} />;
  }
};
