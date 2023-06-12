import PokemonLogo from 'images/logo-without-bg.png';
import { PokemonLogoStyled } from './Logo.styled';

export default function Logo() {
  return (
    <PokemonLogoStyled>
      <img src={PokemonLogo} alt="Pokemon Logo" />
    </PokemonLogoStyled>
  );
}
