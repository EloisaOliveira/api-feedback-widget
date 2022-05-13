import { MailAdapter, SendMailData } from '../mail-adapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "053ad27cb61220",
    pass: "2514cb6b338e0b"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com',
      to: 'Eloisa de Oliveira <eloisa.oliveirasantos@gmail.com',
      subject,
      html: body,
    });
  }
}