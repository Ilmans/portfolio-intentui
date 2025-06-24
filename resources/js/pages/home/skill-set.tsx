import { Container } from "@/components/ui/container";
import React from "react";

function SkillSet() {
  return (
    <Container>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-muted-fg text-sm">
        <li className="underline underline-offset-4 decoration-teal-300">
          Web Programming
        </li>
        <li className="underline underline-offset-4 decoration-teal-300">
          Design Patterns
        </li>
        <li className="underline underline-offset-4 decoration-teal-300">
          Clean Code
        </li>
        <li className="underline underline-offset-4 decoration-teal-300">
          UI/UX Thinking
        </li>
        <li className="underline underline-offset-4 decoration-teal-300">
          API Design
        </li>
        <li className="underline underline-offset-4 decoration-teal-300">
          Code Architecture
        </li>
        <li className="underline underline-offset-4 decoration-teal-300">
          Problem Solving
        </li>
        <li className="underline underline-offset-4 decoration-teal-300">
          Performance Optimization
        </li>
        <li className="underline underline-offset-4 decoration-teal-300">
          Continuous Learning
        </li>
      </ul>
    </Container>
  );
}

export default SkillSet;
