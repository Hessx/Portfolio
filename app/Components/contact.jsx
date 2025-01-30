import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div id="Contact" className="container mx-auto px-4 py-10">
      <h4 className="text-center mb-2 text-lg font-ovo">Contato</h4>
      <h2 className="text-center text-5xl font-ovo mb-6">Fale comigo</h2>

      <p className="text-center max-w-2xl mx-auto mb-10 font-ovo">
        Se você tem alguma dúvida ou deseja saber mais sobre o meu trabalho, não
        hesite em me contatar!
      </p>

      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <form
            action="mailto:seuemail@dominio.com"
            method="POST"
            encType="multipart/form-data"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="mb-2 font-ovo text-center block text-sm font-medium text-gray-700"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="font-ovo w-full text-center px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Digite seu nome"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="font-ovo mb-2 block text-center text-sm font-medium text-gray-700"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="font-ovo text-center w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Digite seu e-mail"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="font-ovo mb-2 text-center block text-sm font-medium text-gray-700"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="font-ovo text-center w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Digite sua mensagem"
                required
              />
            </div>
            <button
              type="submit"
              className="font-ovo w-full py-2 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-10">
        <h3 className="text-lg font-ovo">Ou entre em contato por:</h3>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="vitorhesss@gmail.com"
            className="text-blue-500 hover:underline"
          >
            E-mail
          </a>
          <a
            href="https://www.linkedin.com/in/vitor-hesse-bb598516a/"
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Hessx"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.behance.net/vitorhc"
            className="text-blue-500 hover:underline"
          >
            Behance
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
