
import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CircleDollarSign, Copy } from 'lucide-react';

const SupportUs = () => {
  const { toast } = useToast();
  const tillNumber = "4970110";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(tillNumber);
      toast({
        description: "Till number copied to clipboard!",
        duration: 2000,
      });
    } catch (err) {
      toast({
        variant: "destructive",
        description: "Failed to copy. Please try manually.",
        duration: 2000,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container-section max-w-3xl mx-auto px-4">
          {/* Main Content */}
          <div className="text-center space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/46bd7047-6fb2-48c0-bbb6-b3ce48696f02.png" 
                  alt="Audispot254 Logo" 
                  className="h-24 w-auto mb-4" 
                />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-audi-black dark:text-white">
                Support Us
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Love what we're building at Audispot254? 
                <br className="hidden sm:block" />
                Support the community and help us grow! 🚀
                <br className="hidden sm:block" />
                Your contribution helps us keep the Audi spirit strong in Kenya.
              </p>
            </div>

            {/* Till Number Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 max-w-md mx-auto">
              <h2 className="text-lg font-medium text-[#008000] dark:text-green-400 mb-2">
                Our M-Pesa Till Number
              </h2>
              
              <div className="flex items-center justify-center space-x-3 mb-4">
                <span className="text-3xl font-bold font-mono text-audi-black dark:text-white">
                  {tillNumber}
                </span>
                <button
                  onClick={copyToClipboard}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                  aria-label="Copy till number"
                >
                  <Copy className="h-5 w-5 text-[#008000] dark:text-green-400" />
                </button>
              </div>

              <Button 
                onClick={copyToClipboard}
                className="bg-[#008000] hover:bg-[#006400] text-white w-full flex items-center justify-center gap-2"
              >
                <CircleDollarSign className="h-5 w-5" />
                Support via M-Pesa
              </Button>
            </div>

            {/* Additional Note */}
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
              Your support helps us showcase more Audis, create more content, 
              and celebrate the Audi community in Kenya. Asante sana!
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SupportUs;
