"use client";
import { Accordion } from "./Accordion";

export default function AccordionComponent() {
  return (
    <Accordion>
      <Accordion.Item id="item1">
        <Accordion.Header id="item1">Click to Expand Item 1</Accordion.Header>
        <Accordion.Panel id="item1">Content of Item 1</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item id="item2">
        <Accordion.Header id="item2">Click to Expand Item 2</Accordion.Header>
        <Accordion.Panel id="item2">Content of Item 2</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
