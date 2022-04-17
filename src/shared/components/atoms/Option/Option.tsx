import React from 'react';

interface OptionParams {
    text: string
}

const Option: React.FC<OptionParams> = ({text}: OptionParams): JSX.Element => {
    return (
        <option value={text}>{text}</option>
    );
};

export default Option;
