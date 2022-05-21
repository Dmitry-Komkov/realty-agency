import MailService from "@sendgrid/mail"

export default async function formHandler(req, res) {
  MailService.setApiKey(process.env.SENDGRID_API_KEY)
  // const payload = JSON.parse(JSON.stringify(req.body))
  const payload = req.body

  const body = Object.keys(payload).map((k) => {
    return `${k}: ${payload[k]}`
  }).join("<br><br>")

  const msg = {
    to: process.env.SENDGRID_TO_EMAIL,
    from: {
      email: process.env.SENDGRID_SENDER_EMAIL,
      name: process.env.SENDGRID_SENDER_NAME
    },
    subject: 'Заявка с сайта favorit-chekhov.ru',
    html: body,
  }

  try {
    await MailService.send(msg)

    res.status(200).json("Заявка успешно отправлена.")
  } catch(e) {
    const statusCode = typeof e.code === 'number' ? e.code : 500;

    res.status(statusCode).json(e.message)
  }
}
