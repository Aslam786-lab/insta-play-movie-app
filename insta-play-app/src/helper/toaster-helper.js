import { Bounce, toast } from "react-toastify";

const toastObj = {
  position: "top-center",
  autoClose: 1000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  transition: Bounce,
};

export const notifyError = (message) => {
  toast.error(message, toastObj);
};

export const notifySuccess = (message) => {
  toast.success(message, toastObj);
};
