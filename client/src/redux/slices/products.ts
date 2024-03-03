import { filter } from "@/types/home";
import { Product } from "@/types/product";
import { filterState } from "@/types/redux";
import { buildApiUrl } from "@/utils/utils";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
type ProductsState = {
  searchInputText: string;
  filters: filter[];
  sort: string;
  displayMode: string;
  productsList: Product[];
};

const initialState = {
  searchInputText: "",
  filters: [
    {
      name: "price",
      data: [
        { name: "50-100", quantity: 123, isChecked: false },
        { name: "100-200", quantity: 12323, isChecked: false },
        { name: "200-500", quantity: 12213, isChecked: false },
        { name: "500-1000", quantity: 211123, isChecked: false },
      ],
    },
    {
      name: "brand",
      data: [
        { name: "Samsung", quantity: 123, isChecked: false },
        { name: "Apple", quantity: 12323, isChecked: false },
        { name: "xiaomi", quantity: 12213, isChecked: false },
        { name: "nokia", quantity: 211123, isChecked: false },
      ],
    },
    {
      name: "Storage",
      data: [
        { name: "under 32 gb", quantity: 123, isChecked: false },
        { name: "64 gb", quantity: 12323, isChecked: false },
        { name: "128 gb", quantity: 12213, isChecked: false },
        { name: "256 gb", quantity: 211123, isChecked: false },
        { name: "512 gb", quantity: 211123, isChecked: false },
        { name: "1 tb", quantity: 211123, isChecked: false },
      ],
    },
    {
      name: "RAM",
      data: [
        { name: "under 1 gb", quantity: 123, isChecked: false },
        { name: "1-3 gb", quantity: 12323, isChecked: false },
        { name: "4-6 gb", quantity: 12213, isChecked: false },
        { name: "8-12 gb", quantity: 211123, isChecked: false },
        { name: "over 12 gb", quantity: 211123, isChecked: false },
      ],
    },
  ],
  sort: "sss",
  displayMode: "",
  productsList: [],
} as ProductsState;
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_ss, thunkAPI) => {
    try {
      const currentState = thunkAPI.getState().products;
      const apiURL = buildApiUrl(
        currentState.searchInputText,
        currentState.filters
      );
      const response = await fetch(apiURL, {
        method: "GET",
        credentials: "include",
      });
      console.log(response);
      if (!response.ok) {
        // Handle error here if needed
        throw new Error("Login failed");
      }
      const productsList = await response.json();

      thunkAPI.dispatch(products.actions.setProducts(productsList));
    } catch (error) {
      throw error;
    }
  }
);
export const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    reset: () => initialState,
    setProducts: (state: ProductsState, payload: PayloadAction<any>) => {
      console.log(payload.payload);
      state.productsList = payload.payload;
    },
    setSearchInputText: (
      state: ProductsState,
      payload: PayloadAction<string>
    ) => {
      console.log(payload.payload);
      state.searchInputText = payload.payload;
    },
    setFilterValues: (
      state: ProductsState,
      payload: PayloadAction<filterState>
    ) => {
      const { filterName, optionName, isChecked } = payload.payload;
      const targetFilter = state.filters.find(
        (filter) => filter.name === filterName
      );
      const targetOption = targetFilter?.data.find(
        (option) => option.name === optionName
      );
      targetOption.isChecked = isChecked;
    },
  },
  extraReducers: (builder) => {
    // Add an extra reducer for handling the loginWithCredentials result
    builder.addCase(getProducts.fulfilled, (state, action) => {
      // Handle success if needed
    });
  },
});

export const { reset, setProducts, setSearchInputText, setFilterValues } =
  products.actions;
export default products.reducer;
