// Moldules
import React from 'react'

// Components
import Tooltip from '@material-ui/core/Tooltip';
import Help from '@material-ui/icons/Help';

// Styles
import './TableRowTitle.sass'


const TableRowTitle = (props) => {
    const {
        title,
        tooltipText,
    } = props;

    return (
        <tr className="tr-title" style={{backgroundColor: 'honeydew'}}>
            <td className="tr-title__fund-type" colSpan={8}>
                {title}
                <Tooltip title={tooltipText}>
                <Help color="action"></Help>
                </Tooltip>
            </td>
        </tr>
    )
};

export default TableRowTitle;