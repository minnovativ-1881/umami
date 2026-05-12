// Custom branding: minnovativ-Logo statt Umami-SVG.
// Wird inline gerendert (kein next/image), damit es ueberall wie das
// urspruengliche SVG-Komponentenelement nutzbar bleibt.
const Logo = (props: any) => (
  <img
    src="/minnovativ-logo.png"
    alt="minnovativ"
    style={{ height: '1.4em', width: 'auto', display: 'block' }}
    {...props}
  />
);

export default Logo;
