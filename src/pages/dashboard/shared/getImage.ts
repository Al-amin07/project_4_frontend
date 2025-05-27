/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";

const getImage = async (image: any) => {
  try {
    const formData = new FormData();
    formData.append("image", image);
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`,
      formData
    );
    console.log(data);
    return data.data.display_url;
  } catch (error) {
    console.log(error);
  }
};

export default getImage;
