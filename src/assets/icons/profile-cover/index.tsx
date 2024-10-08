import { SvgXml } from 'react-native-svg';
const iconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1170" height="1203" viewBox="0 0 1170 1203" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1170 0L1170 1203H4.14384e-05L0 0H1170Z" fill="url(#paint0_linear_1941_6)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M722.344 615.003H918.334L1022.25 435.019C1067.03 357.46 1040.45 258.285 962.894 213.506L734.689 81.7522C657.13 36.9733 557.955 63.5471 513.176 141.106L392.654 349.857V548.451C405.327 565.164 421.473 579.679 440.777 590.824L482.656 615.003H487.809C502.165 567.273 509.867 517.895 501.733 476.79C492.447 429.861 490.49 407.725 505.702 372.055C542.326 286.173 576.518 261.101 606.876 243.171C621.168 234.73 628.109 245.024 625.546 253.95C625.546 253.95 612.136 319.045 600.071 375.998C598.668 382.62 595.364 400.632 609.5 411.172C610.384 411.831 611.358 412.571 612.422 413.381C632.639 428.756 685.445 468.917 770.823 443.366C788.078 438.202 790.849 423.405 795.825 396.842L795.825 396.84C796.228 394.688 796.645 392.459 797.086 390.151L815.507 304.164C817.483 290.441 828.964 279.826 841.417 295.34C856.984 314.733 906.353 424.949 862.564 500.793C839.685 540.421 814.628 555.027 787.431 570.88C780.962 574.651 774.373 578.492 767.662 582.757C765.729 583.986 763.65 585.25 761.418 586.606L761.416 586.607C751.559 592.597 738.725 600.396 722.344 615.003Z" fill="url(#paint1_linear_1941_6)" fill-opacity="0.1"/>
<defs>
<linearGradient id="paint0_linear_1941_6" x1="-4.7864e-05" y1="472.063" x2="1170" y2="472.063" gradientUnits="userSpaceOnUse">
<stop stop-color="#0551A8"/>
<stop offset="1" stop-color="#2583F0"/>
</linearGradient>
<linearGradient id="paint1_linear_1941_6" x1="1180.74" y1="421.739" x2="450.888" y2="293.102" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`;

interface IconProps {
    width?: string | number,
    height?: string | number,
    color?: string,
}

export const ProfileCoverIcon: React.FC<IconProps> = ({ width, height, color }) => (
    <SvgXml xml={iconSvg} width={width || "50"} height={height || "50"} fill={color} />
);
