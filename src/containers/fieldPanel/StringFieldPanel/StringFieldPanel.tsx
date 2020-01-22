// src/containers/fieldPanel/StringFieldPanel/StringFieldPanel.tsx

import * as React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { StoreState } from "../../../redux/state";
import * as actions from "../../../redux/modules/fieldPanel/actions";
import {ParamsDef} from "./definition";
import AutoForm, {ParamValues} from "../../../components/AutoForm";

const styles = createStyles({
    root: {

    },
});

export interface Props extends WithStyles<typeof styles>{
    onChange: (paramValues: ParamValues) => void,
}

class StringFieldPanel extends React.Component<Props, object> {
    state = {

    };

    componentDidMount(): void {

    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AutoForm params={ParamsDef} onChange={this.props.onChange}/>
            </div>
        )
    }
}

const mapStateToProps = (state: StoreState) => {
    return state.fieldPanel;
};

const mapDispatchToProps = (dispatch: Dispatch<actions.FieldPanelAction>) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(StringFieldPanel));
