// src/containers/fieldPanel/FieldPanelContainer.tsx

import * as React from 'react';
import {withStyles, WithStyles, createStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {Dispatch} from "redux";
import {StoreState} from "../../redux/state";
import * as actions from "../../redux/modules/fieldPanel/actions";
import ActionBox from "./ActionBox";
import Popover from "@material-ui/core/Popover";
import StringFieldPanel from "./StringFieldPanel";

const styles = createStyles({
    root: {},
    container: {
        width: 200,
    },
    popoverContent: {
        padding: 10,
    }
});

export interface Props extends WithStyles<typeof styles>, StoreState {
    closeFieldPanel: () => void
}

class FieldPanelContainer extends React.Component<Props, object> {
    state = {};

    componentDidMount(): void {

    }

    render() {
        const {classes, schemaTree, fieldPanel} = this.props;
        const {anchor} = fieldPanel;
        const {nodeSelected} = schemaTree;
        const nodeType = !!nodeSelected? nodeSelected.type : null;
        return (
            <div className={classes.root}>
                <Popover
                    open={Boolean(anchor)}
                    anchorEl={anchor}
                    onClose={this.props.closeFieldPanel}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <div className={classes.popoverContent}>

                        {!!nodeSelected &&
                        <div className={classes.container}>
                            <ActionBox/>
                            {nodeType === 'string' && <StringFieldPanel/>}
                        </div>
                        }
                    </div>
                </Popover>
            </div>
        )
    }
}

const mapStateToProps = (state: StoreState) => {
    return state;
};

const mapDispatchToProps = (dispatch: Dispatch<actions.FieldPanelAction>) => {
    return {
        closeFieldPanel: () => dispatch(actions.closeFieldPanel()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(FieldPanelContainer));
