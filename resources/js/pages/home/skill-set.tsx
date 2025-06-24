import { Container } from "@/components/ui/container";
import React from "react";

function SkillSet() {
  return (
    <Container>
      <div>
        <h2 className="font-bold text-2xl mt-8 mb-6">My Skill Set</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-muted-fg text-sm">
          <li className="underline underline-offset-4">Web Programming</li>
          <li className="underline underline-offset-4">Design Patterns</li>
          <li className="underline underline-offset-4">Clean Code</li>
          <li className="underline underline-offset-4">UI/UX Thinking</li>
          <li className="underline underline-offset-4">API Design</li>
          <li className="underline underline-offset-4">Code Architecture</li>
          <li className="underline underline-offset-4">Problem Solving</li>
          <li className="underline underline-offset-4">
            Performance Optimization
          </li>
          <li className="underline underline-offset-4">Continuous Learning</li>
        </ul>
      </div>
    </Container>
  );
}

export default SkillSet;
