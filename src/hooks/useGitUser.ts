import { useEffect, useState } from "react";
import { fetchFunction } from "../helper/fetchFunction";
import { IGitUser } from "../interfaces/interface";


export const useGitUser = ({ username }: { username: string }) => {
    const [ gitUser, setGitUser ] = useState<IGitUser>({
        name: '',
        image: '',
        profile: '',
        description: '' || null,
    });

    useEffect(() => {
        fetchFunction( username )
            .then( response => {
                if ( response.ok ) {
                    const { user } = response;
                    setGitUser({
                        name: user!.name,
                        image: user!.image,
                        description: user!.description,
                        profile: user!.profile,
                    });
                }else {
                    console.log( response.error );
                }
                
            });
    }, []);

    return {
        gitUser,
    }
}
