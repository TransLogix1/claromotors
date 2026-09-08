import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Tag, Clock } from 'lucide-react';
import { blogArticles } from '@/types';
import { useLanguage } from '@/i18n/LanguageContext';

export default function BlogArticlePage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const article = blogArticles.find((a) => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-3xl text-white mb-4">404</h2>
          <Link to="/blog" className="btn-primary">
            <ArrowLeft size={18} />
            {t.nav.blog}
          </Link>
        </div>
      </div>
    );
  }

  const related = blogArticles.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <div className="pt-32 md:pt-36 pb-20">
      <section className="section-padding pt-0 pb-10">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            {t.nav.blog}
          </Link>

          <div className="flex items-center gap-4 mb-5">
            <span className="inline-flex items-center gap-1.5 text-xs text-text-muted">
              <Tag size={13} className="text-accent" />
              {article.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-text-muted">
              <Calendar size={13} />
              {article.date}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-text-muted">
              <Clock size={13} />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl text-white mb-8 leading-tight">{article.title}</h1>

          <div className="space-y-5">
            {article.content.map((paragraph, i) => (
              <p key={i} className="text-text-light leading-relaxed font-light">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding pt-0">
          <div className="max-w-3xl mx-auto px-6 lg:px-10 border-t border-border pt-10">
            <h2 className="text-lg text-white mb-6">{t.blog.related}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((a) => (
                <Link key={a.id} to={`/blog/${a.id}`} className="card p-5 group">
                  <p className="text-xs text-accent mb-2">{a.category}</p>
                  <h3 className="text-sm text-white leading-snug group-hover:text-accent transition-colors mb-3">
                    {a.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xs text-text-muted group-hover:text-accent transition-colors">
                    {t.blog.readArticle}
                    <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
