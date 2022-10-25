import { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { getToken } from "./Helper/SessionHelper";
import BrandCreateUpdatePage from "./Pages/Brand/BrandCreateUpdatePage";
import BrandListPage from "./Pages/Brand/BrandListPage";
import CategoryCreateUpdatePage from "./Pages/Category/CategoryCreateUpdatePage";
import CategoryListPage from "./Pages/Category/CategoryListPage";
import CustomerCreateUpdatePage from "./Pages/Customer/CustomerCreateUpdatePage";
import CustomerListPage from "./Pages/Customer/CustomerListPage";
import DashboardPage from "./Pages/Dashboard/DashboardPage";
import ExpenseCreateUpdatePage from "./Pages/Expense/ExpenseCreateUpdatePage";
import ExpenseListPage from "./Pages/Expense/ExpenseListPage";
import ExpenseTypeCreateUpdatePage from "./Pages/ExpenseType/ExpenseTypeCreateUpdatePage";
import ExpenseTypeListPage from "./Pages/ExpenseType/ExpenseTypeListPage";
import ProductCreateUpdatePage from "./Pages/Product/ProductCreateUpdatePage";
import ProductListPage from "./Pages/Product/ProductListPage";
import PurchaseCreateUpdatePage from "./Pages/Purchase/PurchaseCreateUpdatePage";
import PurchaseListPage from "./Pages/Purchase/PurchaseListPage";
import ExpenseReportPage from "./Pages/Report/ExpenseReportPage";
import PurchaseReportPage from "./Pages/Report/PurchaseReportPage";
import ReturnReportPage from "./Pages/Report/ReturnReportPage";
import SaleReportPage from "./Pages/Report/SaleReportPage";
import ReturnCreateUpdatePage from "./Pages/Return/ReturnCreateUpdatePage";
import ReturnListPage from "./Pages/Return/ReturnListPage";
import SalesCreateUpdatePage from "./Pages/Sales/SalesCreateUpdatePage";
import SalesListPage from "./Pages/Sales/SalesListPage";
import SupplierCreateUpdatePage from "./Pages/Supplier/SupplierCreateUpdatePage";
import SupplierListPage from "./Pages/Supplier/SupplierListPage";
import CreatePasswordPage from "./Pages/User/CreatePasswordPage";
import LoginPage from "./Pages/User/LoginPage";
import RegistrationPage from "./Pages/User/RegistrationPage";
import SendOTPPage from "./Pages/User/SendOTPPage";
import VerifyOTPPage from "./Pages/User/VerifyOTPPage";
function App() {
  if (getToken()) {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<DashboardPage />} />
            <Route
              exact
              path="/CustomerCreateUpdate"
              element={<CustomerCreateUpdatePage />}
            />
            <Route path="/CustomerList" element={<CustomerListPage />} />
            <Route
              exact
              path="/SupplierCreateUpdate"
              element={<SupplierCreateUpdatePage />}
            />
            <Route exact path="/SupplierList" element={<SupplierListPage />} />
            <Route
              exact
              path="/ExpenseTypeCreateUpdate"
              element={<ExpenseTypeCreateUpdatePage />}
            />
            <Route
              exact
              path="/ExpenseTypeList"
              element={<ExpenseTypeListPage />}
            />
            <Route
              exact
              path="/ExpenseCreateUpdate"
              element={<ExpenseCreateUpdatePage />}
            />
            <Route exact path="/ExpenseList" element={<ExpenseListPage />} />

            <Route
              exact
              path="/BrandCreateUpdate"
              element={<BrandCreateUpdatePage />}
            />
            <Route exact path="/BrandList" element={<BrandListPage />} />
            <Route
              exact
              path="/CategoryCreateUpdate"
              element={<CategoryCreateUpdatePage />}
            />
            <Route exact path="/CategoryList" element={<CategoryListPage />} />
            <Route
              exact
              path="/ProductCreateUpdate"
              element={<ProductCreateUpdatePage />}
            />
            <Route exact path="/ProductList" element={<ProductListPage />} />
            <Route
              exact
              path="/PurchaseCreateUpdate"
              element={<PurchaseCreateUpdatePage />}
            />
            <Route exact path="/PurchaseList" element={<PurchaseListPage />} />
            <Route
              exact
              path="/SalesCreateUpdate"
              element={<SalesCreateUpdatePage />}
            />
            <Route exact path="/SalesList" element={<SalesListPage />} />
            <Route
              exact
              path="/ReturnCreateUpdate"
              element={<ReturnCreateUpdatePage />}
            />
            <Route exact path="/ReturnList" element={<ReturnListPage />} />
            <Route exact path="/SaleReport" element={<SaleReportPage />} />
            <Route exact path="/ReturnReport" element={<ReturnReportPage />} />
            <Route
              exact
              path="/PurchaseReport"
              element={<PurchaseReportPage />}
            />
            <Route
              exact
              path="/ExpenseReport"
              element={<ExpenseReportPage />}
            />
          </Routes>
        </BrowserRouter>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/Login" replace />} />
            <Route exact path="/Login" element={<LoginPage />} />
            <Route exact path="/Registration" element={<RegistrationPage />} />
            <Route exact path="/VerifyEmailService" element={<SendOTPPage />} />
            <Route exact path="/VerifyOTPService" element={<VerifyOTPPage />} />
            <Route
              exact
              path="/ResetPasswordService"
              element={<CreatePasswordPage />}
            />
          </Routes>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
