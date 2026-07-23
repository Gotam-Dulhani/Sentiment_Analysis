import { useState } from 'react'
import axios from 'axios'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Info, TrendingUp, AlertCircle, Sparkles } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import './index.css'

function App() {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const analyzeSentiment = async () => {
    if (!text.trim()) return
    
    setLoading(true)
    setError(null)
    
    try {
      const response = await axios.post('/analyze', { text })
      setResult(response.data)
    } catch (err) {
      setError('Could not reach the analysis server. Make sure the backend is running.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const getChartData = () => {
    if (!result) return []
    return [
      { name: 'Positive', value: result.scores.pos },
      { name: 'Neutral', value: result.scores.neu },
      { name: 'Negative', value: result.scores.neg },
    ]
  }

  const COLORS = ['#22c55e', '#64748b', '#ef4444']

  return (
    <div className="app-container">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Sentiment AI</h1>
        <p className="subtitle">Decode the emotional tone of any text instantly with our advanced NLP engine.</p>
      </motion.div>

      <div className="glass-card">
        <div className="input-group">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste customer feedback, a review, or any text here..."
            disabled={loading}
          />
        </div>

        <div className="button-container">
          <button 
            className="analyze-btn" 
            onClick={analyzeSentiment}
            disabled={loading || !text.trim()}
          >
            {loading ? <div className="spinner" /> : <Sparkles size={20} />}
            {loading ? 'Analyzing...' : 'Analyze Sentiment'}
          </button>
        </div>

        <AnimatePresence>
          {error && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="error-message"
              style={{ color: '#ef4444', textAlign: 'center', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
            >
              <AlertCircle size={18} />
              {error}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {result && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="results-grid"
          >
            <div className="stat-card fade-in">
              <span className="stat-label">Overall Sentiment</span>
              <div className={`stat-value sentiment-${result.sentiment}`}>
                {result.sentiment}
              </div>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                {result.sentiment === 'Positive' ? 'The tone is uplifting and favorable.' : 
                 result.sentiment === 'Negative' ? 'The tone suggests dissatisfaction or criticism.' : 
                 'The tone is objective and unbiased.'}
              </p>
            </div>

            <div className="stat-card fade-in" style={{ animationDelay: '0.1s' }}>
              <span className="stat-label">Intensity Score</span>
              <div className="stat-value" style={{ color: 'var(--primary)' }}>
                {(result.polarity * 100).toFixed(1)}%
              </div>
              <div style={{ width: '100%', height: '100px', marginTop: '1rem' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={getChartData()}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={45}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {getChartData().map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="footer">
        <div className="divider"></div>
        <p className="footer-text">Built with ❤️ using FastAPI, NLTK & VADER</p>
        <p className="footer-subtext">Made by Gotam Dulhani</p>
      </footer>
    </div>
  )
}

export default App
