/**
 * صفحة الهبوط - الإبحار في الفراغ | Void Navigation
 * 
 * Design Philosophy: Cosmic Minimalism
 * - Dark Mode with deep blacks and grays representing the void
 * - Sky blue accents (#4a9eff) for interactive elements
 * - Subtle purple accents (#7c3aed) for secondary emphasis
 * - Elegant typography using Playfair Display, Lora, and Poppins
 * - Smooth transitions and fade-in animations
 */

import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground cosmic-gradient">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="cosmic-title text-2xl">Void Navigation</div>
          <div className="flex gap-6">
            <a href="#about" className="cosmic-body hover:text-accent transition-colors">
              عن المنصة
            </a>
            <a href="#social" className="cosmic-body hover:text-accent transition-colors">
              تابعنا
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className={`text-center max-w-4xl mx-auto ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          {/* Main Title */}
          <h1 className="cosmic-title text-5xl md:text-7xl mb-8 leading-tight">
            الإبحار في الفراغ
            <br />
            <span className="text-accent">Void Navigation</span>
          </h1>

          {/* Divider */}
          <div className="cosmic-divider"></div>

          {/* Subtitle */}
          <p className="cosmic-body text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            منصة شبابية تثقيفية تبحث في تقاطعات الفلسفة والعلوم والأدب. نحن نؤمن أن "الفراغ" ليس عدماً، بل هو المختبر الأكبر الذي تولد فيه أعظم الأفكار والنجوم.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#about" className="cosmic-button cosmic-transition">
              اكتشف المزيد
            </a>
            <a 
              href="https://www.facebook.com/share/1Awp3JfLzD/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cosmic-button cosmic-transition"
              style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #4a9eff 100%)' }}
            >
              تابعنا على فيسبوك
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <h2 className="cosmic-subtitle text-4xl mb-6">رؤيتنا</h2>
              <p className="cosmic-body text-lg mb-6">
                في عالم يتسارع نحو التخصص الضيق، نؤمن بأهمية الفهم الشامل الذي يجمع بين الفلسفة والعلوم والأدب. المعرفة الحقيقية تولد من التقاطعات، من الحوارات بين التخصصات المختلفة.
              </p>
              <p className="cosmic-body text-lg mb-6">
                منصتنا تهدف إلى تجميع الشباب الفضولي الذين يسعون لفهم العالم من زوايا متعددة. نحن نؤمن أن الفراغ—سواء كان فلسفياً أو علمياً أو أدبياً—ليس مكاناً للخوف، بل هو مختبر للاستكشاف والإبداع.
              </p>
              <p className="cosmic-body text-lg">
                كل فكرة عظيمة بدأت في الفراغ. كل نجم وُلد من سحابة من الغبار والغاز. كل عمل أدبي خالد نشأ من فراغ الصفحة البيضاء. نحن هنا لنساعدك على ملء هذا الفراغ بالمعنى والجمال.
              </p>
            </div>

            {/* Right Visual */}
            <div className={`flex justify-center items-center ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <div className="w-full h-96 rounded-lg cosmic-glow flex items-center justify-center border border-border">
                <div className="text-center">
                  <div className="text-6xl mb-4">✦</div>
                  <p className="cosmic-body text-sm">الفراغ هو المختبر الأكبر</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 border-t border-border">
        <div className="container mx-auto">
          <h2 className="cosmic-subtitle text-4xl mb-12 text-center">ما نقدمه</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className={`p-8 rounded-lg border border-border cosmic-transition hover:cosmic-glow ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl mb-4">📚</div>
              <h3 className="cosmic-subtitle text-xl mb-4">محتوى فكري</h3>
              <p className="cosmic-body">
                مقالات وأبحاث تجمع بين الفلسفة والعلوم والأدب، تكتبها عقول شابة فضولية.
              </p>
            </div>

            {/* Feature 2 */}
            <div className={`p-8 rounded-lg border border-border cosmic-transition hover:cosmic-glow ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl mb-4">💬</div>
              <h3 className="cosmic-subtitle text-xl mb-4">حوارات مفتوحة</h3>
              <p className="cosmic-body">
                منتديات ونقاشات حية حول أفكار تشغل بال الشباب المثقف.
              </p>
            </div>

            {/* Feature 3 */}
            <div className={`p-8 rounded-lg border border-border cosmic-transition hover:cosmic-glow ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="cosmic-subtitle text-xl mb-4">مجتمع نابض</h3>
              <p className="cosmic-body">
                تجمع من الشباب الذين يؤمنون بقوة الفكر والحوار والإبداع.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section id="social" className="py-20 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="cosmic-subtitle text-4xl mb-8">تابعنا</h2>
            <p className="cosmic-body text-lg mb-12">
              انضم إلى مجتمعنا على فيسبوك واستمع إلى آخر الأفكار والنقاشات
            </p>
            
            <a 
              href="https://www.facebook.com/share/1Awp3JfLzD/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cosmic-button cosmic-transition inline-block text-lg"
            >
              تابعنا على فيسبوك
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center">
            <p className="cosmic-body">
              الإبحار في الفراغ © 2026
            </p>
            <p className="cosmic-body text-sm text-muted-foreground mt-2">
              منصة شبابية تثقيفية
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
