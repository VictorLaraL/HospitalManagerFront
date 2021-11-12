import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Layout, message, Button } from "antd";
import { Formik } from "formik";
import { getAuthUser } from "../../redux/actions/authUserActions";
import LoginForm from "../../components/forms/LoginForm/LoginForm";
import LoginFormValidation from "../../components/forms/LoginForm/LoginFormValidation";
import RegisterModal from "../../components/modals/registerModal";
import { addUser } from "../../redux/actions/registerActions";

import "./LoginContainer.css";

const LoginContainer = () => {
  const { Content, Header } = Layout;
  const dispatch = useDispatch();
  const { isAuthenticated, isLoadingAuthRequest, showErrorLoginMessage } =
    useSelector((state) => state.authUserReducer);

  const handleSubmit = (values) => {
    dispatch(getAuthUser(values));
  };

  const { isLoadingAddRegister, showError, showSuccess } = useSelector(
    (state) => state.registerReducer
  );

  useEffect(() => {
    if (showError) {
      message.error("Accion realizada incorrectamente");
    } else if (showSuccess) {
      message.success("Accion realizada correctamente");
    }
  }, [showError, showSuccess]);

  const [isModalRegisterVisible, setIsModalRegisterVisible] = useState(false);

  const showModalRegister = () => {
    setIsModalRegisterVisible(true);
  };

  const handleCancelRegister = () => {
    setIsModalRegisterVisible(false);
  };

  const handleRegisterSubmit = (values, actions) => {
    const formatAddValues = {
      email: values.email,
      password: values.password,
      name: values.name,
    };

    dispatch(addUser(formatAddValues));

    actions.resetForm();
    setIsModalRegisterVisible(false);
  };

  useEffect(() => {
    if (showErrorLoginMessage) {
      message.error("Usuario o contraseña incorrecto, intente nuevamente");
    }
  }, [showErrorLoginMessage]);

  if (isAuthenticated) {
    return <Redirect to="/patients" />;
  } else {
    return (
      <Layout className="page-login">
        <Header style={{ background: "#fff" }}></Header>
        <Content>
          <div className="login">
            <Formik
              validationSchema={LoginFormValidation}
              onSubmit={handleSubmit}
              initialValues={{
                email: "",
                password: "",
              }}
            >
              {() => <LoginForm isLoading={isLoadingAuthRequest} />}
            </Formik>
            <hr/>
            <Button
              type="primary"
              style={{ marginBottom: 16 }}
              onClick={showModalRegister}
            >
              Registrate
            </Button>
          </div>
        </Content>

        <RegisterModal
          modalTitle="Registrate"
          modalVisible={isModalRegisterVisible}
          modalSpinning={isLoadingAddRegister}
          modalCancel={handleCancelRegister}
          modalSubmit={handleRegisterSubmit}
          modalFormikInitialValues={{
            email: "",
            password: "",
            name: "",
          }}
        />
      </Layout>
    );
  }
};

export default LoginContainer;
