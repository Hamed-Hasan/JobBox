import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import auth from "../../../firebase/firebase.config"

const initialState = {
   user: {
    email: '',
    role: '',
   },
    isLoading: true,
    isError: false,
    error: '',
}

export const createUser = createAsyncThunk(
    'auth/createUser',
    async ({email, password}) => {
        const data = await createUserWithEmailAndPassword(auth, email, password)        
        return data.user.email;
    }
)
export const getUser = createAsyncThunk(
    'auth/getUser',
    async (email) => {
        
        const res = await fetch(`http://localhost:5000/user/${email}`)   
        const data = await res.json()
        if(data.status){
            return data;
        }
        return email
    }
)

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({email, password}) => {
        const data = await signInWithEmailAndPassword(auth, email, password)
        
        return data.user.email;
    }
)
export const googleLogin = createAsyncThunk(
    'auth/googleLogin',
    async () => {
        const provider = new GoogleAuthProvider();
        const data = await signInWithPopup(auth, provider)
        return data.user.email;
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = {email: '', role: ''};
        },
        setUser: (state, {payload}) => {
            state.user.email = payload;
            state.isLoading = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = '';

        })
        .addCase(createUser.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.user.email = payload;
            state.isError = false;
            state.error = '';

        })
        .addCase(createUser.rejected, (state, action) => {
            state.isLoading = false;
            state.user.email = '';
            state.isError = true;
            state.error = action.error.message;

        })
        .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = '';

        })
        .addCase(loginUser.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.user.email = payload;
            state.isError = false;
            state.error = '';

        })
        .addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.user.email = '';
            state.isError = true;
            state.error = action.error.message;

        })
        .addCase(googleLogin.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = '';

        })
        .addCase(googleLogin.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.user.email = payload;
            state.isError = false;
            state.error = '';

        })
        .addCase(googleLogin.rejected, (state, action) => {
            state.isLoading = false;
            state.user.email = '';
            state.isError = true;
            state.error = action.error.message;

        })
        .addCase(getUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = '';

        })
        .addCase(getUser.fulfilled, (state, {payload}) => {
            if(payload.status){
                state.user = payload.data
            }else{
                state.user.email = payload
            }
         
            state.isLoading = false;
            // state.user = payload;
            state.isError = false;
            state.error = '';

        })
        .addCase(getUser.rejected, (state, action) => {
            state.isLoading = false;
            state.user.email = '';
            state.isError = true;
            state.error = action.error.message;

        })
    }
})

export const { logout, setUser } = authSlice.actions
export default authSlice.reducer