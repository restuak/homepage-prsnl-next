// import dotenv from "dotenv";
// import fetch from "node-fetch";

// dotenv.config();

// const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
// const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
// const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;

// const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
// const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

// const getAccessToken = async (): Promise<string> => {
//   const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

//   const response = await fetch(TOKEN_ENDPOINT, {
//     method: "POST",
//     headers: {
//       Authorization: `Basic ${basic}`,
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body: new URLSearchParams({
//       grant_type: "refresh_token",
//       refresh_token: refresh_token!,
//     }),
//   });

//   const data = await response.json() as { access_token: string };
//   return data.access_token;
// };

// export const getNowPlayingItem = async () => {
//   const access_token = await getAccessToken();

//   const response = await fetch(NOW_PLAYING_ENDPOINT, {
//     headers: {
//       Authorization: `Bearer ${access_token}`,
//     },
//   });

//   if (response.status === 204 || response.status > 400) {
//     return null; // No song is currently playing or an error occurred
//   }

//   interface Song {
//     item: {
//       album: {
//         images: { url: string }[];
//       };
//       artists: { name: string }[];
//       external_urls: { spotify: string };
//       name: string;
//     };
//     is_playing: boolean;
//   }

//   const song = (await response.json()) as Song;
//   return {
//     albumImageUrl: song.item.album.images[0].url,
//     artist: song.item.artists
//       .map((artist: { name: string }) => artist.name)
//       .join(", "),
//     isPlaying: song.is_playing,
//     songUrl: song.item.external_urls.spotify,
//     title: song.item.name,
//   };
// };
