import { IGitCardBodyProps } from '../../interfaces/interface';
import { useContext } from 'react';
import { userContext } from './GitCard';

export const GitCardBody = ({ className, description = '' }: IGitCardBodyProps) => {

  const { user } = useContext( userContext );

  return (
    <div className={`githubCart__body ${ className }`}>
        <div className="githubCard__body-text">
            <span>{ Boolean( user.description ) ? user.description : description }</span>
        </div>
    </div>
  )
}
