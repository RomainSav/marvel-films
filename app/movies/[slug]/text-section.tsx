import type { ReactElement } from "react";
import type { TextSectionProps } from "./text-secton.type";

export const TextSection = ({ title, description }: TextSectionProps): ReactElement => {
  return (
    <div>
      <p className="text-white font-medium">{title}</p>
      <p className="text-white-1">{description}</p>
    </div>
  );
};