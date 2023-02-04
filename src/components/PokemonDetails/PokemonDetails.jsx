import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getInvoiceById } from 'fakeApi';

export const PokemonDetails = () => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    getInvoiceById(pokemonId).then(setPokemon);
  }, [pokemonId]);

  if (!pokemon) {
    return null;
  }

  const { recipient, account, total, date } = pokemon;

  return (
    <div>
      <p>
        <b>Recipient:</b> {recipient}
      </p>
      <p>
        <b>Account number:</b> ${account}
      </p>
      <p>
        <b>Total due:</b> {total}$
      </p>
      <p>
        <b>Invoice date:</b> {new Date(date.created).toLocaleDateString()}
      </p>
      <p>
        <b>Due date:</b> {new Date(date.due).toLocaleDateString()}
      </p>
    </div>
  );
};
