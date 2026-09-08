import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { blogArticles } from '@/types';
import { useLanguage } from '@/i18n/LanguageContext';

export default function BlogPage() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 md:pt-36 pb-20">
      <section className="section-padding pt-0">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <div className="mb-14 md:mb-16">
            <p className="eyebrow mb-4">{t.nav.blog}</p>
            <h1 className="text-3xl md:text-5xl text-white mb-4">{t.blog.title}</h1>
            <p className="text-text-muted text-lg max-w-2xl font-light">{t.blog.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogArticles.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.id}`}
                className="card card-interactive p-6 md:p-8 flex flex-col group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs text-text-muted">
                    <Tag size={13} className="text-accent" />
                    {article.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-text-muted">
                    <Calendar size={13} />
                    {article.date}
                  </span>
                </div>
                <h2 className="text-xl text-white mb-4 leading-snug group-hover:text-accent transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-text-muted leading-relaxed font-light flex-1">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2 mt-6 pt-6 border-t border-border text-sm text-white group-hover:text-accent transition-colors">
                  {t.blog.readArticle}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
