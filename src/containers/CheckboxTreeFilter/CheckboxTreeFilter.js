// Modules
import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import CheckboxTree from 'react-checkbox-tree';

// Components
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';
import CheckBoxTwoToneIcon from '@material-ui/icons/CheckBoxTwoTone';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';

// Styles
import './CheckboxTreeFilter.sass';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';



const CheckboxTreeFilter = (props) => {
    const {
        dispatch,
        fundsReducer: {
            fundsDetailFull
        },
        filtersReducer: {
            fundsFilterData:{
                filteredData
            }
        }
    } = props;

    // const nodes = [{
    //     value: 'mars',
    //     label: 'Mars',
    //     children: [
    //         { value: 'phobos', label: 'Phobos' },
    //         { value: 'deimos', label: 'Deimos' },
    //     ],
    // }];
    
    const [checked, setChecked] = useState(fundsDetailFull.fixedIncomeNode[0].children.map((child) =>{
        return child.value;
    }));
    const [expanded, setExpanded] = useState([]);

    return (
        <Paper elevation={1} className="checkbox-tree-filter">
        {!fundsDetailFull.isLoading ? (
            <CheckboxTree
                nodes={fundsDetailFull.fixedIncomeNode}
                checked={checked}
                expanded={expanded}
                onCheck={(checked) => {setChecked(checked)}}
                onExpand={(expanded) => {setExpanded(expanded)}}
                icons={{
                    check: <CheckBoxOutlinedIcon style={{color:'#119c9f'}} className="rct-icon rct-icon-check" icon="check-square" />,
                    uncheck: <CheckBoxOutlineBlankOutlinedIcon className="rct-icon rct-icon-uncheck" icon={['fas', 'square']} />,
                    halfCheck: <CheckBoxTwoToneIcon className="rct-icon rct-icon-half-check" icon="check-square" />,
                    expandClose: <KeyboardArrowRightIcon className="rct-icon rct-icon-expand-close" icon="chevron-right" />,
                    expandOpen: <KeyboardArrowDownIcon className="rct-icon rct-icon-expand-open" icon="chevron-down" />,
                    expandAll: <AddIcon className="rct-icon rct-icon-expand-all" icon="plus-square" />,
                    collapseAll: <RemoveIcon className="rct-icon rct-icon-collapse-all" icon="minus-square" />,
                    parentClose: '',
                    parentOpen: '',
                    leaf: '',
                }}
            />
        ):(
            <></>
        )}
        </Paper>
    );
};

const mapStateToProps = (state) => {
    return {
        fundsReducer: state.fundsReducer,
        filtersReducer: state.filtersReducer,
    };
}

export default connect(mapStateToProps)(CheckboxTreeFilter);
