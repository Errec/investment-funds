// Moldules
import React from 'react'

// Components
import HelpCircleIcon from 'mdi-react/HelpCircleIcon';
import ReactTooltip from 'react-tooltip';

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
                <a data-tip={tooltipText}>
                <HelpCircleIcon color={"#505152"} />
                <ReactTooltip
                    className={"tr-title__tooltip"}
                    type={'info'}
                    backgroundColor={"#fff"}
                    borderColor={"#505152"}
                    place={"bottom"}
                    border={true}
                    textColor={"#505152"}/>                    
                </a>
            </td>
        </tr>
    )
};

export default TableRowTitle;