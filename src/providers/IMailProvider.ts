interface IAddress {
  name: String,
  email: String,
}

export interface IMessage {
  to: IAddress,
  from: IAddress,
  subject: string,
  text: string,
  html: string,
}

export default interface IMailProvider {
  sendMail(message: IMessage): Promise<void>;
}