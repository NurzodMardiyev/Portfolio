import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { Button, Form, Input, notification } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

import "../App.css";

export default function ContactMe() {
  const [form] = Form.useForm();

  const handleValue = async (value) => {
    console.log(value);
    try {
      // Backendga ma'lumot yuborish
      const response = await axios.post(
        "http://localhost:5000/api/sendToBot",
        value
      );

      if (response.data.success) {
        openNotificationWithIcon("success");

        // Formani tozalash
        form.resetFields(); // Formani tozalash success holatida
      }
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      openNotificationWithIcon("error");
    }
  };

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    if (type === "success") {
      api[type]({
        message: "Ma'lumot yuborildi",
        description:
          "Siz yuborgan ma'lumot to'g'ridan-to'g'ri Nurzod Mardiyevning botiga yetib boradi, va u sizga email orqali murojaat qilishi mumkin.",
      });
    } else if (type === "error") {
      api[type]({
        message: "Xatolik yuz berdi",
        description:
          "Ma'lumot yuborishda xatolik ro'y berdi. Iltimos, qayta urinib ko'ring yoki yordam uchun bog'laning.",
      });
    }
  };

  const downloadPDF = () => {
    // PDF faylning manzili (agar serverda bo'lsa, URL ishlatish mumkin)
    const pdfUrl = "/files/Mardiyev Nurzod Faxriddinovich.pdf"; // fayl public papkada joylashgan

    // Faylni yuklab olish
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "NurzodResume.pdf"; // Faylni nomi
    link.click();
  };

  return (
    <div
      id="contact"
      className="pb-[30px] border-b dark:border-b-[#55E5A4] border-b-gray-700"
    >
      {contextHolder}

      <div className="container  md:max-w-8xl px-5 md:px-auto mx-auto text-gray-800 dark:text-[#C7C7C7] flex justify-between items-center py-20 gap-20">
        <div className="flex md:flex-row flex-col w-full gap-10 contact">
          <div className="md:w-1/2 w-full">
            <h3
              className="md:text-[42px] text-[24px] dark:text-white text-gray-800 mb-5"
              style={{ fontWeight: 700 }}
            >
              Menga bog'laning
            </h3>
            <p className="md;text-[20px] text-[16px] mb-3">
              Emailimga Salom deb yozing{" "}
              <Link
                to="https://mail.google.com/mail/u/0/#inbox"
                target="_blank"
                className="border-b border-b-[#55E5A4]"
              >
                nurzodbekmardiyev1306@gmail.com
              </Link>
            </p>
            <p className="md:text-[20px] text-[16px] mb-3">
              Ko'proq ma'lumot olmoqchi bo'lsangiz{" "}
              <button
                onClick={downloadPDF}
                className="border-b border-b-[#55E5A4]"
              >
                Resume
              </button>
            </p>
            <div className="flex gap-4 md:text-[22px] text-[16px] mt-8 dark:text-[#55E5A4] text-white">
              <Link
                to="https://www.linkedin.com/in/nurzod-mardiyev-35aaaa235/"
                className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] rounded-full flex justify-center items-center bg-gray-700"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                to="https://github.com/NurzodMardiyev"
                className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] rounded-full flex justify-center items-center bg-gray-700"
              >
                <FaGithub />
              </Link>
              <Link
                to="https://x.com/MardiyevN"
                className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] rounded-full flex justify-center items-center bg-gray-700"
              >
                <BsTwitterX />
              </Link>
              <Link
                to="https://www.instagram.com/nurzodbekmardiyev/"
                className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] rounded-full flex justify-center items-center bg-gray-700"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <Form form={form} onFinish={handleValue}>
              <Form.Item
                name="name"
                rules={[
                  { required: true, message: "Iltimos ismingizni kiriting!" },
                ]}
              >
                <Input
                  className="dark:bg-gray-700 dark:hover:bg-gray-700 dark:text-white border-none w-full px-3 py-3 focus:outline-none active:outline-none"
                  placeholder="Ismingiz"
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Iltimos email manzilingizni kiriting!",
                  },
                ]}
              >
                <Input
                  type="email"
                  className="dark:bg-gray-700 dark:hover:bg-gray-700 dark:text-white border-none w-full px-3 py-3 focus:outline-none active:outline-none"
                  placeholder="Emailingiz"
                />
              </Form.Item>
              <Form.Item
                name="message"
                rules={[
                  { required: true, message: "Iltimos xabar qoldiring!" },
                ]}
              >
                <textarea
                  className="dark:bg-gray-700 dark:hover:bg-gray-700 dark:text-white border-none py-3 resize-none w-full outline-none focus:border-none focus-within:border-none active:border-none active:outline-none ring-0 focus:ring-1 focus:ring-[#90a4ff] dark:focus:ring-0"
                  placeholder="Xabaringiz"
                  rows={5}
                ></textarea>
              </Form.Item>

              <button
                type="submit"
                className="float-end px-10 py-3 font-medium dark:bg-[#55E5A4] bg-gray-700 text-white dark:text-gray-800 dark:hover:bg-[#55E5A4]"
              >
                Yuborish
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
