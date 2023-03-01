import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../shared/utils/axiosConfig";
import { AuthDataTypes } from "../../../types/formDataTypes";

export const AuthApi = createAsyncThunk(
  "auth/authUser",
  async (data: AuthDataTypes, { rejectWithValue }) => {
    try {
      const response = await API.post("login/", data.data);
      console.log(response.data);
      data.navigate("/projects");
      return response.data;
    } catch (e: any) {
      return rejectWithValue(e.response.data.message);
    }
  }
);
