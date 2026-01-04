import { type IconBaseProps } from "react-icons";
import {
    FaRocket,
    FaBuilding,
    FaBriefcase,
    FaLink, 
    FaPlus,
    FaTrash,
    FaHandshake,
    FaExternalLinkAlt,
    FaChevronDown 
} from 'react-icons/fa';

export type IconNames = 
    | 'FaRocket' 
    | 'FaBuilding' 
    | 'FaBriefcase' 
    | 'FaLink' 
    | 'FaPlus' 
    | 'FaTrash' 
    | 'FaHandshake' 
    | 'FaExternalLinkAlt' 
    | 'FaChevronDown';

const iconMap: Record<IconNames, React.ComponentType<IconBaseProps>> = {
    FaRocket,
    FaBuilding,
    FaBriefcase,
    FaLink,
    FaPlus,
    FaTrash,
    FaHandshake,
    FaExternalLinkAlt,
    FaChevronDown
};

interface IconProps extends IconBaseProps {
    name: IconNames;
    size?: number;
}

export function Icon({name, size = 16, ...props}: IconProps){
    const IconComponent = iconMap[name];

    if(!IconComponent){
        console.warn(`Icon "${name}" not found in iconMap.`);
        return null;
    }

    return <IconComponent size={size} {...props}/>;
}