import React from "react";

const ShowResult = props => (
  <div>
    <h3>liste des résultats</h3>
    <ul>
      {props.listeResultat.map((resultat, index) => (
        <li key={`resultat_${index}`}>
          <p>
            <span>#{resultat.id} => </span>
            {resultat.number}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

export default ShowResult;
