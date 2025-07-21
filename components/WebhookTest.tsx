'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { sendEmail } from '@/utils/email';

export default function WebhookTest() {
  const [result, setResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const testWebhook = async () => {
    setIsLoading(true);
    setResult('Testing...');
    
    try {
      await sendEmail({
        name: 'Test User',
        email: 'test@example.com',
        phone: '0612345678',
        postcode: '6121AB',
        service: 'test',
        message: 'This is a test submission from the webhook test component'
      });
      
      setResult('✅ Success! Dual submission completed (check both EmailJS and GoHighLevel)');
    } catch (error) {
      setResult(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-4">Webhook Test Component</h3>
      <Button 
        onClick={testWebhook} 
        disabled={isLoading}
        className="mb-4"
      >
        {isLoading ? 'Testing...' : 'Test Dual Submission'}
      </Button>
      {result && (
        <div className="p-3 bg-gray-100 rounded text-sm">
          {result}
        </div>
      )}
    </div>
  );
}