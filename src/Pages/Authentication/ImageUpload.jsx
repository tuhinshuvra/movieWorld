import React, { useState } from 'react';

const ImageUpload = () => {
    const [profileImage, setProfileImage] = useState("");
    const [loading, setLoading] = useState(false);
    const handleImage = (e) => {
        setProfileImage(e.target.files[0]);
    }

    const uploadImage = async (e) => {
        e.preventDefault();

        setLoading(true);
        try {
            let imageUrl;
            if (profileImage && (profileImage.type === "image/png" || profileImage.type === "image/jpg" || profileImage.type === "image/jpeg")) {
                const image = new FormData();
                image.append('file', profileImage);
                image.append("cloud_name", "dhdvcnxek");
                image.append("upload_preset", "s1tqih4t");

                const response = await fetch("https://api.cloudinary.com/v1_1/dhdvcnxek/image/upload", {
                    method: "POST",
                    body: image
                })
                const imgData = await response.json();
                // console.log(imgData);
                imageUrl = imgData.url.toString();
                alert(imageUrl);
                setLoading(false);
            }
        } catch (error) {
            // console.log(error);
            setLoading(false);
        }
    }

    return (
        <div className='text-center'>
            <form onSubmit={uploadImage}>
                <input type="file" accept='image/png,image/jpeg' name="image" id="image" className="input input-bordered input-primary w-full max-w-xs my-2" placeholder='enter image' onChange={handleImage} /><br />
                {
                    loading ? <p>loading......</p> : <>
                        <input type="submit" value="submit" className='btn btn-info ' />
                    </>
                }
            </form>
        </div>
    );
};

export default ImageUpload;