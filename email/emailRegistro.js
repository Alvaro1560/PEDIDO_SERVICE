import sgMail from "@sendgrid/mail";

// ENVIAR UN EMAIL DE CONFIRMACION DE CUENTA DEL REGISTRO
const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;

  const htmlConfirmar = `
  <div style="font-family: 'Open Sans','Roboto','Helvetica Neue',Helvetica,Arial,sans-serif; font-size: 16px; color: #757575; line-height: 150%; letter-spacing: normal;">
  <div style="background: #4f46e5; padding: 50px 10px;">
  <div style="max-width: 600px; margin: auto;">
  <div style="background: white; padding: 15px 30px 25px 30px; border-radius: 5px;">
  <div style="text-align: center; margin: 20px 0 30px;"><span style="font-weight: bold; color: #4f46e5; font-size: 30px; margin-left: 10px;">STORE</span></div>
  <p style="color: #757575; font-family: 'Open Sans', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 16px; letter-spacing: normal;">Hola ${nombre} comprueba tu cuenta en STORE.</p>
  <p style="color: #757575; font-family: 'Open Sans', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 16px; letter-spacing: normal;">Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace.</p>
  <p style="color: #757575; font-family: 'Open Sans', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 16px; letter-spacing: normal;">Por favor confirme su correo electr&oacute;nico (<a href="mailto:${email}" target="_blank" rel="noopener">${email}</a>) haciendo clic en el bot&oacute;n de abajo.</p>
  <p><a style="background: #4f46e5; color: white; font-weight: 500; display: inline-block; padding: 10px 35px; margin: 6px 8px; text-decoration: none; border-radius: 2px;" href="${process.env.FRONTEND_URL}/confirmar/${token}" target="_blank" rel="noopener">Confirmar</a></p>
  <p style="color: #757575; font-family: 'Open Sans', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 16px; letter-spacing: normal;">En enlace expira inmediatamente cuando lo confirmes.</p>
  <p style="color: #757575; font-family: 'Open Sans', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 16px; letter-spacing: normal;">Si tu no creastes esta cuenta, puedes ignorar el mensaje.</p>
  </div>
  </div>
  </div>
  <div style="background: #4f46e5; color: white; font-size: 12px; padding: 30px 10px 30px 10px;">
  <div style="max-width: 600px; margin: auto; text-align: center;"><hr style="border: 1px solid #f2f2f2;">
  <p style="font-style: italic; margin-bottom: 0;">Copyright &copy; 2022 STORE, All rights reserved.</p>
  <p>Puedes visitar mi sitio web para mas informaci&oacute;n <a style="color: white;" href="http://whitecode.online" target="_blank" rel="noopener">whitecode</a></p>
  <hr style="border: 1px solid #f2f2f2;"></div>
  <div class="yj6qo">&nbsp;</div>
  <div class="adL">&nbsp;</div>
  </div>
  <div class="adL">&nbsp;</div>
  </div>
  `;

  console.log(token);
  console.log(process.env.API_KEY_EMAIL);

  sgMail.setApiKey(process.env.API_KEY_EMAIL);

  const msg = {
    to: email,
    from: "alvaro.samaniego@unas.edu.pe",
    subject: "Compruebe su cuenta en STORE",
    text: "STORE",
    html: htmlConfirmar,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email Enviado");
    })
    .catch((error) => {
      console.error(error);
    });
};

export default emailRegistro;
