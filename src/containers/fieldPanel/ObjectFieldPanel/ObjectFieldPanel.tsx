// src/containers/fieldPanel/ObjectFieldPanel/ObjectFieldPanel.tsx

import * as React from 'react';
import {withStyles, WithStyles, createStyles} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const styles = createStyles({
    root: {

    },
    buttonContainer: {
        marginTop: 10,
    }
});

export interface Props extends WithStyles<typeof styles>{

}

class ObjectFieldPanel extends React.Component<Props, object> {
    state = {

    };

    componentDidMount(): void {

    }

    handleAddButtonClick = () => {

    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
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
