import React from "react";

const Login = () => {
  return (
    <>
      <main id="maincontent" className="page-main">
        <a id="contentarea" tabIndex={-1} />
        <div className="page-title-wrapper">
          <h1 className="page-title">
            <span className="base" data-ui-id="page-title-wrapper">
              Accès client
            </span>{" "}
          </h1>
        </div>
        <div className="page messages">
          <div data-placeholder="messages" />
          <div data-bind="scope: 'messages'">

          </div>
        </div>
        <div className="columns">
          <div className="column main">
            <input
              name="form_key"
              type="hidden"
              defaultValue="pQBLunWkU4OA47C9"
            />
            <div
              id="authenticationPopup"
              data-bind="scope:'authenticationPopup', style: {display: 'none'}"
              style={{ display: "none" }}
            >
              {/* ko template: getTemplate() */}
              {/* /ko */}
            </div>
            <style
              type="text/css"
              dangerouslySetInnerHTML={{
                __html:
                  "\n                            .form-customer-login .g-recaptcha {\n                padding-top: 20%;\n            }\n        \n        .form.form-login .g-recaptcha .grecaptcha-badge{\n            position: unset !important;\n        }\n\n        .form-customer-login .g-recaptcha {\n            margin: 0px;\n        }\n\n        #social-form-create .g-recaptcha{\n            padding-top: 5%;\n        }\n\n        #social-form-password-forget .g-recaptcha{\n            padding-top: 5%;\n        }\n\n        .onestepcheckout-index-index .form-login .g-recaptcha .grecaptcha-badge {\n            position: unset !important;\n        }\n\n        .checkout-index-index form[data-role=login] .g-recaptcha .grecaptcha-badge {\n            position: unset !important;\n        }\n\n        #mpageverify-form .g-recaptcha {\n            margin-left: 30%;\n        }\n\n        .g-recaptcha {\n            margin-top: 15px;\n            margin-bottom: 15px;\n        }\n    ",
              }}
            />
            <div className="login-container">
              <div className="block block-customer-login">
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n        .login-container .account-social-login {\n            float: left !important;\n        }\n        .login-container .account-social-login .block-content {\n            text-align: left !important;\n        }\n        @media (max-width: 767px) {\n            .login-container .account-social-login .block-content {\n                text-align: center !important;\n            }\n        }\n    ",
                  }}
                />
                <div className="block-title">
                  <strong
                    id="block-customer-login-heading"
                    role="heading"
                    aria-level={2}
                  >
                    Clients enregistrés
                  </strong>
                </div>
                <div
                  className="block-content"
                  aria-labelledby="block-customer-login-heading"
                >
                  <form
                    className="form form-login"
                    action="https://ma.oraimo.com/customer/account/loginPost/referer/aHR0cHM6Ly9tYS5vcmFpbW8uY29tLw%2C%2C/"
                    method="post"
                    id="login-form"
                    noValidate="novalidate"
                  >
                    <input
                      name="form_key"
                      type="hidden"
                      defaultValue="pQBLunWkU4OA47C9"
                    />{" "}
                    <fieldset
                      className="fieldset login"
                      data-hasrequired="* Champs requis"
                    >
                      <div className="field note">
                        Si vous avez un compte, connectez-vous avec votre
                        adresse email.
                      </div>
                      <div className="field email required">
                        <label className="label" htmlFor="email">
                          <span>Email</span>
                        </label>
                        <div className="control">
                          <input
                            name="login[username]"
                            defaultValue=""
                            autoComplete="off"
                            id="email"
                            type="email"
                            className="input-text"
                            title="Email"
                            data-validate="{required:true, 'validate-email':true}"
                            aria-required="true"
                          />
                        </div>
                      </div>
                      <div className="field password required">
                        <label htmlFor="pass" className="label">
                          <span>Mot de passe</span>
                        </label>
                        <div className="control">
                          <input
                            name="login[password]"
                            type="password"
                            autoComplete="off"
                            className="input-text"
                            id="pass"
                            title="Mot de passe"
                            data-validate="{required:true}"
                            aria-required="true"
                          />
                        </div>
                      </div>
                      <div className="actions-toolbar">
                        <div className="secondary">
                          <a
                            className="action remind"
                            href="https://ma.oraimo.com/customer/account/forgotpassword/"
                          >
                            <span>Mot de passe oublié ?</span>
                          </a>
                        </div>
                        <div className="primary">
                          <button
                            type="submit"
                            className="action login primary"
                            name="send"
                            id="send2"
                          >
                            <span>Connexion</span>
                          </button>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                  <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n    .request-popup{\n        overflow-y: unset;\n        max-width: 800px;\n        left: 30%;\n    }\n    .request-popup .modal-header{\n        padding: 0;\n    }\n    .request-popup .modal-header button.action-close{\n        color: white;\n        z-index: 100;\n    }\n    .request-popup .modal-content{\n        padding: 0;\n    }\n",
                    }}
                  />
                </div>
              </div>
              <div className="block block-new-customer">
                <div className="block-title">
                  <strong
                    id="block-new-customer-heading"
                    role="heading"
                    aria-level={2}
                  >
                    Nouveaux clients
                  </strong>
                </div>
                <div
                  className="block-content"
                  aria-labelledby="block-new-customer-heading"
                >
                  <p>
                    La création d’un compte a de nombreux avantages :
                    consultation rapide, sauvegarder plusieurs adresses, suivre
                    les commandes, et bien plus encore.
                  </p>
                  <div className="actions-toolbar">
                    <div className="primary">
                      <a
                        href="https://ma.oraimo.com/customer/account/create/"
                        className="action create primary"
                      >
                        <span>Créer un compte</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="or-column">
                <span className="or-text">ou</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
