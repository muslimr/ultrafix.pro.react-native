import { SvgXml } from 'react-native-svg';
const iconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none">
<path d="M16.7072 7.74486C17.0965 8.13152 17.0977 8.75967 16.7101 9.14788C16.3224 9.5361 15.6926 9.53736 15.3034 9.15071L9.52482 3.41035L9.52482 18.0079C9.52482 18.5558 9.07949 19 8.53014 19C7.9808 19 7.53546 18.5558 7.53546 18.0079L7.53546 3.35046L1.69661 9.15071C1.30738 9.53736 0.677587 9.5361 0.289922 9.14789C-0.097743 8.75967 -0.0964757 8.13152 0.292752 7.74486L7.79807 0.289167C8.18619 -0.0963878 8.81381 -0.0963879 9.20193 0.289167L16.7072 7.74486Z" />
</svg>
`;

interface IconProps {
    size?: string | number,
    color?: string,
}

export const ArrowMoveTopIcon: React.FC<IconProps> = ({ size, color }) => (
    <SvgXml xml={iconSvg} width={size || "50"} height={size || "50"} fill={color} />
);
