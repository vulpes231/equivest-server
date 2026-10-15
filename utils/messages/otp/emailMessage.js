const { baseTemplate, BRAND_COLOR } = require("../../messages");

function buildEmailMsg(otp) {
  const content = `
    

        <p>Hello,</p>

        <p>
            Thank you for registering with <b>Equivest Market.</b>
        </p>
        <p>To verify your email and activate your account, please use the cobfirmation code below.</p>

        <div style="
            background: #f4f0ff;
            color: ${BRAND_COLOR};
            padding: 18px;
            text-align: center;
            font-size: 28px;
            font-weight: bold;
            letter-spacing: 4px;
            border-radius: 8px;
            margin: 30px 0;
        ">
           <b>Your Confirmation Code:</b> ${otp}
        </div>

        <p>
           If you did not create an account, please disregard this email or contact us at <a href="mailto:support@equivestmarket.com">support@equivestmarket.com</a> for assistance.
        </p>
        <p>Welcome to a smarter way to invest.</p>
        <div>
          <p style="margin: 0; padding: 0;">Best regards</p>
          <p style="margin: 0; padding: 0;">Equivest Market Team</p>
        </div>
    `;

  return baseTemplate({
    content,
  });
}

function buildEmailChangeMsg(otp) {
  const content = `
    <p>Hello,</p>

    <p>
      We received a request to change the email address associated with your
      <b>Equivest Market</b> account.
    </p>

    <p>
      To verify your new email address, please enter the confirmation code
      below:
    </p>

    <div style="
      background: #f4f0ff;
      color: ${BRAND_COLOR};
      padding: 18px;
      text-align: center;
      font-size: 28px;
      font-weight: bold;
      letter-spacing: 4px;
      border-radius: 8px;
      margin: 30px 0;
    ">
      <b>${otp}</b>
    </div>

    <p>
      This code is required to confirm and activate your new email address.
      For your security, please do not share this code with anyone.
    </p>

    <p>
      If you did not request an email address change, please disregard this
      email and contact us at
      <a href="mailto:support@equivestmarket.com">
        support@equivestmarket.com
      </a>
      immediately.
    </p>

    <div>
    <p style="margin: 0; padding: 0;">Best regards</p>
    <p style="margin: 0; padding: 0;">Equivest Market Team</p>
  </div>
  `;

  return baseTemplate({
    content,
  });
}

function buildTwoFaMsg(otp) {
  const content = `
      

        <p>Hello,</p>

        <p>
            We received a login request for your Equivest Market account.
            Use the verification code below to continue.
        </p>

        <div style="
            background: #f4f0ff;
            color: ${BRAND_COLOR};
            padding: 18px;
            text-align: center;
            font-size: 28px;
            font-weight: bold;
            letter-spacing: 4px;
            border-radius: 8px;
            margin: 30px 0;
        ">
            ${otp}
        </div>

        <p>
            This code expires in 10 minutes.
            If this wasn't you, please secure your account immediately.
        </p>
        <div>
        <p style="margin: 0; padding: 0;">Best regards</p>
        <p style="margin: 0; padding: 0;">Equivest Market Team</p>
      </div>
    `;

  return baseTemplate({
    content,
  });
}

module.exports = { buildEmailMsg, buildTwoFaMsg, buildEmailChangeMsg };
