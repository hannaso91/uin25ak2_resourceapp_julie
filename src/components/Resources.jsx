import React from "react";
import resources from "../assets/ressurser";
import "../styles/resources.scss"; // Importer SCSS riktig

export default function Resources({ category }) {
  const filteredResources = resources.filter(
    (resource) => resource.category === category
  );

  return (
    <div className="resources"> {/* Legg til className */}
      <h2>{category.toUpperCase()} Resources</h2>
      <ul>
        {filteredResources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
