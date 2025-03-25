import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export default function CreateBanquet() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Hall",
    location: "",
  });

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length > 4) {
      alert("You can only upload up to 4 images.");
      return;
    }
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages]);
    if (!selectedImage) setSelectedImage(newImages[0]);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-screen flex flex-col md:flex-row items-center justify-center gap-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:to-gray-800 p-24 mt-10 text-black dark:text-white">
      
      {/* Left Side: Image Preview */}
      <div className="flex-1 flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl backdrop-blur-lg">
        <label className="cursor-pointer flex flex-col items-center border-2 border-dashed border-gray-400 dark:border-gray-600 p-4 rounded-lg w-full text-center transition-all hover:bg-gray-100 dark:hover:bg-gray-700">
          <Upload className="w-10 h-10 text-gray-500 dark:text-gray-400" />
          <span className="mt-2 text-sm">Upload up to 4 Images</span>
          <input type="file" multiple accept="image/*" className="hidden" onChange={handleImageUpload} />
        </label>

        {selectedImage && (
          <div className="mt-4">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-64 object-cover rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all transform hover:scale-105"
            />
            <div className="flex mt-2 space-x-2 overflow-x-auto">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Thumbnail"
                  className="w-20 h-20 object-cover rounded-lg cursor-pointer border-2 hover:scale-110 transition-all"
                  onClick={() => handleImageClick(img)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Side: Form */}
      <div className="flex-1 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl space-y-4 w-full md:w-1/2">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center"> Add Banquet  </h2>
        <Input name="name" placeholder="Banquet Hall Name" value={formData.name} onChange={handleChange} className="rounded-lg border border-gray-300 dark:border-gray-600 p-3" />
        <Textarea name="description" placeholder="Description" rows={3} value={formData.description} onChange={handleChange} className="rounded-lg border border-gray-300 dark:border-gray-600 p-3" />
        <Input name="location" placeholder="Location" value={formData.location} onChange={handleChange} className="rounded-lg border border-gray-300 dark:border-gray-600 p-3" />
        <Input name="price" type="number" placeholder="Price per day (e.g., 50000)" value={formData.price} onChange={handleChange} className="rounded-lg border border-gray-300 dark:border-gray-600 p-3" />
        
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="Hall">Hall</option>
          <option value="Catering">Catering</option>
          <option value="Decoration">Decoration</option>
          <option value="Package">Package</option>
        </select>
        
        <Button className="w-full mt-2 bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white py-3 rounded-lg shadow-lg transition-all">Submit</Button>
      </div>
    </div>
  );
}
