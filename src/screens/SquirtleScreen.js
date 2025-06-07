import { useState } from 'react';

function SquirtleScreen() {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState('');

  const obtenerSquirtle = async () => {
    try {
      const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/squirtle');
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

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-2">Ver a Squirtle</h1>

      <button 
        onClick={obtenerSquirtle}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Mostrar Squirtle
      </button>

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

export default SquirtleScreen;
