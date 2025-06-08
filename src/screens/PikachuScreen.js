import React, { useState, useEffect } from 'react';

function PokemonInfo() {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState('');

  const fetchPokemon = async () => {
    try {
      const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
      if (!respuesta.ok) throw new Error('Pokémon no encontrado');
      const datos = await respuesta.json();
      setPokemon({
        nombre: datos.name,
        id: datos.id,
        tipos: datos.types.map(t => t.type.name),
        altura: datos.height,
        peso: datos.weight,
        imagen: datos.sprites.front_default
      });
      setError('');
    } catch (e) {
      setPokemon(null);
      setError(e.message);
    }
  };

  // Llamada a la API cuando el componente se monta
  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-2">Información de Pikachu</h1>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {pokemon && (
        <div className="mt-4 border p-4 rounded shadow">
          <img src={pokemon.imagen} alt={pokemon.nombre} className="w-24 h-24" />
          <h2 className="text-lg font-semibold capitalize">{pokemon.nombre}</h2>
          <p>ID: {pokemon.id}</p>
          <p>Tipos: {pokemon.tipos.join(', ')}</p>
          <p>Altura: {pokemon.altura}</p>
          <p>Peso: {pokemon.peso}</p>
        </div>
      )}
    </div>
  );
}

export default PokemonInfo;
