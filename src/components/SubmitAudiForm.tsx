
import React, { useState } from 'react';
import { toast } from 'sonner';

const SubmitAudiForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    modelName: '',
    location: '',
    photographer: '',
    comment: '',
  });
  
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Check if file is an image
      if (!file.type.match('image.*')) {
        setFormStatus({
          submitted: false,
          error: true,
          message: 'Please select an image file (JPEG, PNG, etc.)'
        });
        return;
      }
      
      // Check if file size is less than 5MB
      if (file.size > 5 * 1024 * 1024) {
        setFormStatus({
          submitted: false,
          error: true,
          message: 'Image size should be less than 5MB'
        });
        return;
      }
      
      setImageFile(file);
      
      // Create a preview
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          setImagePreview(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
      
      // Clear any error messages
      if (formStatus.error) {
        setFormStatus({
          submitted: false,
          error: false,
          message: ''
        });
      }
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation - removed captcha validation
    if (!formData.name || !formData.email || !formData.modelName || !formData.location || !imageFile) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill out all required fields and upload an image'
      });
      return;
    }
    
    // Simulate form submission
    toast.success('Thank you! Your Audi has been submitted for review.');
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you! Your Audi has been submitted for review.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      modelName: '',
      location: '',
      photographer: '',
      comment: ''
    });
    setImageFile(null);
    setImagePreview(null);
  };
  
  return (
    <div className="bg-white dark:bg-audi-black rounded-xl shadow-md">
      <div className="p-6 md:p-8">
        {formStatus.message && (
          <div 
            className={`p-4 mb-6 rounded-md ${formStatus.error ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'}`}
          >
            {formStatus.message}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="Your email address"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="modelName" className="block text-sm font-medium mb-2">
                Audi Model <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="modelName"
                name="modelName"
                value={formData.modelName}
                onChange={handleChange}
                className="form-input"
                placeholder="e.g. Audi A4, RS6, Q5"
                required
              />
            </div>
            
            <div>
              <label htmlFor="location" className="block text-sm font-medium mb-2">
                Location Spotted <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="form-input"
                placeholder="e.g. Nairobi, Mombasa"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="photographer" className="block text-sm font-medium mb-2">
              Photographer/Owner Credit
            </label>
            <input
              type="text"
              id="photographer"
              name="photographer"
              value={formData.photographer}
              onChange={handleChange}
              className="form-input"
              placeholder="Name or social media handle"
            />
          </div>
          
          <div>
            <label htmlFor="image" className="block text-sm font-medium mb-2">
              Upload Image <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-6 cursor-pointer hover:border-audi-red transition-colors">
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
              />
              <label htmlFor="image" className="cursor-pointer text-center">
                {imagePreview ? (
                  <div className="space-y-3">
                    <img 
                      src={imagePreview} 
                      alt="Audi preview" 
                      className="max-h-40 mx-auto rounded-md"
                    />
                    <div className="text-sm font-medium text-audi-red">
                      Change Image
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="text-gray-500 dark:text-gray-400">
                      Click to upload an image
                    </div>
                    <div className="text-xs text-gray-400">
                      JPG, PNG, GIF • Max 5MB
                    </div>
                  </div>
                )}
              </label>
            </div>
          </div>
          
          <div>
            <label htmlFor="comment" className="block text-sm font-medium mb-2">
              Additional Comments
            </label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              rows={3}
              className="form-input resize-none"
              placeholder="Any interesting details about this Audi?"
            ></textarea>
          </div>
          
          <div>
            <button 
              type="submit"
              className="cta-button w-full"
              disabled={formStatus.submitted}
            >
              {formStatus.submitted ? 'Submitted!' : 'Submit Your Audi'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitAudiForm;
