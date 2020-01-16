// src/components/NodeTypeTag/NodeTypeTag.tsx

import * as React from 'react';
import {withStyles, WithStyles, createStyles} from '@material-ui/core/styles';
import {NodeType} from "../../interface";
import {NodeTypeOption} from "../../constants";
import Chip from "@material-ui/core/Chip";

const styles = createStyles({
    root: {

    },
});

export interface Props extends WithStyles<typeof styles> {
    nodeType: NodeType
}

interface NodeTypeColorInterface {
    [key: string]: string
}

const TypeColorMap: NodeTypeColorInterface = {
    [NodeTypeOption.string]: 'green',
    [NodeTypeOption.number]: 'blue',
    [NodeTypeOption.integer]: 'geekblue',
    [NodeTypeOption.boolean]: 'purple',
    [NodeTypeOption.array]: 'orange',
    [NodeTypeOption.object]: 'cyan',
};

class NodeTypeTag extends React.Component<Props, object> {
    state = {

    };

    componentDidMount(): void {

    }

    render() {
        const {classes, nodeType} = this.props;
        return (
            <span className={classes.root}>
                <Chip label={nodeType} size={"small"} variant={"outlined"}/>
            </span>
        )
    }
}

export default withStyles(styles)(NodeTypeTag);
