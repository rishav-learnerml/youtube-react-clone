const GOOGLE_API_KEY = "AIzaSyAlmiE2WNEOG910OC-s7Vik4xAsqYrhsqM";

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;