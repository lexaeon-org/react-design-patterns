import { FC, ReactNode } from "react";

export type AccordionContextType = {
  activeItem: string | null;
  toggleItem: (id: string) => void;
};

export type AccordionProps = {
  children: ReactNode;
};

export interface AccordionComponent extends FC<AccordionProps> {
  AccordionItem?: FC<{ id: string; children: ReactNode }>;
  AccordionHeader?: FC<{ id: string; children: ReactNode }>;
  AccordionPanel?: FC<{ id: string; children: ReactNode }>;
}
