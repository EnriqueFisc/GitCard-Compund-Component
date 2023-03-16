import { createContext } from 'react';
import { IGitCardContainerProps, IGitUser } from '../../interfaces/interface';
import { useGitUser } from '../../hooks/useGitUser';

interface IUserContextProps {
    user: IGitUser;
}

export const userContext = createContext( {} as IUserContextProps );
const { Provider } = userContext;

export const GitCard = ({ children, className, username }: IGitCardContainerProps) => {

    const { gitUser } = useGitUser({ username });

    return (
        <Provider value={{ user: gitUser }}>
            <div className={`githubCard__container ${ className }`}>
                
                {
                    children
                }
                
            </div>
        </Provider>
    )
}
