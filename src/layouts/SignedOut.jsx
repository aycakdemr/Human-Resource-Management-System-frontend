import React from "react";
import {
    Button,
  } from "reactstrap";

export default function SignedOut(props) {
  return (
   <div>
    <Button
        className="btn-neutral btn-icon"
        onClick={props.signIn}
        color="default"
        target="_blank"
      >
        <span className="btn-inner--icon">
          <i className="fa fa-cloud-download mr-2" />
        </span>
        <span className="nav-link-inner--text ml-1">Giriş Yap</span>
      </Button>
      <Button
        className="btn-neutral btn-icon"
        color="default"
        target="_blank"
      >
        <span className="btn-inner--icon">
          <i className="fa fa-cloud-download mr-2" />
        </span>
        <span className="nav-link-inner--text ml-1">Kayıt Ol</span>
      </Button>
        

      </div>
  );
}
