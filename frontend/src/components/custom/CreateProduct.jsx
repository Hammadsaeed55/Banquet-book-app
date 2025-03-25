import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export default function BanquetHallForm() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages(imageUrls);
    setSelectedImage(imageUrls[0]);
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-6 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <div className="max-w-5xl w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl flex flex-col md:flex-row gap-8">
        
        {/* Left Side - Form */}
        <div className="flex-1 space-y-5">
          <h2 className="text-2xl font-bold text-center md:text-left">Add Banquet Hall</h2>
          <Input placeholder="Banquet Hall Name" />
          <Textarea placeholder="Description" rows={3} />
          <Input placeholder="Location" />
          <Input type="number" placeholder="Price per day (e.g., 50000)" />
          <Button className="w-full mt-3">Submit</Button>
        </div>

        {/* Right Side - Image Upload */}
        <div className="flex-1 flex flex-col items-center space-y-4">
          <label className="cursor-pointer flex flex-col items-center border-2 border-dashed border-gray-400 dark:border-gray-600 p-6 rounded-lg w-full text-center transition hover:border-blue-500">
            <Upload className="w-12 h-12 text-gray-500 dark:text-gray-400" />
            <span className="mt-2 text-sm">Upload Images</span>
            <input type="file" multiple className="hidden" onChange={handleImageUpload} />
          </label>

          {selectedImage && (
            <div className="mt-4 w-full">
              <img src={selectedImage} alt="Selected" className="w-full h-56 object-cover rounded-lg shadow-lg" />
              <div className="flex mt-3 space-x-2 overflow-x-auto">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="Thumbnail"
                    className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 ${
                      selectedImage === img ? "border-blue-500" : "border-transparent"
                    }`}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
