import React, { Fragment, useEffect, useRef, useState } from 'react';
import { CreateSaleRequest, CustomerDropDownRequest, ProductDropDownRequest } from "../../APIRequest/SaleAPIRequest";
import { useSelector } from "react-redux";

import { ErrorToast, IsEmpty } from "../../helper/FormHelper";
import store from "../../redux/store/store";
import { OnChangeSaleInput, RemoveSaleItem, SetSaleItemList } from "../../redux/state-slice/sale-slice";
import { BsCartCheck, BsTrash } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';



const SalesCreateUpdate = () => {

    let productRef, qtyRef, unitPriceRef = useRef();
    const navigate = useNavigate();

    // Create a new Date object and format the date
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    const [vat, setVat] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [otherCost, setOtherCost] = useState(0);
    const [shippingCost, setShippingCost] = useState(0);
    const [CustomerID, setCustomerID] = useState("");
    const [note, setNote] = useState(`Sales create successful ${formattedDate}`);

    useEffect(() => {
        (async () => {
            await CustomerDropDownRequest();
            await ProductDropDownRequest();
        })();
    }, [])


    let CustomerDropDown = useSelector((state) => (state.sale.CustomerDropDown));
    let ProductDropDown = useSelector((state) => (state.sale.ProductDropDown));
    let SaleItemList = useSelector((state) => (state.sale.SaleItemList));


    const OnAddCart = () => {
        let productValue = productRef.value;
        let productName = productRef.selectedOptions[0].text;
        let qtyValue = qtyRef.value;
        let unitPriceValue = unitPriceRef.value;

        if (IsEmpty(productValue)) {
            ErrorToast("Select Product")
        }
        else if (IsEmpty(qtyValue)) {
            ErrorToast("Qty Required")
        }
        else if (IsEmpty(unitPriceValue)) {
            ErrorToast("Unit Price Required")
        }
        else {
            let item = {
                "ProductID": productValue,
                "ProductName": productName,
                "Qty": qtyValue,
                "UnitCost": unitPriceValue,
                "Total": (parseInt(qtyValue)) * (parseInt(unitPriceValue))
            }
            store.dispatch(SetSaleItemList(item))
        }

    }


    const removeCart = (i) => {
        store.dispatch(RemoveSaleItem(i))
    }


    const CreateNewSale = async () => {


        let SaleFormValue = {
            CustomerID: CustomerID,
            VatTax: vat,
            Discount: discount,
            OtherCost: otherCost,
            ShippingCost: shippingCost,
            GrandTotal: totalValue,
            Note: note,
        }

        // Apply Validation
        let res = await CreateSaleRequest(SaleFormValue, SaleItemList);
        if (res) {
            navigate("/SalesListPage");
        }
    }


    const totalValuebyselectProduct = SaleItemList.reduce((acc, product) => acc + product.Total, 0);


    let totalValue = totalValuebyselectProduct + parseInt(vat) - parseInt(discount) + parseInt(otherCost) + parseInt(shippingCost)



    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-12 col-md-8 col-lg-8 mb-3">
                        <div className="card  h-100">
                            <div className="card-body">

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6  p-1">
                                        <label className="form-label">Select Product</label>
                                        <select ref={(input) => productRef = input} className="form-select form-select-sm">
                                            <option value="">Select Product</option>
                                            {
                                                ProductDropDown.map((item, i) => {
                                                    return (<option key={i.toLocaleString()} value={item._id}>{item.Name}</option>)
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="col-xl-2 col-lg-6 p-1">
                                        <label className="form-label">Qty</label>
                                        <input ref={(input) => qtyRef = input} className="form-control form-control-sm" />
                                    </div>
                                    <div className="col-xl-2 col-lg-6 p-1">
                                        <label className="form-label">Unit Price</label>
                                        <input ref={(input) => unitPriceRef = input} className="form-control form-control-sm" />
                                    </div>
                                    <div className="col-xl-2 col-lg-6 p-1">
                                        <label className="form-label">Add to cart</label>
                                        <button onClick={OnAddCart} className="btn w-100 btn-success btn-sm"><BsCartCheck /></button>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <div className="table-responsive table-section">
                                            <table className="table-sm text-center table">
                                                <thead className="sticky-top bg-white">
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Qty</th>
                                                        <th>Unit Price</th>
                                                        <th>Total</th>
                                                        <th>Remove</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        SaleItemList.map((item, i) => {
                                                            return (
                                                                <tr>
                                                                    <td>{item.ProductName}</td>
                                                                    <td>{item.Qty}</td>
                                                                    <td>{item.UnitCost}</td>
                                                                    <td>{item.Total}</td>
                                                                    <td><button onClick={removeCart.bind(this, i)} className="btn btn-outline-light text-danger p-2 mb-0 btn-sm ms-2"><BsTrash /></button></td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 mb-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="row">
                                    <h5 >Create Sales</h5>
                                    <hr className="bg-light" />
                                    <div className="col-12 p-1">
                                        <label className="form-label">Customer</label>
                                        <select onChange={(e) => setCustomerID(e.target.value)} className="form-select form-select-sm">
                                            <option value="">Select Customer</option>
                                            {
                                                CustomerDropDown.map((item, i) => {
                                                    return (<option key={i.toLocaleString()} value={item._id}>{item.CustomerName}</option>)
                                                })
                                            }
                                        </select>
                                    </div>

                                    <div className="col-12 p-1">
                                        <label className="form-label">Vat/Tax</label>
                                        <input onChange={(e) => setVat(e.target.value)} className="form-control form-control-sm" type="number" />
                                    </div>

                                    <div className="col-12 p-1">
                                        <label className="form-label">Discount</label>
                                        <input onChange={(e) => setDiscount(e.target.value)} className="form-control form-control-sm" type="number" />
                                    </div>

                                    <div className="col-12 p-1">
                                        <label className="form-label">Other Cost</label>
                                        <input onChange={(e) => setOtherCost(e.target.value)} className="form-control form-control-sm" type="number" />
                                    </div>

                                    <div className="col-12 p-1">
                                        <label className="form-label">Shipping Cost</label>
                                        <input onChange={(e) => setShippingCost(e.target.value)} className="form-control form-control-sm" type="number" />
                                    </div>

                                    <div className="col-12 p-1">
                                        <label className="form-label">Grand Total</label>
                                        <input disabled value={totalValue} className="form-control form-control-sm" type="number" />
                                    </div>


                                    <div className="col-12 p-1">
                                        <label className="form-label">Note</label>
                                        <input defaultValue={note} onChange={(e) => setNote(e.target.value)} className="form-control form-control-sm" type="text" />
                                    </div>


                                </div>
                                <div className="row">
                                    <div className="col-4 p-2">
                                        <button onClick={CreateNewSale} className="btn btn-sm my-3 btn-success">Create</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default SalesCreateUpdate;