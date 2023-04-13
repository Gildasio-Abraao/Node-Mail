import IMailProvider, { IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

class NodeMailerProvider implements IMailProvider {
  private transporter: any;

  constructor() {
    dotenv.config();

    this.transporter = nodemailer.createTransport({
      host: process.env.MAILER_HOST,
      port: process.env.MAILER_PORT,
      secure: false,
      auth: {
        user: process.env.MAILER_AUTH_USER,
        pass: process.env.MAILER_AUTH_PASS,
      },
    });
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      text: message.text,
      html: message.html,
    });
  }
}

export default new NodeMailerProvider();