import GitCardHOC from './components/gitCard';

import './styles/styles.scss'


export const GitCardApp = () => {

    

    return (
      <>
          {/* <GitCard >
            <GitCardHeader />
            <GitCardBody />
            <GitCardFooter />
          </GitCard> */}

          <GitCardHOC username='enriquefisc'>
            <GitCardHOC.header />
            <GitCardHOC.body />
            <GitCardHOC.footer />
          </GitCardHOC>
      </>
    );
}

