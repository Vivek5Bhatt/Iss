import { toast } from "react-toastify";

export const successToast = (msg) => {
  toast.success(msg);
};

export const errorToast = (msg) => {
  if (msg) toast.error(msg);
  else toast.error("something went wrong");
};
