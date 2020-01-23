// src/components/AutoForm/AutoForm.tsx

import * as React from 'react';
import {withStyles, WithStyles, createStyles} from '@material-ui/core/styles';
import {DataType, Param} from "./interface";
import TextField from "@material-ui/core/TextField";
import {DefaultObject, NodeParams} from "../../interface";

const styles = createStyles({
    root: {

    },
    form: {
        marginTop: 5,
        marginBottom: 5,
    },
});

export interface Props extends WithStyles<typeof styles>{
    params: Param[],
    paramValues?: DefaultObject,
    onChange: (paramValues: DefaultObject) => void,
}

interface State {
    paramValues: DefaultObject
}

class AutoForm extends React.Component<Props, object> {
    state: State = {
        paramValues: {},
    };

    componentDidMount(): void {
        let currentParamValues: DefaultObject = {};
        const {params, paramValues} = this.props;
        params.forEach(param => {
            const {defaultValue, key} = param;
            if (!!paramValues && paramValues.hasOwnProperty(key)) {
                currentParamValues![key] = paramValues![key];
            } else if (!!defaultValue) {
                currentParamValues![key] = defaultValue;
            }
        });
        this.setState({paramValues: currentParamValues});
        this.props.onChange(currentParamValues);
    }

    handleParamValueChange = (key: string, type: DataType) => (event: React.ChangeEvent<HTMLInputElement>) => {
        let {paramValues} = this.state;
        let value: string|number = event.target.value;
        if (type === "number") value = parseInt(value);
        paramValues![key] = value;
        this.setState({paramValues});
        this.props.onChange(paramValues);
    };

    renderStringInput = (param: Param) => {
        const {classes} = this.props;
        const {key, name, required, defaultValue, type} = param;
        let value: string | number | undefined = this.state.paramValues![key];
        value = !!value? value : defaultValue;
        return (
            <TextField
                className={classes.form}
                label={name}
                value={value}
                onChange={this.handleParamValueChange(key, type)}
                required={!!required}
                variant={"outlined"}
                fullWidth={true}
            />
        )
    };

    renderNumberInput = (param: Param) => {
        const {classes} = this.props;
        const {key, name, required, defaultValue, type} = param;
        let value: string | number | undefined = this.state.paramValues![key];
        value = !!value? value : defaultValue;
        return (
            <TextField
                className={classes.form}
                label={name}
                value={value}
                onChange={this.handleParamValueChange(key, type)}
                required={!!required}
                variant={"outlined"}
                type={"number"}
                fullWidth={true}
            />
        )
    };

    renderSelect = (param: Param) => {
        const {classes} = this.props;
        const {key, name, required, defaultValue, options, type} = param;
        let value: string | number | undefined = this.state.paramValues![key];
        value = !!value? value : defaultValue;
        return (
            <TextField
                className={classes.form}
                label={name}
                value={value}
                onChange={this.handleParamValueChange(key, type)}
                required={!!required}
                variant={"outlined"}
                select
                SelectProps={{
                    native: true,
                }}
                fullWidth={true}
            >
                {!!options && options.map((option, i) => {
                    return <option key={i} value={option}>{option}</option>
                })}
            </TextField>
        )
    };

    getParamForm = (param: Param) => {
        const {type} = param;
        const funcMap = {
            string: this.renderStringInput,
            number: this.renderNumberInput,
            select: this.renderSelect,
        };
        return funcMap[type](param);
    };

    render() {
        const {classes, params} = this.props;
        return (
            <div className={classes.root}>
                {params.map((param, i) => {
                    return (
                        <div key={i}>
                            {this.getParamForm(param)}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default withStyles(styles)(AutoForm);
