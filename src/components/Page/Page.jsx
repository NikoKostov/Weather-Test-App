import React from "react";
import useForecast from "../../hooks/useForecast";
import Form from "../Form";
import Header from "../Header";
import Error from "../Error/Error";
import styles from "./Page.module.css";

function Page() {
  const { submitRequest, forecast, error } = useForecast();
  const submitSearch = (value) => {
    submitRequest(value);
  };
  return (
    <div className={styles.page}>
      <Header forecast={forecast} />
      {error && <Error error={error} />}
      <Form submitSearch={submitSearch} />
    </div>
  );
}

export default Page;
