import { Box } from '@mui/material'
import React, { useEffect } from 'react'
// import request from 'request';


export default function Spotify() {
    var client_id = '5608d8e998ae4656aacae384b980a19c';
    var client_secret = '3ab7f3a2e8b74a7eb7cf2f95c176be00';
    
    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
        },
        form: {
            grant_type: 'client_credentials'
        },
        json: true
    };

    async function getAccessToken(clientId, code) {
        const verifier = localStorage.getItem("verifier");
    
        const params = new URLSearchParams();
        params.append("client_id", clientId);
        params.append("grant_type", "authorization_code");
        params.append("code", code);
        params.append("redirect_uri", "http://localhost:5173/callback");
        params.append("code_verifier", verifier);
    
        const result = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: params
        });
    
        const { access_token } = await result.json();
        return access_token;
    }
    
    useEffect(() => {
        getAccessToken(client_id, client_secret)
    }, [] )

    return (
        <Box>
            Spotify
        </Box>
    )
}
