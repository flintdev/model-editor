// src/containers/fieldPanel/ObjectFieldPanel/ObjectFieldPanel.tsx

import * as React from 'react';
import {withStyles, WithStyles, createStyles} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import AutoForm from "../../../components/AutoForm";
import {ParamRef} from "./definition";
import {DefaultObject, NodeParams} from "../../../interface";

const styles = createStyles({
    root: {

    },
    buttonContainer: {
        marginTop: 10,
    }
});

export interface Props extends WithStyles<typeof styles>{

}

interface ParamValues {
    name?: string,
    type?: string,
}

interface State {
    paramValues: ParamValues
}
class ObjectFieldPanel extends React.Component<Props, object> {
    state: State = {
        paramValues: {}
    };

    componentDidMount(): void {

    }

    handleAddButtonClick = () => {
        const {paramValues} = this.state;
        const {name, type} = paramValues;
    };

    handleParamValuesChange = (paramValues: ParamValues) => {
        this.setState({paramValues});
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AutoForm
                    params={ParamRef}
                    onChange={this.handleParamValuesChange}
                />
                <div className={classes.buttonContainer}>
                    <Button
                        variant={"contained"}
                        color={"primary"}
                        size={"small"}
                        onClick={this.handleAddButtonClick}
                    >
                        <AddIcon/>&nbsp;Add Child Field
                    </Button>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(ObjectFieldPanel);
