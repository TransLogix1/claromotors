import { useState, useMemo, useCallback } from 'react';
import { Tag, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';

const formatPLN = (value: number): string => {
  if (!isFinite(value) || value <= 0) return '0,00 PLN';
  return new Intl.NumberFormat('pl-PL', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value) + ' PLN';
};

const formatPercent = (value: number): string => {
  if (!isFinite(value) || value <= 0) return '0,00%';
  return value.toFixed(2).replace('.', ',') + '%';
};

export default function Calculator() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [cenaNetto, setCenaNetto] = useState<number>(250000);
  const [okres, setOkres] = useState<number>(36);
  const [wplataProcent, setWplataProcent] = useState<number>(10);
  const [wykupProcent, setWykupProcent] = useState<number>(25);
  const [kodRabatowy, setKodRabatowy] = useState<string>('');
  const [rabatActive, setRabatActive] = useState<boolean>(false);

  const wplataPLN = useMemo(() => cenaNetto * (wplataProcent / 100), [cenaNetto, wplataProcent]);
  const wykupPLN = useMemo(() => cenaNetto * (wykupProcent / 100), [cenaNetto, wykupProcent]);

  const result = useMemo(() => {
    if (!cenaNetto || cenaNetto <= 0) {
      return { rata: 0, wplata: 0, wykup: 0, sumaProcent: 0, sumaPln: 0 };
    }

    const BAZA_OPROCENTOWANIA = rabatActive ? 0.045 : 0.06;
    const miesiecznaStopa = Math.pow(1 + BAZA_OPROCENTOWANIA, 1 / 12) - 1;
    const kapitalDoLeasingu = cenaNetto - wplataPLN;
    const n = okres;

    const pvWykup = wykupPLN / Math.pow(1 + miesiecznaStopa, n);
    const kapitalDoSplaty = kapitalDoLeasingu - pvWykup;

    let rata: number;
    if (Math.abs(miesiecznaStopa) < 1e-10) {
      rata = kapitalDoSplaty / n;
    } else {
      rata = kapitalDoSplaty * (miesiecznaStopa * Math.pow(1 + miesiecznaStopa, n)) / (Math.pow(1 + miesiecznaStopa, n) - 1);
    }

    const sumaPln = wplataPLN + rata * n + wykupPLN;
    const sumaProcent = (sumaPln / cenaNetto) * 100;

    return { rata, wplata: wplataPLN, wykup: wykupPLN, sumaProcent, sumaPln };
  }, [cenaNetto, okres, wplataPLN, wykupPLN, rabatActive]);

  const handleKodRabatowy = useCallback((value: string) => {
    setKodRabatowy(value);
    setRabatActive(value.trim().toUpperCase() === 'RABAT3010');
  }, []);

  const handleApply = () => {
    navigate('/kontakt', {
      state: { rata: result.rata, wplata: result.wplata, wykup: result.wykup },
    });
  };

  return (
    <section id="kalkulator" className="section-padding bg-canvas">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="mb-14 md:mb-20 reveal">
          <h2 className="text-3xl md:text-5xl text-white mb-4">
            {t.calculator.title}
          </h2>
          <p className="text-text-muted text-lg max-w-2xl font-light">
            {t.calculator.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left: Controls */}
          <div className="card p-6 md:p-10 space-y-8">
            <div>
              <label className="block text-sm text-text-muted mb-3 font-medium">
                {t.calculator.priceLabel}
              </label>
              <input
                type="number"
                value={cenaNetto || ''}
                onChange={(e) => setCenaNetto(parseFloat(e.target.value) || 0)}
                placeholder="250 000"
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm text-text-muted mb-3 font-medium">
                {t.calculator.periodLabel}
              </label>
              <div className="flex gap-2">
                {[24, 36, 48, 60].map((m) => (
                  <button
                    key={m}
                    className={`seg-btn ${okres === m ? 'active' : ''}`}
                    onClick={() => setOkres(m)}
                  >
                    {m} {t.calculator.months}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm text-text-muted font-medium">
                  {t.calculator.downPaymentLabel}
                </label>
                <span className="text-sm text-white font-semibold tabular-nums">
                  {wplataProcent}% — {formatPLN(wplataPLN)}
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={45}
                step={5}
                value={wplataProcent}
                onChange={(e) => setWplataProcent(parseInt(e.target.value))}
              />
              <div className="flex justify-between mt-2 text-xs text-text-muted">
                <span>0%</span>
                <span>45%</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm text-text-muted font-medium">
                  {t.calculator.buyoutLabel}
                </label>
                <span className="text-sm text-white font-semibold tabular-nums">
                  {wykupProcent}% — {formatPLN(wykupPLN)}
                </span>
              </div>
              <input
                type="range"
                min={21}
                max={55}
                step={5}
                value={wykupProcent}
                onChange={(e) => setWykupProcent(parseInt(e.target.value))}
              />
              <div className="flex justify-between mt-2 text-xs text-text-muted">
                <span>21%</span>
                <span>55%</span>
              </div>
            </div>

            <div>
              <label className="block text-sm text-text-muted mb-3 font-medium">
                {t.calculator.promoLabel}
              </label>
              <div className="relative">
                <Tag size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                <input
                  type="text"
                  value={kodRabatowy}
                  onChange={(e) => handleKodRabatowy(e.target.value)}
                  placeholder={t.calculator.promoPlaceholder}
                  className="input-field pl-10"
                />
              </div>
              {rabatActive && (
                <div className="flex items-center gap-2 mt-3 text-sm text-white">
                  <CheckCircle2 size={16} className="text-accent" />
                  {t.calculator.promoActive}
                </div>
              )}
            </div>
          </div>

          {/* Right: Summary */}
          <div className="card card-interactive p-6 md:p-10 flex flex-col">
            <h3 className="text-lg text-text-muted font-medium mb-8">
              {t.calculator.summaryTitle}
            </h3>

            <div className="mb-8 pb-8 border-b border-border">
              <p className="text-sm text-text-muted mb-2">{t.calculator.monthlyRate}</p>
              <p className="font-serif text-5xl md:text-6xl text-white tracking-tight tabular-nums">
                {formatPLN(result.rata)}
              </p>
            </div>

            <div className="space-y-5 mb-8">
              <div className="flex items-center justify-between">
                <span className="text-text-muted text-sm">{t.calculator.downPayment}</span>
                <span className="text-white text-base font-medium tabular-nums">
                  {formatPLN(result.wplata)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text-muted text-sm">{t.calculator.buyout}</span>
                <span className="text-white text-base font-medium tabular-nums">
                  {formatPLN(result.wykup)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text-muted text-sm">{t.calculator.totalPercent}</span>
                <span className="text-white text-base font-medium tabular-nums">
                  {formatPercent(result.sumaProcent)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text-muted text-sm">{t.calculator.totalPln}</span>
                <span className="text-white text-base font-medium tabular-nums">
                  {formatPLN(result.sumaPln)}
                </span>
              </div>
            </div>

            <div className="mt-auto">
              <button onClick={handleApply} className="btn-primary w-full">
                {t.calculator.applyButton}
                <ArrowRight size={18} />
              </button>
              <p className="text-xs text-text-muted text-center mt-4">
                {t.calculator.applyHint}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
