export interface IGitUser {
    name: string;
    image: string;
    description: string | null,
    profile: string;
}
export interface IGitCardHeaderProps {
    image?: string;
    name?: string;
    className?: string;
}

export interface IGitCardBodyProps {
    description?: string;
    className?: string
}


export interface IGitCardFooterProps {
    profile?: string;
    className?: string;
}

export interface IGitCardContainerProps {
    children: JSX.Element[];
    className?: string;
    username: string;
}

export interface IGitCardHOC {
    ({ children, className, username }: IGitCardContainerProps): JSX.Element;
    header: ({ className }: IGitCardHeaderProps) => JSX.Element;
    body: ({ description }: IGitCardBodyProps) => JSX.Element;
    footer: ({ className }: IGitCardFooterProps) => JSX.Element;
}