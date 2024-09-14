import React, {useRef} from 'react';
import {useSelector} from "react-redux";
import {ErrorToast, IsEmpty} from "../../helper/FormHelper";
import {ExpensesByDateRequest} from "../../APIRequest/ReportAPIRequest";
import moment from "moment";
import exportFromJSON from "export-from-json";
import CurrencyFormat from "react-currency-format";

const ExpenseReport = () => {

    let formRef,toRef=useRef();
    let DataList=useSelector((state)=>(state.report.ExpensesByDateList));

    const CreateReport = async () => {
        let formRefValue = formRef.value;
        let toRefValue = toRef.value;
        if (IsEmpty(formRefValue)) {
            ErrorToast("Form Date Required")
        } else if (IsEmpty(toRefValue)) {
            ErrorToast("To Date Required")
        } else {
            await ExpensesByDateRequest(formRefValue,toRefValue);
        }
    }

    const OnExport = (exportType,data) => {
        const fileName = 'ExpenseReport'
        if(data.length>0){
            let ReportData=[]
            data.map((item)=>{
                let listItem={
                    "Amount":item['Amount'],
                    "Note":item['Note'],
                    "Category":item['Type'][0]['Name'],
                    "Date":moment(item['CreatedDate']).format('MMMM Do YYYY')
                }
                ReportData.push(listItem)
            })
            exportFromJSON({data: ReportData, fileName: fileName, exportType: exportType })
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-12 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <h5 >Expense Report by Date</h5>
                                <hr className="bg-light"/>

                                <div className="col-md-4 p-2">
                                    <label className="form-label">Date Form:</label>
                                    <input  ref={(input)=>formRef=input} className="form-control form-control-sm" type="date"/>
                                </div>
                                <div className="col-md-4 p-2">
                                    <label className="form-label">Date To:</label>
                                    <input  ref={(input)=>toRef=input} className="form-control form-control-sm" type="date"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 p-2">
                                    <button onClick={CreateReport} className="btn btn-sm my-3 btn-success">Create</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    DataList.length>0?(
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">

                                            <h6>Total: {DataList[0]['Total'].length>0?<CurrencyFormat value={DataList[0]['Total'][0]['TotalAmount']} displayType={'text'} thousandSeparator={true} prefix={'$ '} />:0} </h6>
                                            <button onClick={OnExport.bind(this,'csv',DataList[0]['Rows'])}  className="btn btn-sm my-2 btn-success">Download CSV</button>
                                            <button onClick={OnExport.bind(this,'xls',DataList[0]['Rows'])}   className="btn btn-sm my-2 ms-2 btn-success">Download XLS</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ):(
                        <div></div>
                    )
                }
            </div>
        </div>
    );
};

export default ExpenseReport;