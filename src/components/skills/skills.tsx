import React, { useEffect, useState } from "react";
import { SkillsProps } from "./skills.types";

export const Skills = (props: SkillsProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1000);
  }, []);

  return (
    <div>
      <ul>
        {props.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {!isLoggedIn ? <button>Login</button> : <button>Start Learning..</button>}
    </div>
  );
};
