// src/containers/fieldPanel/FieldPanelContainer.tsx

import * as React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { StoreState } from "../../redux/state";
import * as actions from "../../redux/modules/fieldPanel/actions";
import ActionBox from "./ActionBox";

const styles = createStyles({
    root: {

    },
    container: {
        width: 300,
    }
});

export interface Props extends WithStyles<typeof styles>, StoreState {

}

class FieldPanelContainer extends React.Component<Props, object> {
    state = {

    };

    componentDidMount(): void {

    }

    render() {
        const {classes, schemaTree} = this.props;
        const {nodeSelected} = schemaTree;
        return (
            <div className={classes.root}>
                {!!nodeSelected &&
                <div className={classes.container}>
                    <ActionBox/>
                    {nodeSelected.name}
                </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state: StoreState) => {
    return state;
};

const mapDispatchToProps = (dispatch: Dispatch<actions.FieldPanelAction>) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(FieldPanelContainer));
