const sgMail = require('@sendgrid/mail')
const {
  SENDGRID_API_KEY,
  SENDGRID_SENDER_EMAIL,
  SENDGRID_SENDER_NAME,
  SENDGRID_TO_EMAIL
} = process.env
sgMail.setApiKey(SENDGRID_API_KEY)


exports.handler = async (event, context, callback) => {
  const payload = JSON.parse(event.body)
  
  const msg = {
    to: SENDGRID_TO_EMAIL,
    from: {
      email: SENDGRID_SENDER_EMAIL,
      name: SENDGRID_SENDER_NAME
    },
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }

  try {
    await sgMail.send(msg)

    return {
      statusCode: 200,
      body: "Заявка успешно отправлена."
    }
  } catch(e) {
    const statusCode = typeof e.code === 'number' ? e.code : 500;

    return {
      statusCode,
      body: e.message
    }
  }
}