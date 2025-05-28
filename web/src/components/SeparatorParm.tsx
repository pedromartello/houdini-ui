import React from 'react';
import hou from '../types/Houdini';

export interface SeparatorParmProps {
    template: hou.SeparatorParmTemplate;
}

export const SeparatorParm: React.FC<SeparatorParmProps> = ({template}) => {
    if (template.is_hidden) {
        return <hr className="separator-parm" />;
    }
    return <></>;
};

export default SeparatorParm;
