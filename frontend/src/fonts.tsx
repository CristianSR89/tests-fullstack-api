import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      /* roboto */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('/assets/fonts/Roboto-Medium.ttf') format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* PublicaSansRound-Bd */
      @font-face {
        font-family: 'PublicaSansRound';
        font-style: bold;
        font-weight: 800; /* Use numeric value for bold */
        font-display: swap;
        src: url('/assets/fonts/PublicaSansRound-Bd.otf') format('opentype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* PublicaSansRound-BdIt */
      @font-face {
        font-family: 'PublicaSansRound';
        font-style: italic;
        font-weight: 800; /* Use numeric value for bold */
        font-display: swap;
        src: url('/assets/fonts/PublicaSansRound-BdIt.otf') format('opentype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* PublicaSansRound-Rg */
      @font-face {
        font-family: 'PublicaSansRound';
        font-style: normal;
        font-weight: 400; /* Use numeric value for normal */
        font-display: swap;
        src: url('/assets/fonts/PublicaSansRound-Rg.otf') format('opentype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
    `}
  />
);

export default Fonts;