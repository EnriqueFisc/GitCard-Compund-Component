import { IGitCardHOC } from '../../interfaces/interface';
import { GitCard } from './GitCard';
import { GitCardHeader } from './GItCardHeader';
import { GitCardBody } from './GitCardBody';
import { GitCardFooter } from './GitCardFooter';


export const GitCardHOC: IGitCardHOC = Object.assign( GitCard, {
    header: GitCardHeader,
    body: GitCardBody,
    footer: GitCardFooter,
});

export default GitCardHOC;