"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
} from "react";

interface AccordionContextType {
  activeItem: string | null;
  toggleItem: (id: string) => void;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

const Accordion: FC<{ children: ReactNode }> & {
  Item: FC<{ id: string; children: ReactNode }>;
  Header: FC<{ id: string; children: ReactNode }>;
  Panel: FC<{ id: string; children: ReactNode }>;
} = ({ children }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setActiveItem((prev) => (prev === id ? null : id));
  };

  return (
    <AccordionContext.Provider value={{ activeItem, toggleItem }}>
      <div className="flex items-center justify-center h-screen">
        <div>
            <h2 className="text-center">Simple Accordion</h2>
            {children}
        </div>
      </div>
    </AccordionContext.Provider>
  );
};

const Item: FC<{ id: string; children: ReactNode }> = ({ children }) => (
  <div className="accordion-item">{children}</div>
);

const Header: FC<{ id: string; children: ReactNode }> = ({ id, children }) => {
  const context = useContext(AccordionContext);
  if (!context) throw new Error("AccordionHeader must be inside Accordion");

  return (
    <button className="accordion-header" onClick={() => context.toggleItem(id)}>
      {children}
    </button>
  );
};

const Panel: FC<{ id: string; children: ReactNode }> = ({ id, children }) => {
  const context = useContext(AccordionContext);
  if (!context) throw new Error("AccordionPanel must be inside Accordion");

  return context.activeItem === id ? (
    <div className="accordion-panel">{children}</div>
  ) : null;
};

Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Panel = Panel;

export { Accordion };
