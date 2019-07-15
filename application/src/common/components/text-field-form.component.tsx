import * as React from 'react';
import TextField from '@material-ui/core/TextField';

interface Props {
    name : string;
    label : string;
    onChange : (field : string, value) => void;
    value : string;
    error? : string;
    type?: string;
    rows?: number;
    rowsMax?: number;
    multiline?: boolean;
    onBlur?: (field: string, value) => void;
}

const handleChange = (field: string, onChange) => e => {
    onChange(field, e.target.value);
};
  
const handleBlur = (field: string, onBlur) => e => {
    if (onBlur) {
      onBlur(field, e.target.value);
    }
};

export const TextFieldForm: React.FC<Props> = (props) =>  {
    const {name, label, onChange,value, error, type, onBlur, multiline, rows, rowsMax} = props;
  
    return (
            <TextField
                label={label}
                margin="normal"
                value={value}
                type={type}
                multiline={multiline ? multiline : false}
                rows={rows}
                rowsMax={rowsMax}
                onChange={handleChange(name, onChange)}
                onBlur={handleBlur(name, onBlur)}
                error={Boolean(error)}
                helperText={error}
            />
    )
}

TextFieldForm.defaultProps = {
    type: 'text',
    rows: 3,
    rowsMax: 5,
}
  
  
  
  