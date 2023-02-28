import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";


export const getSongs = createAsyncThunk(
    "songs/getSong",
    async () => {
        const res = await customAxios.get('songs')
        return res.data
    }
);
export const addSong = createAsyncThunk(
    'songs/addSongs',
    async (data)=>{
        console.log(data)
        const res = await customAxios.post('songs', data);
        return res.data
    }
)


export const removeSong = createAsyncThunk(
    'song/removeSongs',
    async (data)=>{
        const res = await customAxios.delete('songs/'+ data);
        return data
    }
);


export const editSong = createAsyncThunk(
    'songs/editSongs',
    async (data)=>{
        await customAxios.put('songs/' + data[1], data[0]);
        const res = await customAxios.get('songs');
        return res.data

    }
)



export const findByIdSong = createAsyncThunk(
    'songs/findByIdSong',
    async (data)=>{
        const res = await customAxios.get('songs/'+data);

        return res.data;
    }
)


