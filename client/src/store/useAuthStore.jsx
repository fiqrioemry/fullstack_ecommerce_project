import Cookies from "js-cookie";
import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "@/services";

export const useAuthStore = create((set) => ({
  step: 1,
  userData: null,
  isCheckAuth: true,
  isAuthLoading: false,

  sendOtpSignUp: async (formData) => {
    try {
      set({ isAuthLoading: true });
      const response = await axiosInstance.post("/auth/send-otp", formData);
      if (response.data.success) {
        set({ step: 2 });
      }
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isAuthLoading: false });
    }
  },

  verifyOtpSignUp: async (formData) => {
    try {
      set({ isAuthLoading: true });
      const response = await axiosInstance.post("/auth/verify-otp", formData);

      toast.success(response.data.message);
      if (response.data.success) {
        set({ step: 3 });
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isAuthLoading: false });
    }
  },

  userSignUp: async (formData, navigate) => {
    try {
      set({ isAuthLoading: true });

      const response = await axiosInstance.post("/auth/signup", formData);

      toast.success(response.data.message);

      if (response.data.success) {
        navigate("/signin");
        set({ step: 1 });
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isAuthLoading: false });
    }
  },

  userOpenStore: async (formData) => {
    try {
      set({ isAuthLoading: true });

      const response = await axiosInstance.post("/auth/open-store", formData);

      toast.success(response.data.message);

      set({ userData: response.data.payload });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isAuthLoading: false });
    }
  },

  userAuthCheck: async () => {
    try {
      const response = await axiosInstance.get("/auth/me");
      set({ userData: response.data.data });
    } catch (error) {
      console.log(error);
      set({ userData: null });
    } finally {
      set({ isCheckAuth: false });
    }
  },

  userSignIn: async (formData) => {
    try {
      set({ isAuthLoading: true });
      const response = await axiosInstance.post("/auth/signin", formData);
      Cookies.set("accessToken", response.data.accessToken, {
        expires: 1 / 96,
      });
      toast.success(response.data.message);
      set({ userData: response.data.payload });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isAuthLoading: false });
    }
  },

  userSignOut: async () => {
    try {
      const response = await axiosInstance.post("/auth/signout");
      toast.success(response.data.message);
      Cookies.remove("accessToken");
      set({ userData: null });
    } catch (error) {
      console.log(error);
    }
  },
}));
