export default async function uploadImage(placeImage: File) {
    const APIKEY = process.env.IMGBB_API_KEY;

    if (!APIKEY) {
      throw new Error("API Key not found");
    }

    const uploadImage = new FormData();
    uploadImage.append("image", placeImage);

    const res = await fetch(`https://api.imgbb.com/1/upload?key=${APIKEY}`, {
      method: "POST",
      body: uploadImage,
    })

    const imageData = await res.json();
    
    return imageData.data.display_url as string;
}