import { IGitCardFooterProps } from '../../interfaces/interface';
import { useContext } from 'react';
import { userContext } from './GitCard';

export const GitCardFooter = ({ className }: IGitCardFooterProps) => {

  const { user } = useContext( userContext );

  return (
    <div className={`githubCard__footer ${ className }`}>
        <a className="githubCard__footer-button" href={ user.profile }>Visitar perfil</a>
    </div>
  )
}
