import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../shared/utils/axiosConfig";
import { RegisterDataTypes } from "../../../types/formDataTypes";

export const RegisterApi = createAsyncThunk(
  "register/registerUser",
  async (data: RegisterDataTypes, { rejectWithValue }) => {
    try {
      const response = await API.post("register/", data.data);
      console.log(response.data);
      data.navigate("/");
      return response.data;
    } catch (e: any) {
      return rejectWithValue(e.response.data.message);
    }
  }
);
