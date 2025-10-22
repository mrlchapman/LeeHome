
import type { ContactFormData } from '../types';

// ============================================================================
// IMPORTANT: This is a MOCK service for demonstration purposes.
// To connect to Supabase:
// 1. Install the Supabase client: `npm install @supabase/supabase-js`
// 2. Uncomment the following lines and replace with your actual credentials.
//
// import { createClient } from '@supabase/supabase-js';
//
// const supabaseUrl = 'YOUR_SUPABASE_URL';
// const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
// const supabase = createClient(supabaseUrl, supabaseKey);
//
// ============================================================================

export const submitContactForm = async (formData: ContactFormData): Promise<{ success: boolean; error?: string }> => {
  console.log('Submitting form data:', formData);

  // --- REAL SUPABASE LOGIC (when ready) ---
  /*
  try {
    const { error } = await supabase
      .from('contact_submissions') // Your table name
      .insert([
        { 
          name: formData.name,
          email: formData.email,
          message: formData.message 
        }
      ]);

    if (error) {
      throw error;
    }

    return { success: true };
  } catch (error: any) {
    console.error('Error submitting to Supabase:', error.message);
    return { success: false, error: 'Failed to send message. Please try again later.' };
  }
  */

  // --- MOCK LOGIC (for now) ---
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate a random failure for testing error states
      // if (Math.random() > 0.7) {
      //   resolve({ success: false, error: 'A simulated network error occurred.' });
      // } else {
        resolve({ success: true });
      // }
    }, 1500); // Simulate network delay
  });
};
