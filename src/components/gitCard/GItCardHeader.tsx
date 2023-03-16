import { useContext } from 'react';
import { IGitCardHeaderProps } from '../../interfaces/interface';
import { userContext } from './GitCard';

export const GitCardHeader = ({ className }: IGitCardHeaderProps ) => {

  const { user } = useContext( userContext )
  const { image, name } = user;

  return (
    <div className={`githubCardd__header ${ className }`}>
        <div className="githubCard__header-image">
            <img src={ image } alt="user-img" />
        </div>
        <div className="githuCard__header-name">
            <span>{ name }</span>
        </div>
    </div>
  )
}
