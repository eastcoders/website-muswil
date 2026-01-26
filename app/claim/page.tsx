import React from 'react';
import Image from 'next/image';
import { Instagram, Upload, ImageIcon } from 'lucide-react';

// TODO: Insert Google Form Link here.
const GOOGLE_FORM_URL = '';

export default function ClaimPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-yellow-500/30">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-12 text-center">
        <div className="flex items-center justify-center gap-6 mb-8">
            {/* Event Logo */}
            <div className="relative w-20 h-20 md:w-24 md:h-24">
                <Image
                    src="/image/logo/muswil.png"
                    alt="Muswil VI Logo"
                    fill
                    className="object-contain"
                />
            </div>
            <div className="h-12 w-px bg-zinc-800 self-center" />
            {/* Biznet Logo */}
             <div className="relative w-32 h-16 md:w-40 md:h-20">
                <Image
                    src="/image/sponsorships/main-sponsor/biznet.png"
                    alt="Biznet Gio Logo"
                    fill
                    className="object-contain"
                />
            </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          Claim Your <span className="text-yellow-400">Free Server</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
          Exclusive Benefit for Muswil VI Delegates. Powered by Biznet Gio.
        </p>
      </section>

      {/* Steps Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-500/50 transition-colors group">
            <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-400/20 transition-colors">
              <Instagram className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">1. Snap & Post</h3>
            <p className="text-zinc-400 leading-relaxed">
              Upload a photo of the event to your Instagram Story. Tag <span className="text-white font-medium">@biznetgio</span> & <span className="text-white font-medium">@muswil6_jateng</span>.
            </p>
          </div>

          {/* Step 2 */}
           <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-500/50 transition-colors group">
            <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-400/20 transition-colors">
              <ImageIcon className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">2. Take a Screenshot</h3>
            <p className="text-zinc-400 leading-relaxed">
               Capture proof of your story showing the tags. Make sure it is clearly visible.
            </p>
          </div>

          {/* Step 3 */}
           <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-500/50 transition-colors group">
            <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-400/20 transition-colors">
              <Upload className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">3. Fill the Form</h3>
            <p className="text-zinc-400 leading-relaxed">
               Upload your screenshot proof. The unique Voucher Code will be sent to your Email automatically.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 pb-24 text-center">
        <a
          href={GOOGLE_FORM_URL || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-yellow-400 rounded-full hover:bg-yellow-300 transition-transform active:scale-95 shadow-lg shadow-yellow-400/20"
        >
          UPLOAD PROOF & CLAIM VOUCHER
        </a>
        <p className="mt-6 text-sm text-zinc-500 font-medium">
          Limited to 1 voucher per Delegate/Association.
        </p>
      </section>
    </main>
  );
}
