import {SelectStyled} from './Select.styled';
import React, {ChangeEvent} from 'react';
import Option from '../../atoms/Option/Option';

interface TableSortingParams {
    selectId: string,
    options: string[]
    onChange: Function
}

const Select: React.FC<TableSortingParams> = ({selectId, options, onChange}: TableSortingParams): JSX.Element => {
    return (
        <SelectStyled id={selectId} onChange={(value: ChangeEvent<HTMLSelectElement>) => onChange(value.target.options.selectedIndex)}>
            {options.map((option: string, index: number) => {
                return <Option key={index} text={option}/>;
            })}
        </SelectStyled>
    );
};

export default Select;
