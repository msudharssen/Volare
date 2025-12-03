import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function FeedbackForm() {
  return (
    <div className="relative w-full max-w-md">
    <Card className="relative shadow-2xl shadow-gray-300/40 border-gray-200/60 rounded-3xl overflow-hidden backdrop-blur-xl">
      {/* Top accent bar */}
      
      
      <CardHeader className="px-8 pt-9 pb-7 border-b border-gray-100 space-y-3.5">
        <div>
          <CardTitle className="text-xl font-bold text-gray-900 tracking-tight leading-tight">
            Share Your Feedback
          </CardTitle>
          <p className="text-sm text-gray-500 font-medium mt-0.5">
            with the Volare Team
          </p>
        </div>
        <CardDescription className="text-gray-600 text-sm leading-relaxed">
          We'd love to hear from you. Fill out the form below and we'll get back to you shortly.
        </CardDescription>
      </CardHeader>
  
      <CardContent className="px-8 py-7 space-y-5">
        {/* Name row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-sm font-semibold tracking-tight text-gray-700">First Name</Label>
            <Input 
              type="text" 
              required 
              placeholder="Jane" 
              className="px-4 py-3.5 bg-gray-50/50 border-gray-200/80 rounded-xl placeholder-gray-400 
                       focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10
                       hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-semibold tracking-tight text-gray-700">Last Name</Label>
            <Input 
              type="text" 
              required 
              placeholder="Doe" 
              className="px-4 py-3.5 bg-gray-50/50 border-gray-200/80 rounded-xl placeholder-gray-400 
                       focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10
                       hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
            />
          </div>
        </div>
  
        {/* Email */}
        <div className="space-y-2">
          <Label className="text-sm font-semibold tracking-tight text-gray-700">Email Address</Label>
          <Input 
            type="email" 
            required 
            placeholder="jane@example.com" 
            className="px-4 py-3.5 bg-gray-50/50 border-gray-200/80 rounded-xl placeholder-gray-400 
                     focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10
                     hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
          />
        </div>
  
        {/* Message */}
        <div className="space-y-2">
          <Label className="text-sm font-semibold tracking-tight text-gray-700">Message</Label>
          <Textarea 
            required 
            placeholder="Tell us what's on your mind..." 
            rows={4}
            className="px-4 py-3.5 bg-gray-50/50 border-gray-200/80 rounded-xl placeholder-gray-400 resize-none
                     focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10
                     hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
          />
        </div>
      </CardContent>
  
      <CardFooter className="px-8 pb-9 pt-2 flex-col space-y-5">
        <Button 
          type="submit" 
          className="w-full relative group overflow-hidden rounded-xl shadow-lg shadow-emerald-500/25 
                   transition-all 
                   hover:bg-emerald-500 px-6 py-4 hover:cursor-pointer"
        >
          <span className="relative flex items-center justify-center gap-2">
            <span className="font-semibold tracking-wide">Send Feedback</span>
          </span>
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 1.5s infinite'
            }}
          />
        </Button>
      </CardFooter>
    </Card>
  </div>
  );
}