// Modules
import React, { useState } from 'react';
import shortid from 'shortid';
import moment from 'moment';
import numeral from 'numeral';


// Components
import Modal from '@material-ui/core/Modal';
import StarCircleIcon from 'mdi-react/StarCircleIcon';
import EarthPlusIcon from 'mdi-react/EarthPlusIcon';
import ReplyCircleIcon from 'mdi-react/ReplyCircleIcon';
import BlockIcon from 'mdi-react/BlockIcon';
import FundRowDetail from '../FundRowDetail/FundRowDetail'
import Tooltip from '@material-ui/core/Tooltip';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import RentabilityCalc from '../RentabilityCalc/RentabilityCalc'
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

// Styles
import './TableRowData.sass';

// Helpers
import returnColorBorder from '../../../helpers/returnColorBorder.js';

const useStyles = makeStyles((theme) => ({
    modal: {
        borderRadius: '4px',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        padding: '32px',
    },
    paper: {
        borderRadius: '4px',
        border: 'none',
        backgroundColor: theme.palette.background.paper,
        padding: '32px 128px',
    },
}));

 const TableRowData = (props) => {
     const {
         fundMain,
         cdi,
         ibov,
    } = props;
    const classes = useStyles();
    const [showDetails, setShowDetails] = useState(null)
    const [expand, setExpand] = useState(false)
    const [openModal, setOpenModal] = useState(false);
    const handleRowClick = (id) => {
        if (id === showDetails) {
            setExpand(!expand);
        } else {
            setShowDetails(id);
            setExpand(true);
        }
    }

    const handleOpenModal = (e) => {
        e.stopPropagation();
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };
    return (
        <>
        {fundMain.length ? (
            fundMain.map((fundData, index) => (
                <>
                <tr onClick={() => handleRowClick(fundData.id)} className="tr-data main-row hide-for-small-only" key={fundData.id}>
                    <td style={{borderLeftColor: returnColorBorder(fundData.specification.fund_risk_profile.score_range_order) }} className="tr-data__td tr-data__color">
                        <div>
                            {fundData.simple_name}
                            {fundData.specification.is_qualified ? (<StarCircleIcon style={{height: "1rem"}} color="#639d31"></StarCircleIcon>):('')}
                            {fundData.esg_seal ? (<EarthPlusIcon style={{height: "1rem"}} color="#639d31"></EarthPlusIcon>):('')}
                            <br></br>
                            {fundData.specification.fund_type} | {fundData.specification.fund_class}
                        </div>
                    </td>

                    <td className="tr-data__td">
                        {moment(fundData.quota_date).format('DD/MM/YYYY')}
                    </td>

                    <td className="tr-data__td">
                        {(Number(fundData.profitabilities.month) * 100).toFixed(2)}
                        <br/>
                        <RentabilityCalc
                            type="mês"
                            benchmarkName={fundData.benchmark.name}
                            benchmarkProfitability={(fundData.benchmark.name.includes('CDI') || fundData.benchmark.name.includes('IMA-B')) ?
                                                    cdi.current_month_profitability :
                                                    ibov.current_month_profitability}
                            fundProfitabily={fundData.profitabilities.month}/>
                    </td>

                    <td className="tr-data__td hide-for-1024">
                        {(Number(fundData.profitabilities.year) * 100).toFixed(2)}
                        <br/>
                        <RentabilityCalc
                            type={(new Date()).getFullYear()}
                            benchmarkName={fundData.benchmark.name}
                            benchmarkProfitability={(fundData.benchmark.name.includes('CDI') || fundData.benchmark.name.includes('IMA-B')) ?
                                                    cdi.current_year_profitability :
                                                    ibov.current_year_profitability}
                            fundProfitabily={fundData.profitabilities.year}/>
                    </td>

                    <td className="tr-data__td">
                        {(Number(fundData.profitabilities.m12) * 100).toFixed(2)}
                        <br/>
                        <RentabilityCalc
                            type="12M"
                            benchmarkName={fundData.benchmark.name}
                            benchmarkProfitability={(fundData.benchmark.name.includes('CDI') || fundData.benchmark.name.includes('IMA-B')) ?
                                                    cdi.profitability_12_months :
                                                    ibov.profitability_12_months}
                            fundProfitabily={fundData.profitabilities.m12}/>
                    </td>

                    <td className="tr-data__td">
                        {numeral(Number(fundData.operability.minimum_initial_application_amount).toFixed(2)).format('0,000.00')}
                    </td>

                    <td className="tr-data__td">
                    {fundData.operability.retrieval_quotation_days_str.substring(0, 2).includes('D+') ? (
                        fundData.operability.retrieval_quotation_days_str.substring(0, 5).replace(/(\d)\D+$/g, '$1')
                    ):(
                        <Tooltip title={fundData.operability.retrieval_quotation_days_str}>
                            <InfoOutlinedIcon></InfoOutlinedIcon>
                        </Tooltip>
                    )}
                    </td>

                    <td className="tr-data__td text--center">
                        {fundData.is_closed_to_capture ? (
                            <BlockIcon></BlockIcon>
                        ):(
                            <ReplyCircleIcon
                                onClick={handleOpenModal}
                                style={{height: "1.6rem", transform: "rotate(90deg)"}}
                                color="#119c9f"/>
                        )}
                    </td>
                </tr>
                <tr className="tr-data hide-for-small-only" key={shortid.generate()}>    
                <FundRowDetail
                    className="fund-row-detail"
                    expand={expand}
                    fundData={fundData}
                    isVisible={showDetails}
                    id={fundData.id}/>
                </tr>
                <Modal
                    aria-labelledby="subscribe-modal-title"
                    aria-describedby="subscribe-modal-description"
                    open={openModal}
                    className={classes.modal + " tr-data__modal-application"}
                    onClose={handleCloseModal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{timeout: 500}}>
                    <Fade in={openModal}>
                        <div className={classes.paper}>
                            <p id="subscribe-modal-description">Para aplicar neste Fundo</p>
                            <p id="subscribe-modal-description">faça o seu cadastro online e sem custo.</p>
                            <button>CADASTRE-SE</button>
                            <br/>
                            <p id="subscribe-modal-description">faça o seu cadastro online e sem custo.</p>
                        </div>
                    </Fade>
                </Modal>
                </>
            ))

        ) : (
            <></>
        )}
        </>
    )
}

export default TableRowData