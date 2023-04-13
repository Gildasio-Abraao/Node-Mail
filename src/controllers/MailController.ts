import { Request, Response } from "express";
import NodeMailerProvider from "../providers/NodeMailerProvider/NodeMailerProvider";

class MailController {
  
  async send(request: Request, response: Response) {
    const { name, email } = request.body;

    try {
      const res = await NodeMailerProvider.sendMail({
        to: {
          name: name,
          email: email,
        },
        from: {
          name: 'Gildasio Abraão',
          email: 'example@gmail.com',
        },
        subject: 'E-mail de verificação',
        text: 'Hello, World',
        html: '<h1>Esse é um e-mail de teste.</h1>'
      });
      
      response.json(res);
    } catch(err) {
      response.json(err);
    }
  }
}

export default new MailController();