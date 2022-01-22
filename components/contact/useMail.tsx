import React from "react";
import emailjs, { init } from "@emailjs/browser";

const userId = process.env.USER_ID;
const serviceId = process.env.SERVICE_ID;
const templateId = process.env.TEMPLATE_MAIL;

init(userId!);

export const UseMail = (form: HTMLFormElement) => {
  return emailjs.sendForm(serviceId!, templateId!, form, userId);
};
