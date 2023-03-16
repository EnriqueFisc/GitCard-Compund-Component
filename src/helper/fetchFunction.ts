

export const fetchFunction = async( username = '' ) => {
    const url: string = `https://api.github.com/users/${ username }`;

    try {
        const response = await fetch( url );
        const { avatar_url, html_url, login, bio, } = await response.json();

        return {
            ok: true,
            user: {
                name: String( login ),
                image: String( avatar_url ),
                description: bio,
                profile: String( html_url ),
            }
        }
    } catch ( error ) {
            return {
                ok: false,
                error
            }
    }
}
