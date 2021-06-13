import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./InitialState";

const cardSlice = createSlice({
  name: "cardFilter",
  initialState: InitialState,
  reducers: {
    dataAtoZ: (state, action) => {
      const sort = state.cardData.sort((a, b) => {
        const isR = action.payload === "z-a" ? -1 : 1;
        return isR * a.title.localeCompare(b.title);
      });
      state.cardData = sort;
    },
    highToLow: (state, action) => {
      const sort = state.cardData.sort((a, b) => {
        const high =
          action.payload === "lth" ? a.price - b.price : b.price - a.price;
        return high;
      });
      state.cardData = sort;
    },
    priceRange: (state, action) => {
      const filter = state.filteredData.filter((val) => {
        return val.price <= action.payload[1] && val.price >= action.payload[0];
      });
      state.cardData = filter;
    },
    tagsAdd: (state, action) => {
      const hero = state.checkbox[action.payload.dataid];
       state.checkbox.filter((value) => {
        if (value.val === action.payload.cValue) {
          if (value.bool) {
            value.bool = false;
          } else {
            value.bool = true;
          }
        }
      });
      let newCheckedValues = state.tags.filter((item) => item.val !== hero.val);
      if (action.payload.checked) newCheckedValues.push(hero);
      state.tags = newCheckedValues;
    },
    deleteTags: (state, action) => {
      let filterDlt = state.tags.filter((val) => val.val !== action.payload);
      state.checkbox.filter((val)=>{
        if(val.val===action.payload){
          if(val.bool){
            val.bool = false;
          }else{
            val.bool=true
          }
          return val

        }
      })
      state.tags = filterDlt;
    },
  },
});

export const { dataAtoZ, highToLow, priceRange, tagsAdd, deleteTags } =
  cardSlice.actions;
export const cardReducer = cardSlice.reducer;
