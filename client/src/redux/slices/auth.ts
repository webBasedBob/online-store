import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

type AuthState = {
  isLoggedIn: boolean | null;
  username: string | null;
  email: string | null;
  role: string | null;
};

const initialState = {
  isLoggedIn: null,
  username: null,
  email: null,
  role: null,
} as AuthState;

export const loginWithCredentials = createAsyncThunk(
  "auth/loginWithCredentials",
  async (credentials, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:8000/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) {
        // Handle error here if needed
        throw new Error("Login failed");
      }
      const user = await response.json();
      thunkAPI.dispatch(auth.actions.setUser(user));
      return user;
    } catch (error) {
      throw error;
    }
  }
);

export const signupWithCredentials = createAsyncThunk(
  "auth/signupWithCredentials",
  async (credentials, thunkAPI) => {
    try {
      const response = await fetch(
        `http://localhost:8000/auth/create-account`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );
      if (!response.ok) {
        throw new Error("Login failed");
      }
      const user = await response.json();
      thunkAPI.dispatch(auth.actions.setUser(user));
      return user;
    } catch (error) {
      throw error;
    }
  }
);

export const getLoginState = createAsyncThunk(
  "auth/getLoginState",
  async (_: null = null, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:8000/auth/get-state`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        // Handle error here if needed
        thunkAPI.dispatch(auth.actions.reset());
      }
      const user = await response.json();
      if (user.message === "Unauthenticated") {
        thunkAPI.dispatch(auth.actions.reset());
        return;
      }
      console.log("ceplm", user);
      thunkAPI.dispatch(auth.actions.setUser(user));
      return user;
    } catch (error) {
      // Handle error here if needed
      throw error;
    }
  }
);

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: () => initialState,
    setUser: (state, payload: PayloadAction<any>) => {
      const userData = payload.payload;
      return {
        isLoggedIn: true,
        username: userData.username,
        email: userData.email,
        role: userData.role,
      };
    },
  },
  extraReducers: (builder) => {
    // Add an extra reducer for handling the loginWithCredentials result
    builder.addCase(loginWithCredentials.fulfilled, (state, action) => {
      // Handle success if needed
    });
    builder.addCase(loginWithCredentials.rejected, (state, action) => {
      // Handle failure if needed
    });
  },
});

export const { reset, setUser } = auth.actions;
export default auth.reducer;
