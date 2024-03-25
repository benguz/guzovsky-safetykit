import React, { useState, useEffect } from 'react';


function PlanetView({ loading, planet, error }) {
    const renderLoading = () => <div>Loading...</div>;
  
    const renderError = () => <div>I&apos;m sorry! Please try again.</div>;
  
    const renderPlanet = () => (
      <div>
        <h2>{planet.name}</h2>
        <div>Climate: {planet.climate}</div>
        <div>Terrain: {planet.terrain}</div>
      </div>
    );
  
    if (loading) return renderLoading();
    else if (error) return renderError();
    else if (planet) return renderPlanet();
    // Fallback render in case none of the above conditions are true
    return <div>Unknown state</div>;
  }
  
function DagobahContainer() {
  const [loading, setLoading] = useState(true);
  const [planet, setPlanet] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/5")
      .then(res => res.json())
      .then(
        planet => {
          setLoading(false);
          setPlanet(planet);
        },
        error => {
          setLoading(false);
          setError(error);
        }
      );
  }, []); // The empty dependency array means this effect runs once on mount.

  return <PlanetView loading={loading} planet={planet} error={error} />;
}

export default DagobahContainer;

