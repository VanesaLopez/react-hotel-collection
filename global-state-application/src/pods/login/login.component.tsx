import * as React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { WithStyles } from "@material-ui/core";
import { styles } from "./login.styles";
import withStyles from "@material-ui/styles/withStyles";
import { CredentialsEntityVm, LoginFormErrors } from "./login.vm";
import { TextFieldForm } from "common/components";

interface Props extends WithStyles<typeof styles> {
  onLogin : () => void;
  credentials : CredentialsEntityVm;
  onUpdateCredentials: (fieldId: string, value : string) => void;
  loginFormError: LoginFormErrors;
}


const LoginComponentInner = (props: Props) => {
  const { classes, onLogin, credentials, loginFormError, onUpdateCredentials } = props;
  
  return (
    <>
      <Card>
        <CardHeader title="login"/>
        <CardContent>
          <div className={classes.formContainer}>
            <TextFieldForm               
              label="Name"
              name="username"
              value={credentials.username}
              onChange={onUpdateCredentials}
              error={loginFormError.username.errorMessage}
              />
            <TextFieldForm 
              label="Password" 
              type="password" 
              name="password"
              value={credentials.password}
              onChange={onUpdateCredentials}
              error={loginFormError.password.errorMessage}
              />
            <Button variant="contained" color="primary" onClick={onLogin}>
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export const LoginComponent = withStyles(styles)(LoginComponentInner);